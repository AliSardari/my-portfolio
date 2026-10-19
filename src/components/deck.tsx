"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { scrollToSection, type SectionId } from "@/lib/deck-nav";
import { useMounted } from "@/lib/use-mounted";
import { useLang } from "@/i18n/use-lang";
import { Stage } from "./stage";
import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section";
import { ProjectsSection } from "./projects-section";
import { ContactSection } from "./contact-section";
import { BackToTop } from "./back-to-top";

const SECTION_IDS: SectionId[] = ["home", "about", "projects", "contact"];

export function Deck() {
  const [active, setActive] = useState<SectionId>("home");
  const ready = useMounted();
  const deckRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  // پیمایش دقیق به هش (وقتی از صفحه گواهینامه‌ها برمی‌گردیم)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!(SECTION_IDS as string[]).includes(hash)) return;

    const jump = () => {
      const deck = document.getElementById("deck");
      const el = document.getElementById(hash);
      if (!el) return;
      if (deck && deck.scrollHeight > deck.clientHeight + 8) {
        // پرش لحظه‌ای (بدون اسکرول نرم) تا موقعیت دقیق تضمین شود
        const prev = deck.style.scrollBehavior;
        deck.style.scrollBehavior = "auto";
        deck.scrollTop = el.offsetTop;
        deck.style.scrollBehavior = prev;
      } else {
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 72,
          behavior: "instant" as ScrollBehavior,
        });
      }
    };

    const t1 = window.setTimeout(jump, 260);
    const t2 = window.setTimeout(jump, 1100);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  // تشخیص بخش فعال: بخشی که خط میانی ویوپورت را در بر می‌گیرد
  // (برای سکشن‌های بلند در موبایل هم درست کار می‌کند)
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;
    const sections = deck.querySelectorAll<HTMLElement>("section[data-section]");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.section as SectionId;
            if (id) setActive(id);
          }
        }
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // اعلام بخش فعال به هدر و بقیه اجزا
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("section-change", { detail: active }));
  }, [active]);

  const go = useCallback((id: SectionId) => scrollToSection(id), []);

  return (
    <>
      <Stage active={active} />
      <div
        id="deck"
        ref={deckRef}
        className="deck"
        data-ready={ready ? "true" : "false"}
        data-active-section={active}
      >
        <HeroSection active={active} go={go} />
        <AboutSection active={active} />
        <ProjectsSection active={active} />
        <ContactSection active={active} />
      </div>

      <nav className="dots hidden lg:flex" aria-label={t.misc.navAria}>
        {site.nav.map((item) => (
          <button
            key={item.id}
            type="button"
            data-active={active === item.id ? "true" : undefined}
            aria-label={`${t.misc.goTo} ${t.nav[item.id]}`}
            aria-current={active === item.id ? "true" : undefined}
            onClick={() => go(item.id as SectionId)}
          />
        ))}
      </nav>

      <BackToTop />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
