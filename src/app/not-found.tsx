"use client";

import Link from "next/link";
import { Compass } from "@phosphor-icons/react";
import { useLang } from "@/i18n/use-lang";

export default function NotFound() {
  const { t } = useLang();

  return (
    <main id="main" className="grid min-h-svh place-items-center px-5">
      <div className="glass panel max-w-md p-10 text-center">
        <Compass
          size={44}
          weight="duotone"
          className="mx-auto text-accenttext"
          aria-hidden="true"
        />
        <h1 className="mt-4 text-[22px] font-extrabold">{t.notFound.title}</h1>
        <p className="mt-3 text-[13.5px] leading-7 text-mut">
          {t.notFound.text}
        </p>
        <Link href="/" className="btn btn-primary mt-6">
          {t.notFound.back}
        </Link>
      </div>
    </main>
  );
}
