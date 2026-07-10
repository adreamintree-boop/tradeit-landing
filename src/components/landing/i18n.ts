// i18n store for the main TradeIt landing page.
// - Dictionaries are plain TS objects with identical shapes.
// - `useT()` returns the active dictionary and re-renders on language change.
// - `setLang(code)` updates the active language and persists to localStorage.

import { useSyncExternalStore } from "react";
import { mainEn } from "./main-i18n-en";
import { mainKo } from "./main-i18n-ko";
import { mainJa } from "./main-i18n-ja";
import { mainZh } from "./main-i18n-zh";
import { mainRu } from "./main-i18n-ru";
import { mainEs } from "./main-i18n-es";
import { mainVi } from "./main-i18n-vi";

export type LangCode = "en" | "ko" | "ja" | "zh" | "ru" | "es" | "vi";

export type MainDict = typeof mainEn;

export const dictionaries = {
  en: mainEn,
  ko: mainKo,
  ja: mainJa,
  zh: mainZh,
  ru: mainRu,
  es: mainEs,
  vi: mainVi,
} as unknown as Record<LangCode, MainDict>;

export const LANGUAGES: {
  code: LangCode;
  short: string;
  label: string;
}[] = [
  { code: "en", short: "US", label: "English" },
  { code: "ko", short: "KR", label: "한국어" },
  { code: "ja", short: "JP", label: "日本語" },
  { code: "zh", short: "CN", label: "中文" },
  { code: "ru", short: "RU", label: "Русский" },
  { code: "es", short: "ES", label: "Español" },
  { code: "vi", short: "VN", label: "Tiếng Việt" },
];

const STORAGE_KEY = "tradeit.lang";

function readInitial(): LangCode {
  if (typeof window === "undefined") return "en";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && saved in dictionaries) return saved as LangCode;
  } catch {
    /* ignore */
  }
  return "en";
}

let currentLang: LangCode = readInitial();
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): LangCode {
  return currentLang;
}

function getServerSnapshot(): LangCode {
  return "en";
}

export function getLang(): LangCode {
  return currentLang;
}

export function setLang(code: LangCode) {
  if (!(code in dictionaries)) return;
  currentLang = code;
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, code);
    }
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
}

export function useLang(): LangCode {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useT(): MainDict {
  const code = useLang();
  return dictionaries[code];
}
