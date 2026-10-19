"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Code, List, PaperPlaneTilt, X } from "@phosphor-icons/react";
import { site } from "@/data/site";
import { scrollToSection } from "@/lib/deck-nav";
import { useLang } from "@/i18n/use-lang";
import { ThemeToggle } from "./theme-toggle";
import { LangToggle } from "./lang-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onSection = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (typeof id === "string" && id) setActive(id);
    };
    window.addEventListener("section-change", onSection);
    return () => window.removeEventListener("section-change", onSection);
  }, []);

  const handleNav = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault();
      scrollToSection(id);
    }
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${site.brand} - ${t.nav.home}`}
          onClick={() => setOpen(false)}
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-[10px] bg-accent text-onaccent">
            <Code size={17} weight="bold" aria-hidden="true" />
          </span>
          <span
            dir="ltr"
            className="whitespace-nowrap font-mono text-[15px] font-semibold tracking-tight"
          >
            {site.brand}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label={t.misc.navAria}>
          {site.nav.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              onClick={handleNav(item.id)}
              className="nav-link"
              data-active={isHome && active === item.id ? "true" : undefined}
            >
              {t.nav[item.id]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <Link
            href="/#contact"
            onClick={handleNav("contact")}
            className="btn btn-primary btn-sm hidden sm:inline-flex"
          >
            <PaperPlaneTilt size={15} weight="fill" aria-hidden="true" />
            {t.misc.contactCta}
          </Link>
          <button
            type="button"
            className="btn btn-ghost btn-sm lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.misc.menuClose : t.misc.menuOpen}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X size={18} aria-hidden="true" />
            ) : (
              <List size={18} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-line px-5 pb-5 pt-2 backdrop-blur-xl lg:hidden"
          style={{ background: "var(--header-bg)" }}
        >
          <nav className="flex flex-col" aria-label={t.misc.navMobileAria}>
            {site.nav.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={handleNav(item.id)}
                className="rounded-xl px-3 py-3 text-[15px] font-medium hover:bg-[var(--accent-soft)]"
              >
                {t.nav[item.id]}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={handleNav("contact")}
              className="btn btn-primary mt-3"
            >
              <PaperPlaneTilt size={15} weight="fill" aria-hidden="true" />
              {t.misc.contactCta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
