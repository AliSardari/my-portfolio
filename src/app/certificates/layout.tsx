import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مدارک و گواهینامه‌ها | Ali Sardari - Full-Stack Developer",
  description:
    "مجموعه‌ای از دوره‌ها و گواهینامه‌های رسمی توسعه‌دهنده وب در حوزه‌های مختلف فنی و مهندسی.",
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
