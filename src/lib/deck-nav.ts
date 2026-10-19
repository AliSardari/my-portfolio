// ابزار ناوبری بین بخش‌های «عرشه» (صفحه اصلی)
// بدون استفاده از scrollIntoView — مطابق قواعد، اسکرول مستقیم کنترل می‌شود.

export function scrollToSection(id: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;

  const deck = document.getElementById("deck");
  const deckScrollable =
    !!deck && deck.scrollHeight > deck.clientHeight + 8;

  if (deck && deckScrollable && deck.contains(el)) {
    deck.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export type SectionId = "home" | "about" | "projects" | "contact";
