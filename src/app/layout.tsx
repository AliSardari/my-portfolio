import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar"; // ۱. ایمپورت کردن نوبار
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"], // پشتیبانی از فارسی و لاتین (کلمات انگلیسی)
  weight: "variable", // استفاده از فونت variable برای تمام وزن‌ها با حجم بهینه
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
      <body className={`${vazirmatn.variable} font-sans antialiased bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-cyan-500 selection:text-slate-950`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* ۲. قرار دادن نوبار به صورت سراسری */}
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}