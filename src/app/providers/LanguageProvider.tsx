"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { messages, type Locale } from "@/i18n/dictionary";

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: (typeof messages)[Locale] };
const LanguageContext = createContext<Ctx | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("locale") as Locale | null;
      if (saved && saved !== locale) {
        setLocale(saved);
      }
    }
  }, []); 

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const t = useMemo(() => messages[locale], [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
