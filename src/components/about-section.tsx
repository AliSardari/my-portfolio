"use client";

import Link from "next/link";
import { ArrowLeft, SealCheck } from "@phosphor-icons/react";
import { SectionHead } from "./section-head";
import { SkillsPanels } from "./skills";
import { useLang } from "@/i18n/use-lang";
import type { SectionId } from "@/lib/deck-nav";
import type { CSSProperties } from "react";

export function AboutSection({ active }: { active: SectionId }) {
  const { t } = useLang();

  return (
    <section
      id="about"
      data-section="about"
      aria-label={t.about.aria}
      className={active === "about" ? "is-active" : undefined}
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHead title={t.about.title} sub={t.about.sub} />

        <div className="mt-7 grid gap-6 lg:grid-cols-[330px_1fr]">
          <div
            className="reveal glass panel overflow-hidden"
            style={{ "--d": "80ms" } as CSSProperties}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- تصویر استاتیک سبک؛ برای خروجی استاتیک عمداً از img ساده استفاده شده است */}
            <img
              src="/images/profile.jpg"
              alt={t.about.profileRole}
              width={900}
              height={1200}
              className="h-[290px] w-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
            <div className="border-t border-line px-4 py-3">
              <p className="text-[13px] font-semibold">{t.about.profileName}</p>
              <p className="mt-0.5 text-[12px] text-mut">
                {t.about.profileRole}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div
              className="reveal glass panel p-6"
              style={{ "--d": "140ms" } as CSSProperties}
            >
              <p className="text-[13.5px] leading-7 text-ink/90 md:text-[14px] md:leading-8">
                {t.about.p1}
              </p>
              <p className="mt-4 text-[13.5px] leading-7 text-ink/90 md:text-[14px] md:leading-8">
                {t.about.p2}
              </p>
            </div>

            <div
              className="reveal glass panel flex flex-wrap items-center justify-between gap-4 p-5"
              style={{ "--d": "200ms" } as CSSProperties}
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--accent-soft)] text-accenttext">
                  <SealCheck size={20} weight="duotone" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[15px] font-bold">{t.about.certTitle}</h3>
                  <p className="mt-0.5 text-[12.5px] text-mut">
                    {t.about.certSub}
                  </p>
                </div>
              </div>
              <Link href="/certificates" className="btn btn-ghost btn-sm">
                {t.about.certBtn}
                <ArrowLeft
                  size={16}
                  weight="bold"
                  className="dir-flip"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>

        <SkillsPanels />
      </div>
    </section>
  );
}
