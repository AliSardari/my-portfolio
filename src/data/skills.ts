// ------------------------------------------------------------------
// مهارت‌ها: فهرست گروه‌بندی‌شده + سطح تسلط (درصد)
// برای ویرایش، فقط همین فایل را تغییر دهید.
// ------------------------------------------------------------------

export const skillGroups = [
  {
    title: "فرانت‌اند (Frontend)",
    titleEn: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "بک‌اند (Backend)",
    titleEn: "Backend",
    items: ["Laravel", "PHP", "Python"],
  },
  {
    title: "ابزارها و تکنولوژی‌ها",
    titleEn: "Tools & Technologies",
    items: ["RESTful APIs", "Git & GitHub", "Responsive Design", "MySQL", "PostgreSQL"],
  },
] as const;

// iconKeys به آیکون‌های simple-icons در کامپوننت مهارت‌ها نگاشت می‌شوند
export const skillBars = [
  { name: "React & Next.js", value: 85, iconKeys: ["react", "nextdotjs"] },
  { name: "Laravel & PHP", value: 95, iconKeys: ["laravel", "php"] },
  { name: "Python", value: 75, iconKeys: ["python"] },
  { name: "TypeScript & JavaScript", value: 88, iconKeys: ["typescript", "javascript"] },
  { name: "Tailwind CSS & Bootstrap", value: 98, iconKeys: ["tailwindcss", "bootstrap"] },
  { name: "MySQL & PostgreSQL", value: 82, iconKeys: ["mysql", "postgresql"] },
] as const;

export type SkillGroup = (typeof skillGroups)[number];
export type SkillBar = (typeof skillBars)[number];
