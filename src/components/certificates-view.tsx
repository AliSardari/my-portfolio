"use client";

import Link from "next/link";
import { ArrowRight, Certificate } from "@phosphor-icons/react";
import { certificates } from "@/data/certificates";
import { CertificateGallery } from "@/components/certificate-gallery";
import { BackToTop } from "@/components/back-to-top";
import { useLang } from "@/i18n/use-lang";

export function CertificatesView() {
  const { t } = useLang();

  return (
    <>
      <div className="stage" aria-hidden="true">
        <div
          className="layer on"
          style={{
            backgroundImage: "url(/images/bg-portfolio.jpg)",
            filter: "blur(6px) brightness(0.72)",
            transform: "scale(1.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "color-mix(in oklab, var(--bg) 42%, transparent)",
          }}
        />
        <div className="scrim" />
      </div>

      <main id="main" className="page-shell">
        <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-mut transition-colors hover:text-accenttext"
          >
            <ArrowRight size={16} className="dir-flip" aria-hidden="true" />
            {t.certs.backHome}
          </Link>

          <h1 className="mt-6 text-[28px] font-extrabold md:text-[34px]">
            {t.certs.title}
          </h1>
          <p className="mt-3 max-w-2xl text-[14px] leading-7 text-mut">
            {t.certs.sub}
          </p>

          {certificates.length === 0 ? (
            <div className="cert-card mt-10 p-10 text-center">
              <Certificate
                size={40}
                weight="duotone"
                className="mx-auto text-mut"
                aria-hidden="true"
              />
              <h2 className="mt-4 text-[16px] font-bold">{t.certs.empty}</h2>
              <p className="mx-auto mt-2 max-w-sm text-[13px] leading-6 text-mut">
                {t.certs.emptySub}
              </p>
            </div>
          ) : (
            <CertificateGallery certificates={certificates} />
          )}
        </div>
      </main>

      <BackToTop />
    </>
  );
}
