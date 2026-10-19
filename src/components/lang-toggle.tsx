"use client";

import { useLang } from "@/i18n/use-lang";

export function LangToggle() {
  const { lang, t, setLang } = useLang();

  return (
    <button
      type="button"
      onClick={() => setLang(lang === "fa" ? "en" : "fa")}
      className="grid size-[38px] place-items-center rounded-full border border-line2 bg-[var(--glass)] font-mono text-[11.5px] font-bold uppercase tracking-wide text-ink transition-colors hover:border-accent hover:text-accenttext"
      aria-label={t.misc.langAria}
      title={t.misc.langAria}
      lang={lang === "fa" ? "en" : "fa"}
      dir="ltr"
    >
      {t.misc.langTarget}
    </button>
  );
}
