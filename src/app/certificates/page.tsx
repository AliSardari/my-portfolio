import type { Metadata } from "next";
import { CertificatesView } from "@/components/certificates-view";

export const metadata: Metadata = {
  title: "مدارک و گواهینامه‌ها",
  description:
    "فهرست مدارک، دوره‌ها و گواهینامه‌های علی؛ توسعه‌دهنده وب و برنامه‌نویس فول‌استک.",
};

export default function CertificatesPage() {
  return <CertificatesView />;
}
