"use client";

import Link from "next/link";
import {
  Briefcase,
  DownloadSimple,
  House,
  Lightning,
  PaperPlaneTilt,
  PresentationChart,
  Robot,
  Sparkle,
  UserCircle,
} from "@phosphor-icons/react";
import { site } from "@/data/site";
import { useLang } from "@/i18n/use-lang";
import type { SectionId } from "@/lib/deck-nav";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  active: SectionId;
  go: (id: SectionId) => void;
};

const CARD_ICONS: Record<string, ReactNode> = {
  home: <House size={20} weight="duotone" />,
  about: <UserCircle size={20} weight="duotone" />,
  projects: <Briefcase size={20} weight="duotone" />,
  contact: <PaperPlaneTilt size={20} weight="duotone" />,
};

// آیکون‌های سه باکس «نمونه کارها» در پنل معرفی
const WORK_ICONS = [
  <PresentationChart key="chart" size={18} weight="duotone" />,
  <Robot key="robot" size={18} weight="duotone" />,
  <Lightning key="bolt" size={18} weight="duotone" />,
];

export function HeroSection({ active, go }: Props) {
  const { t } = useLang();

  return (
    <section
      id="home"
      data-section="home"
      aria-label={t.hero.ariaHome}
      className={active === "home" ? "is-active" : undefined}
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <span
            className="badge glass reveal"
            style={{ "--d": "0ms" } as CSSProperties}
          >
            <Sparkle
              size={14}
              weight="fill"
              className="text-accenttext"
              aria-hidden="true"
            />
            {t.hero.badge}
          </span>

          <h1
            className="reveal mt-5 text-[30px] font-extrabold leading-[1.3] md:text-[46px] md:leading-[1.25] lg:text-[52px]"
            style={{ "--d": "70ms" } as CSSProperties}
          >
            {t.hero.title}
          </h1>

          <p
            className="reveal mt-3 text-lg font-bold md:text-2xl"
            style={{ "--d": "140ms" } as CSSProperties}
          >
            {t.hero.subPre}{" "}
            <span className="text-accenttext">{t.hero.subAccent}</span>
          </p>

          <p
            className="reveal mt-4 max-w-2xl text-[14.5px] leading-7 text-mut md:text-[15.5px] md:leading-8"
            style={{ "--d": "200ms" } as CSSProperties}
          >
            {t.hero.intro}
          </p>

          <div
            className="reveal mt-6 flex flex-wrap items-center justify-center gap-3"
            style={{ "--d": "260ms" } as CSSProperties}
          >
            <a className="btn btn-primary" href={site.resumeUrl} download>
              <DownloadSimple size={18} weight="bold" aria-hidden="true" />
              {t.hero.ctaResume}
            </a>
            <Link
              className="btn btn-ghost"
              href="/#about"
              onClick={(e) => {
                e.preventDefault();
                go("about");
              }}
            >
              {t.hero.ctaAbout}
            </Link>
          </div>

          <div
            className="reveal glass panel mt-7 w-full max-w-3xl p-5 text-start md:p-6"
            style={{ "--d": "320ms" } as CSSProperties}
          >
            <p className="text-[13.5px] leading-7 text-ink/90 md:text-[14.5px]">
              {t.hero.panelText}
            </p>
            <p className="mt-4 text-[12.5px] font-medium text-mut">
              {t.hero.examplesLabel}
            </p>

            {/* هر نمونه‌کار داخل باکس مستقل با سایه و لایه‌ی شیشه‌ای */}
            <ul className="mt-3 grid gap-2.5 md:grid-cols-3">
              {t.hero.examples.map((item, i) => (
                <li key={item} className="work-box">
                  <span className="work-box-ic" aria-hidden="true">
                    {WORK_ICONS[i]}
                  </span>
                  <span className="work-box-text">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-[12.5px] leading-6 text-mut">
              {t.hero.finalPre}{" "}
              <Link
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  go("contact");
                }}
                className="font-semibold text-accenttext underline decoration-2 underline-offset-4"
              >
                {t.hero.finalLink}
              </Link>
              {t.hero.finalPost}
            </p>
          </div>

          <div
            className="reveal mt-7 grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4"
            style={{ "--d": "380ms" } as CSSProperties}
          >
            {site.nav.map((item) => (
              <button
                key={item.id}
                type="button"
                className="deck-card"
                data-active={active === item.id ? "true" : undefined}
                onClick={() => go(item.id as SectionId)}
              >
                <span className="ic" aria-hidden="true">
                  {CARD_ICONS[item.id]}
                </span>
                <span className="mt-0.5 text-[15px] font-bold">
                  {t.nav[item.id]}
                </span>
                <span className="text-[12px] leading-5 text-mut">
                  {t.hero.cardSubs[item.id]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
