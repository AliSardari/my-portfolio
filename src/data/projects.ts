// ------------------------------------------------------------------
// نمونه‌کارها (پروژه‌های واقعی)
// تصویر هر پروژه در public/projects/ قرار دارد.
// liveUrl: لینک نمایش آنلاین پروژه — برای پروژه‌هایی که هنوز دمو
// ندارند "#" است؛ آدرس واقعی را جایگزین کنید.
// فیلدهای ...En نسخه‌ی انگلیسی متن‌ها برای حالت زبان انگلیسی است.
// ------------------------------------------------------------------

export type Project = {
  slug: string;
  title: string;
  titleEn: string;
  type: string;
  typeEn: string;
  description: string;
  descriptionEn: string;
  tech: string[];
  image: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    slug: "news-portal-laravel",
    title: "پورتال خبری مدرن (بر پایه لاراول ۱۲)",
    titleEn: "Modern News Portal (Laravel 12)",
    type: "Full-Stack Web",
    typeEn: "Full-Stack Web",
    description:
      "سیستم مدیریت محتوا و پورتال خبری پیشرفته، توسعه‌یافته با آخرین نسخه لاراول و فریم‌ورک قدرتمند Filament؛ شامل مدیریت دسته‌بندی‌ها، نظرات، سطح دسترسی و تاریخ شمسی.",
    descriptionEn:
      "Advanced CMS and news portal built on the latest Laravel with the Filament framework; includes category, comment, access-level management and Persian-calendar support.",
    tech: [
      "Laravel 12",
      "Filament v5",
      "Livewire 4",
      "Tailwind CSS",
      "MySQL",
      "Laravel Reverb",
    ],
    image: "/projects/p1-1.png",
    liveUrl: "#",
  },
  {
    slug: "education-platform-laravel",
    title: "وب‌سایت آموزشی و تخصصی (بر پایه لاراول ۸)",
    titleEn: "E-Learning & Niche Platform (Laravel 8)",
    type: "Web Application",
    typeEn: "Web Application",
    description:
      "پلتفرم جامع آموزش آنلاین با سیستم ثبت‌نام، درگاه پرداخت آنلاین، مدیریت دوره‌ها، سئوی پیشرفته و آمارگیر حرفه‌ای بازدیدکنندگان.",
    descriptionEn:
      "A comprehensive e-learning platform with registration, an online payment gateway, course management, advanced SEO and professional visitor analytics.",
    tech: [
      "Laravel 8",
      "Livewire 2",
      "Laravel Jetstream",
      "MySQL",
      "Bootstrap",
      "Pay.ir",
      "SEOTools",
    ],
    image: "/projects/p2-1.png",
    liveUrl: "#",
  },
  {
    slug: "botforge-dashboard",
    title: "داشبورد مدیریت ربات (BotForge)",
    titleEn: "AI Agent Usage Dashboard",
    type: "Dashboard & UI",
    typeEn: "Dashboard & UI",
    description:
      "داشبورد تحلیلی و مانیتورینگ ربات با نمودارهای زنده برای پایش وضعیت سیستم؛ طراحی‌شده با آخرین تکنولوژی‌های فرانت‌اند و پشتیبانی کامل از فونت وزیرمتن.",
    descriptionEn:
      "An analytics dashboard for monitoring AI agents and model usage with live charts — token consumption, spend by model, latency and request history. Built with the latest front-end tooling.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Material-UI (MUI)",
      "Tailwind CSS",
      "Recharts",
    ],
    image: "/projects/demo-ai-agent-dashboard.png",
    liveUrl: "https://ai-agent-dashboard-alpha-three.vercel.app/",
  },
  {
    slug: "monitoring-dashboard",
    title: "داشبورد مدیریت و مانیتورینگ عمومی",
    titleEn: "Sky Admin & Monitoring Dashboard",
    type: "Dashboard",
    typeEn: "Dashboard",
    description:
      "پنل مدیریت و مانیتورینگ داده‌های سازمانی با تمرکز بر سرعت، کارایی و تجربه کاربر؛ ابزاری ایده‌آل برای رصد رویدادها و گزارش‌های آماری گرافیکی.",
    descriptionEn:
      "An organizational admin panel for users, products, orders and payments, focused on speed, efficiency and user experience — ideal for tracking events and graphical statistical reports.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MUI",
      "Recharts",
    ],
    image: "/projects/demo-sky-dashboard.png",
    liveUrl: "https://sky-dashboard-tau.vercel.app/dashboard",
  },
  {
    slug: "python-bot-panel",
    title: "ربات با کنترل‌پنل تحت وب",
    titleEn: "Bot with Web Control Panel",
    type: "Python & Panel",
    typeEn: "Python & Panel",
    description:
      "پنل مدیریت اختصاصی و سبک با ارتباط مستقیم به ربات‌های پایتونی؛ نظارت لحظه‌ای بر عملکرد، دستورات و وضعیت اجرای ربات.",
    descriptionEn:
      "A dedicated, lightweight admin panel with a direct connection to Python bots; real-time monitoring of performance, commands and execution status.",
    tech: [
      "Next.js",
      "React",
      "Axios",
      "TypeScript",
      "Tailwind CSS",
      "Python Backend",
    ],
    image: "/projects/p5-1.png",
    liveUrl: "#",
  },
  {
    slug: "neon-web-portfolio",
    title: "پورتفولیوی وب‌دویلوپر (نئون)",
    titleEn: "Neon Web-Developer Portfolio",
    type: "Portfolio & UI",
    typeEn: "Portfolio & UI",
    description:
      "پورتفولیوی تعاملی توسعه‌دهنده وب با ناوبری دایره‌ای انیمیشنی، چیدمان شیشه‌ای (glassmorphism) و تغییر تم؛ نمونه‌ای از طراحی رابط مدرن با فرانت‌اند مدرن.",
    descriptionEn:
      "An interactive web-developer portfolio with an animated circular navigation, glassmorphism layout and theme switching — a modern interface showcase built with current front-end tooling.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/demo-neon-portfolio.png",
    liveUrl: "https://neon-portfolio-henna.vercel.app/",
  },
];
