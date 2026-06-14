"use client";

import { useEffect, useRef } from "react";
import { findSourceFromAnyLanguage, getTranslation, supportedLanguages, type LanguageCode } from "@/lib/i18n-resources";

const STORAGE_KEY = "uniquePin.language";
const ATTRS = ["placeholder", "aria-label", "title", "alt"];
const textSourceMap = new WeakMap<Text, string>();
let isTranslating = false;
let queuedLanguage: LanguageCode | null = null;

function normalizeLanguage(value: string | null | undefined): LanguageCode {
  const locale = (value || "").toLowerCase();
  const match = supportedLanguages.find((language) => locale.startsWith(language));
  return match || "en";
}

function clean(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function shouldSkipNode(node: Node) {
  const parent = node.parentElement;
  return !parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName);
}

function translateTextNode(node: Text, language: LanguageCode) {
  if (shouldSkipNode(node)) return;
  const original = clean(node.nodeValue || "");
  if (!original) return;
  const source = textSourceMap.get(node) || findSourceFromAnyLanguage(original);
  textSourceMap.set(node, source);
  const translated = getTranslation(source, language);
  if (translated !== original) {
    const raw = node.nodeValue || "";
    const leading = raw.match(/^\s*/)?.[0] || "";
    const trailing = raw.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${translated}${trailing}`;
  }
}

function translateElementAttributes(element: Element, language: LanguageCode) {
  for (const attr of ATTRS) {
    const value = element.getAttribute(attr);
    if (!value) continue;
    const sourceAttr = `data-i18n-${attr}-source`;
    const source = element.getAttribute(sourceAttr) || findSourceFromAnyLanguage(clean(value));
    element.setAttribute(sourceAttr, source);
    element.setAttribute(attr, getTranslation(source, language));
  }
}

function translatePage(language: LanguageCode) {
  if (isTranslating) {
    queuedLanguage = language;
    return;
  }
  isTranslating = true;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.dataset.language = language;
  document.body.classList.add("language-updating");

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode as Text);
  textNodes.forEach((node) => translateTextNode(node, language));

  document.querySelectorAll("input, textarea, img, [aria-label], [title]").forEach((element) => {
    translateElementAttributes(element, language);
  });

  window.setTimeout(() => {
    document.body.classList.remove("language-updating");
    isTranslating = false;
    if (queuedLanguage && queuedLanguage !== language) {
      const nextLanguage = queuedLanguage;
      queuedLanguage = null;
      translatePage(nextLanguage);
    } else {
      queuedLanguage = null;
    }
  }, 140);
}

export function TranslationRuntime() {
  const languageRef = useRef<LanguageCode>("en");

  useEffect(() => {
    const initial = normalizeLanguage(
      window.localStorage.getItem(STORAGE_KEY) || window.navigator.language
    );
    languageRef.current = initial;
    translatePage(initial);

    function handleLanguageChange(event: Event) {
      const language = normalizeLanguage(
        (event as CustomEvent<{ language?: string }>).detail?.language
      );
      languageRef.current = language;
      translatePage(language);
    }

    const observer = new MutationObserver(() => {
      window.requestAnimationFrame(() => translatePage(languageRef.current));
    });

    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("unique-pin-language-change", handleLanguageChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("unique-pin-language-change", handleLanguageChange);
    };
  }, []);

  return null;
}
