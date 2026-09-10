import type { Metadata } from "next";
import { projectsDetailData } from "@/data/projectsData";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projectsDetailData[id];

  if (!project) {
    return { title: "پروژه یافت نشد | Ali Sardari" };
  }

  return {
    title: `${project.title} | نمونه کارهای Ali Sardari`,
    description: project.description,
  };
}

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
