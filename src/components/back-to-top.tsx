"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";
import { useLang } from "@/i18n/use-lang";

const THRESHOLD = 420;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// دکمه‌ی «برگشت به بالا»:
// - پس از مقداری اسکرول ظاهر می‌شود (هم در حالت اسکرول پنجره، هم عرشه‌ی دسکتاپ)
// - با انیمیشن آهسته (rAF + easing) به بالای صفحه برمی‌گردد
export function BackToTop() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  // در حالت توسعه، نشانگر Next.js گوشه‌ی پایین را می‌پوشاند؛ دکمه را بالاتر می‌بریم
  useEffect(() => {
    const btn = btnRef.current;
    if (btn && document.querySelector("nextjs-portal")) {
      btn.dataset.devOffset = "true";
    }
  }, []);

  useEffect(() => {
    const deck = document.getElementById("deck");

    const onScroll = () => {
      const y = window.scrollY + (deck ? deck.scrollTop : 0);
      setVisible(y > THRESHOLD);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    deck?.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      deck?.removeEventListener("scroll", onScroll);
    };
  }, []);

  function goTop() {
    const deck = document.getElementById("deck");
    const deckScrollable = !!deck && deck.scrollHeight > deck.clientHeight + 8;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startY = deckScrollable ? deck!.scrollTop : window.scrollY;
    if (startY <= 1) return;

    if (reduce) {
      if (deckScrollable) deck!.scrollTop = 0;
      else window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    // اسکرول آهسته با easing؛ behavior مرورگر را موقتاً خاموش می‌کنیم
    // تا با scroll-behavior:smooth عرشه تداخل نکند.
    const prevBehavior = deck?.style.scrollBehavior;
    if (deck) deck.style.scrollBehavior = "auto";

    const duration = 1400;
    const t0 = performance.now();

    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const y = startY * (1 - easeInOutCubic(p));
      if (deckScrollable) deck!.scrollTop = y;
      else window.scrollTo(0, y);

      if (p < 1) {
        requestAnimationFrame(step);
      } else if (deck) {
        deck.style.scrollBehavior = prevBehavior ?? "";
      }
    };

    requestAnimationFrame(step);
  }

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={goTop}
      className="back-to-top"
      data-visible={visible ? "true" : "false"}
      aria-label={t.misc.topUp}
      title={t.misc.topUp}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={20} weight="bold" aria-hidden="true" />
    </button>
  );
}
