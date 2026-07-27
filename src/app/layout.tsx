import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"], // پشتیبانی از حروف فارسی و عربی
  weight: ["300", "400", "500", "700", "800"], // وزن‌های مختلف فونت
  variable: "--font-vazirmatn", // متغیر CSS برای استفاده در تایلوند یا استایل‌ها
});

export const metadata: Metadata = {
  title: "رزومه من | Full-Stack Developer",
  description: "رزومه شخصی توسعه‌دهنده وب",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning className="scroll-smooth">
      <body className={`${vazirmatn.variable} font-sans antialiased bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100 selection:bg-cyan-500 selection:text-slate-950`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}