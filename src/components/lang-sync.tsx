"use client";

import { useEffect } from "react";
import { langStore, useLang } from "@/i18n/use-lang";

// پس از هیدریشن، زبان ذخیره‌شده را اعمال می‌کند.
// رندر سمت سرور و اولین رندر کلاینت همیشه «fa» است تا hydration mismatch
// رخ ندهد؛ سپس این کامپوننت زبان ذخیره‌شده را فعال می‌کند.
export function LangSync() {
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ali-portfolio-lang");
      if (saved === "en" || saved === "fa") langStore.set(saved);
    } catch {
      // حافظه‌ی محلی در دسترس نیست — پیش‌فرض فارسی می‌ماند
    }
  }, []);

  return null;
}

export function SkipLink() {
  const { t } = useLang();
  return (
    <a
      href="#main"
      className="btn btn-primary sr-only focus:not-sr-only focus:absolute focus:top-3 focus:right-3 focus:z-[100]"
    >
      {t.misc.skip}
    </a>
  );
}
