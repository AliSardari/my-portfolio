"use client";

import { useTheme } from "next-themes";
import { MoonStars, Sun } from "@phosphor-icons/react";
import { useLang } from "@/i18n/use-lang";

type DocumentWithTransition = Document & {
  startViewTransition?: (callback: () => void) => { ready: Promise<void> };
};

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const { t } = useLang();

  function toggle(e: React.MouseEvent<HTMLButtonElement>) {
    const isDark = document.documentElement.classList.contains("dark");
    const next = isDark ? "light" : "dark";

    const apply = () => {
      document.documentElement.classList.toggle("dark", next === "dark");
      setTheme(next);
    };

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const doc = document as DocumentWithTransition;
    if (!doc.startViewTransition || reduce) {
      setTheme(next);
      return;
    }

    const { clientX: x, clientY: y } = e;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(apply);
    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 550,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => {});
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="grid size-[38px] place-items-center rounded-full border border-line2 bg-[var(--glass)] text-ink transition-colors hover:border-accent hover:text-accenttext"
      aria-label={t.misc.theme}
      title={t.misc.theme}
    >
      <span
        className="relative grid size-[18px] place-items-center"
        aria-hidden="true"
      >
        <Sun size={18} className="theme-ic theme-ic-sun" />
        <MoonStars size={18} className="theme-ic theme-ic-moon" />
      </span>
    </button>
  );
}
