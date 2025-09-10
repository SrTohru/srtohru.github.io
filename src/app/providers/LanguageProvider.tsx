"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { messages, type Locale } from "@/i18n/dictionary";

/**
 * @typedef {object} Ctx
 * @property {Locale} locale - The current locale.
 * @property {(l: Locale) => void} setLocale - Function to set the new locale.
 * @property {typeof messages[Locale]} t - The object with the translations.
 */
type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: (typeof messages)[Locale] };
const LanguageContext = createContext<Ctx | undefined>(undefined);

/**
 * Provides the application with the language context.
 *
 * @param {{ children: React.ReactNode }} { children } - The children components to be rendered within the provider.
 * @returns {JSX.Element} The LanguageProvider component.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Initialize the locale from localStorage if it exists, otherwise default to 'es'.
  const [locale, setLocale] = useState<Locale>(() =>
    (typeof window !== "undefined" && (localStorage.getItem("locale") as Locale)) || "es"
  );

  // This effect runs when the locale changes.
  // It updates the localStorage and the `lang` attribute of the `<html>` tag.
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
      document.documentElement.lang = locale;
    }
  }, [locale]);

  // Memoize the translations object to avoid re-calculating it on every render.
  const t = useMemo(() => messages[locale], [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Custom hook to use the language context.
 * This hook provides access to the current locale, a function to set the locale, and the translations object.
 *
 * @returns {{locale: Locale, setLocale: (l: Locale) => void, t: (typeof messages)[Locale]}} The language context, containing the current locale, a function to set the locale, and the translations object.
 * @throws {Error} If the hook is not used within a `LanguageProvider`.
 */
export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
