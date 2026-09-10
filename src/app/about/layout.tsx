import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره من | Ali Sardari - Full-Stack Developer",
  description:
    "درباره من - توسعه‌دهنده وب فول‌استک با تخصص در React، Next.js، Laravel و Python. مسیر حرفه‌ای من در دنیای برنامه‌نویسی.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
