"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { supportedLanguages, type LanguageCode } from "@/lib/i18n-resources";

const STORAGE_KEY = "uniquePin.language";

const languages: Array<{
  code: LanguageCode;
  label: string;
  nativeLabel: string;
}> = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "de", label: "German", nativeLabel: "Deutsch" },
  { code: "fr", label: "French", nativeLabel: "Francais" },
  { code: "es", label: "Spanish", nativeLabel: "Espanol" },
  { code: "it", label: "Italian", nativeLabel: "Italiano" },
  { code: "pt", label: "Portuguese", nativeLabel: "Portugues" },
  { code: "ar", label: "Arabic", nativeLabel: "Arabic" },
  { code: "ja", label: "Japanese", nativeLabel: "Japanese" }
];

function normalizeLanguage(value: string | null | undefined): LanguageCode {
  const locale = (value || "").toLowerCase();
  const match = supportedLanguages.find((language) => locale.startsWith(language));
  return match || "en";
}

export function LanguageSwitcher() {
  const [selected, setSelected] = useState<LanguageCode>("en");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const activeLanguage = useMemo(
    () => languages.find((language) => language.code === selected) || languages[0],
    [selected]
  );

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const detected = saved || window.navigator.language;
    const language = normalizeLanguage(detected);
    setSelected(language);
    applyLanguage(language);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  function applyLanguage(language: LanguageCode) {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.dataset.language = language;
    window.dispatchEvent(
      new CustomEvent("unique-pin-language-change", { detail: { language } })
    );
  }

  function selectLanguage(language: LanguageCode) {
    setSelected(language);
    window.localStorage.setItem(STORAGE_KEY, language);
    applyLanguage(language);
    setOpen(false);
  }

  return (
    <div className="language-switcher" ref={rootRef}>
      <button
        className="language-button"
        type="button"
        aria-label="Select website language"
        aria-expanded={open}
        onClick={(event) => {
          event.stopPropagation();
          setOpen((current) => !current);
        }}
      >
        <span className={`language-flag flag-${activeLanguage.code}`} aria-hidden="true" />
        <span>{activeLanguage.code.toUpperCase()}</span>
        <span className="language-caret" aria-hidden="true">
          v
        </span>
      </button>
      <div className={`language-menu${open ? " open" : ""}`} role="menu">
        {languages.map((language) => (
          <button
            className={language.code === selected ? "language-option active" : "language-option"}
            key={language.code}
            type="button"
            role="menuitem"
            onClick={() => selectLanguage(language.code)}
          >
            <span className={`language-flag flag-${language.code}`} aria-hidden="true" />
            <span>
              <strong>{language.label}</strong>
              <small>{language.nativeLabel}</small>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
