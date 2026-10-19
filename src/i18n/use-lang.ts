"use client";

import { useSyncExternalStore } from "react";
import { dict, type Dict, type Lang } from "./dict";

// ------------------------------------------------------------------
// مدیریت زبان (fa/en) + جهت rtl/ltr
// - حالت اولیه همیشه «fa» است تا با خروج SSR یکی باشد (بدون mismatch).
// - اسکریپت بوت‌استاپ در layout، قبل از paint، html.lang/dir را بر اساس
//   localStorage تنظیم می‌کند؛ پس در موبایل/دسکتاپ چیدمان درست است.
// - setLang: html را تغییر داده، در localStorage ذخیره و رندر را به‌روز می‌کند.
// ------------------------------------------------------------------

const KEY = "ali-portfolio-lang";

let current: Lang = "fa";
const listeners = new Set<() => void>();

function emit() {
  for (const l of listeners) l();
}

export const langStore = {
  subscribe(cb: () => void) {
    listeners.add(cb);
    return () => {
      listeners.delete(cb);
    };
  },
  getSnapshot: () => current,
  // در SSR و رندرهای اولیه‌ی کلاینت همیشه «fa» تا با HTML سرور یکی باشد
  getServerSnapshot: (): Lang => "fa",
  set(l: Lang) {
    if (current === l) return;
    current = l;
    const root = document.documentElement;
    root.lang = l;
    root.dir = l === "fa" ? "rtl" : "ltr";
    try {
      localStorage.setItem(KEY, l);
    } catch {
      // حافظه‌ی محلی در دسترس نیست؛ فقط رندر فعلی تغییر می‌کند
    }
    emit();
  },
};

export interface UseLang {
  lang: Lang;
  t: Dict;
  dir: "rtl" | "ltr";
  setLang: (l: Lang) => void;
}

export function useLang(): UseLang {
  const lang = useSyncExternalStore(
    langStore.subscribe,
    langStore.getSnapshot,
    langStore.getServerSnapshot
  );
  return {
    lang,
    t: dict[lang],
    dir: lang === "fa" ? "rtl" : "ltr",
    setLang: (l) => langStore.set(l),
  };
}
