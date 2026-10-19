"use client";

import { BracketsCurly, Database, Wrench } from "@phosphor-icons/react";
import { skillBars, skillGroups } from "@/data/skills";
import { useLang } from "@/i18n/use-lang";
import { TechIcon } from "./tech-icons";
import type { CSSProperties } from "react";

const GROUP_ICONS = [BracketsCurly, Database, Wrench];

export function SkillsPanels() {
  const { lang, t } = useLang();

  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <div className="glass panel reveal p-6">
        <h3 className="text-[16px] font-bold">{t.skills.title}</h3>
        <div className="mt-5 space-y-5">
          {skillGroups.map((group, gi) => {
            const GroupIcon = GROUP_ICONS[gi] ?? Wrench;
            return (
              <div key={group.title}>
                <div className="flex items-center gap-2 text-[13px] font-semibold text-accenttext">
                  <GroupIcon size={16} weight="duotone" aria-hidden="true" />
                  {lang === "fa" ? group.title : group.titleEn}
                </div>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="glass panel reveal p-6">
        <h3 className="text-[16px] font-bold">{t.skills.mastery}</h3>
        <ul className="mt-5 space-y-[18px]">
          {skillBars.map((skill) => (
            <li key={skill.name}>
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-[13.5px] font-medium">
                  <span
                    className="flex items-center gap-1 text-mut"
                    aria-hidden="true"
                  >
                    {skill.iconKeys.map((key) => (
                      <TechIcon key={key} name={key} className="size-[15px]" />
                    ))}
                  </span>
                  {skill.name}
                </span>
                <span className="font-mono text-[12px] text-mut">
                  {skill.value}%
                </span>
              </div>
              <div
                className="bar mt-2"
                style={{ "--w": `${skill.value}%` } as CSSProperties}
                role="progressbar"
                aria-valuenow={skill.value}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${t.skills.aria} ${skill.name}`}
              >
                <i />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
