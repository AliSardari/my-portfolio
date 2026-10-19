// ------------------------------------------------------------------
// اطلاعات پایه سایت
// این فایل را برای شخصی‌سازی سریع ویرایش کنید:
// نام، ایمیل، شبکه‌های اجتماعی و آیتم‌های منو
// ------------------------------------------------------------------

export const site = {
  name: "علی",
  brand: "Ali.Dev",
  role: "توسعه‌دهنده وب و برنامه‌نویس فول‌استک",

  url: "https://digitsaz.ir",
  email: "alisardari66@gmail.com",
  linkedin: "https://www.linkedin.com/in/ali-s-a230b4172/",
  github: "https://github.com/AliSardari",
  website: "https://digitsaz.ir",

  // فایل رزومه در public/resume.pdf قرار دارد
  resumeUrl: "/resume.pdf",

  nav: [
    { id: "home", label: "خانه" },
    { id: "about", label: "درباره من" },
    { id: "projects", label: "نمونه‌کارها" },
    { id: "contact", label: "تماس با من" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
