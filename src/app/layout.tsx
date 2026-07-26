import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
      <body className="bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}