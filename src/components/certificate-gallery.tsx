"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  CaretLeft,
  CaretRight,
  DownloadSimple,
  MagnifyingGlassPlus,
  X,
} from "@phosphor-icons/react";
import { countText } from "@/i18n/dict";
import { useLang } from "@/i18n/use-lang";
import type { Certificate } from "@/data/certificates";

export function CertificateGallery({
  certificates,
}: {
  certificates: Certificate[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const { lang, t } = useLang();

  const close = useCallback(() => setActiveIndex(null), []);

  const next = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % certificates.length,
    );
  }, [certificates.length]);

  const prev = useCallback(() => {
    setActiveIndex(
      (p) =>
        p === null ? null : (p - 1 + certificates.length) % certificates.length,
    );
  }, [certificates.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") next();
      else if (e.key === "ArrowRight") prev();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, next, prev, close]);

  const active = activeIndex !== null ? certificates[activeIndex] : null;
  const titleOf = (c: Certificate) => (lang === "fa" ? c.title : c.titleEn);
  const categoryOf = (c: Certificate) =>
    lang === "fa" ? c.category : c.categoryEn;

  return (
    <>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <li key={cert.original}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="cert-card flex w-full items-center gap-4 p-4 text-start"
              aria-label={`${t.certs.cardAria} ${titleOf(cert)}`}
            >
              <span className="cert-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element -- تصویر استاتیک سبک؛ برای خروجی استاتیک عمداً از img ساده استفاده شده است */}
                <img
                  src={cert.thumbnail}
                  alt={`${t.certs.altPrefix} ${titleOf(cert)}`}
                  width={220}
                  height={150}
                  loading="lazy"
                  decoding="async"
                />
                <span className="cert-thumb-overlay" aria-hidden="true">
                  <MagnifyingGlassPlus
                    size={18}
                    aria-hidden="true"
                  />
                </span>
              </span>
              <span className="min-w-0 flex-1">
                <span className="chip">{categoryOf(cert)}</span>
                <span className="mt-2 block text-[14px] font-bold leading-6">
                  {titleOf(cert)}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active
        ? createPortal(
            <div
              className="cert-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={`${t.certs.lbTitle} ${titleOf(active)}`}
              onClick={close}
            >
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="cert-lb-btn cert-lb-close"
                aria-label={t.certs.lbClose}
              >
                <X size={20} aria-hidden="true" />
              </button>

              <div
                className="cert-lb-body"
                onClick={(e) => e.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- تصویر استاتیک سبک؛ برای خروجی استاتیک عمداً از img ساده استفاده شده است */}
                <img src={active.original} alt={titleOf(active)} />
              </div>

              <button
                type="button"
                aria-label={t.certs.lbNext}
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="cert-lb-btn cert-lb-next"
              >
                <CaretLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="cert-lb-btn cert-lb-prev"
                aria-label={t.certs.lbPrev}
              >
                <CaretRight size={22} aria-hidden="true" />
              </button>

              <div
                className="cert-lb-bar"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="min-w-0 truncate text-[13px] font-bold text-accenttext">
                  {titleOf(active)}
                </span>
                <span className="shrink-0 text-[12px] text-mut">
                  {countText(t.certs.lbCount, (activeIndex ?? 0) + 1, certificates.length)}
                </span>
                <a
                  href={active.original}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm shrink-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <DownloadSimple size={15} aria-hidden="true" />
                  {t.certs.lbDownload}
                </a>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
