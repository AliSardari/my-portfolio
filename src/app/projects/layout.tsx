import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "نمونه کارها | Ali Sardari - Full-Stack Developer",
  description:
    "نمونه کارهای توسعه‌دهنده وب فول‌استک - پروژه‌های توسعه داده شده با React، Next.js، Laravel و Python.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
