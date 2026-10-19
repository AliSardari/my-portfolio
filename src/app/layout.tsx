import type { Metadata, Viewport } from "next";
import { Vazirmatn, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { LangSync, SkipLink } from "@/components/lang-sync";
import { site } from "@/data/site";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "علی | توسعه‌دهنده وب و برنامه‌نویس فول‌استک",
    template: "%s | علی",
  },
  description:
    "توسعه‌دهنده وب و برنامه‌نویس Full-Stack؛ ساخت داشبوردهای هوشمند، بات‌های خودکار و سیستم‌های اتوماسیون با React، Next.js، Laravel و Python.",
  keywords: [
    "توسعه‌دهنده وب",
    "برنامه‌نویس فول‌استک",
    "React",
    "Next.js",
    "Laravel",
    "Python",
    "داشبورد مدیریتی",
    "اتوماسیون",
  ],
  openGraph: {
    title: "علی | توسعه‌دهنده وب و برنامه‌نویس فول‌استک",
    description:
      "سیستم‌های اتوماسیون و داشبوردهای هوشمند برای کسب‌وکارها، با React، Next.js، Laravel و Python.",
    locale: "fa_IR",
    type: "website",
    images: ["/images/hero-dark.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060b16" },
    { media: "(prefers-color-scheme: light)", color: "#f4f7fc" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={`${vazirmatn.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-svh bg-[var(--bg)] font-sans text-ink antialiased">
        {/* اسکریپت بوت‌استاپ زبان: قبل از اولین paint جهت/زبان را از حافظه می‌خواند
            تا در حالت انگلیسی، چیدمان از همان ابتدا LTR باشد (بدون فلش). */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var l=localStorage.getItem("ali-portfolio-lang");var fa=l!=="en";document.documentElement.lang=fa?"fa":"en";document.documentElement.dir=fa?"rtl":"ltr";}catch(e){}})();',
          }}
        />
        <ThemeProvider>
          <LangSync />
          <SkipLink />
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
