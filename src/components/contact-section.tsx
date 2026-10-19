"use client";

import {
  ArrowSquareOut,
  EnvelopeSimple,
  GithubLogo,
  Globe,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { site } from "@/data/site";
import { useLang } from "@/i18n/use-lang";
import { SectionHead } from "./section-head";
import { ContactForm } from "./contact-form";
import type { SectionId } from "@/lib/deck-nav";
import type { CSSProperties, ReactNode } from "react";

export function ContactSection({ active }: { active: SectionId }) {
  const { t } = useLang();

  const links: {
    icon: ReactNode;
    label: string;
    value: string;
    href: string;
    external?: boolean;
  }[] = [
    {
      icon: <EnvelopeSimple size={19} weight="duotone" />,
      label: t.contact.linkEmail,
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: <LinkedinLogo size={19} weight="duotone" />,
      label: t.contact.linkLinkedin,
      value: "linkedin.com/in/ali-s-a230b4172",
      href: site.linkedin,
      external: true,
    },
    {
      icon: <GithubLogo size={19} weight="duotone" />,
      label: t.contact.linkGithub,
      value: "github.com/AliSardari",
      href: site.github,
      external: true,
    },
    {
      icon: <Globe size={19} weight="duotone" />,
      label: t.contact.linkWebsite,
      value: "digitsaz.ir",
      href: site.website,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      data-section="contact"
      aria-label={t.contact.aria}
      className={active === "contact" ? "is-active" : undefined}
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHead title={t.contact.title} sub={t.contact.sub} />

        <div className="mt-7 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <ContactForm />

          <div
            className="reveal glass panel p-6"
            style={{ "--d": "140ms" } as CSSProperties}
          >
            <h3 className="text-[16px] font-bold">{t.contact.linksTitle}</h3>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 transition-colors hover:border-line2 hover:bg-[var(--accent-soft)]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--accent-soft)] text-accenttext">
                      {link.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[13.5px] font-semibold">
                        {link.label}
                      </span>
                      <span className="mt-0.5 block truncate text-[12px] text-mut">
                        <bdi dir="ltr">{link.value}</bdi>
                      </span>
                    </span>
                    <ArrowSquareOut
                      size={16}
                      className="shrink-0 text-mut"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="hairline my-5" />

            <p className="text-[12.5px] leading-6 text-mut">
              {t.contact.replyNote}
            </p>
          </div>
        </div>

        <footer className="mt-10">
          <div className="hairline" />
          <div className="flex flex-wrap items-center justify-between gap-3 pt-5 text-[12px] text-mut">
            <p>{t.contact.footer}</p>
            <p className="font-mono text-[11px]" dir="ltr">
              {t.contact.footerBrand}
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
