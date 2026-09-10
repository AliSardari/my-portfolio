import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تماس با من | Ali Sardari - Full-Stack Developer",
  description:
    "راه‌های ارتباط با توسعه‌دهنده وب فول‌استک - ارسال پیام برای بررسی پروژه‌های جدید یا فرصت‌های همکاری.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
