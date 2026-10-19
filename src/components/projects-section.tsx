"use client";

import { projects } from "@/data/projects";
import { SectionHead } from "./section-head";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { useLang } from "@/i18n/use-lang";
import type { SectionId } from "@/lib/deck-nav";
import type { CSSProperties } from "react";

export function ProjectsSection({ active }: { active: SectionId }) {
  const { lang, t } = useLang();

  return (
    <section
      id="projects"
      data-section="projects"
      aria-label={t.projects.aria}
      className={active === "projects" ? "is-active" : undefined}
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHead title={t.projects.title} sub={t.projects.sub} />

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const title = lang === "fa" ? project.title : project.titleEn;
            const type = lang === "fa" ? project.type : project.typeEn;
            const description =
              lang === "fa" ? project.description : project.descriptionEn;

            return (
              <article
                key={project.slug}
                className="project-card glass reveal flex h-full flex-col"
                style={{ "--d": `${80 + index * 60}ms` } as CSSProperties}
              >
                <div className="thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element -- تصویر استاتیک سبک؛ برای خروجی استاتیک عمداً از img ساده استفاده شده است */}
                  <img
                    src={project.image}
                    alt={`${t.projects.imgAlt} ${title}`}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="thumb-badge">{type}</span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[15.5px] font-bold leading-6">{title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-mut">
                    {description}
                  </p>
                  <ul className="mt-3.5 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <li key={tech} className="chip chip-neutral">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto border-t border-line pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-view btn-sm w-full"
                      aria-label={`${t.projects.view}: ${title}`}
                      onClick={(e) => {
                        // پروژه‌های بدون دمو (#) نباید صفحه را به بالا بپرند
                        if (project.liveUrl === "#") e.preventDefault();
                      }}
                    >
                      <ArrowSquareOut
                        size={15}
                        weight="bold"
                        className="btn-view-ic"
                        aria-hidden="true"
                      />
                      {t.projects.view}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
