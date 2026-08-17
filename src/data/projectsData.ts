export interface ProjectDetail {
    title: string;
    category: string;
    description: string;
    fullDescription: string;
    images: string[];
    techs: string[];
    liveUrl: string;
    githubUrl: string;
    features: string[];
}

export const projectsDetailData: Record<string, ProjectDetail> = {
    "1": {
        title: "پورتال خبری مدرن (بر پایه لاراول ۱۲)",
        category: "Full-Stack Web",
        description:
            "سیستم مدیریت محتوا و پورتال خبری پیشرفته، توسعه‌یافته با آخرین نسخه لاراول و فریم‌ورک قدرتمند Filament.",
        fullDescription:
            "یک پورتال خبری کاملاً بهینه، مدرن و ریسپانسیو که با استفاده از لاراول ۱۲ و پنل مدیریت Filament v5 پیاده‌سازی شده است. این سیستم از Livewire v4 برای ارائه تجربه‌ای پویا و سریع بهره می‌برد و امکاناتی نظیر مدیریت پیشرفته دسته‌بندی‌ها، سیستم نظرات، مدیریت دسترسی کاربران (Spatie Permission) و پشتیبانی کامل از تاریخ شمسی (Verta) را در اختیار مدیران سایت قرار می‌دهد.",
        images: [
            "/projects/p1-1.png",
            "/projects/p1-2.png",
            // "/projects/p1-3.png",
        ],
        techs: [
            "Laravel 12",
            "Filament v5",
            "Livewire 4",
            "Tailwind CSS",
            "MySQL",
            "Laravel Reverb",
        ],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "پنل مدیریت فوق‌العاده پیشرفته با Filament v5",
            "پشتیبانی کامل از تاریخ و تقویم شمسی با پکیج Verta",
            "مدیریت سطح دسترسی و نقش‌های کاربران (Roles & Permissions)",
            "سیستم بروزرسانی و ارتباطات لحظه‌ای با Laravel Reverb",
            "مدیریت URLها و سئو بهینه مقالات با Eloquent Sluggable",
            "رابط کاربری کاملاً ریسپانسیو و بهینه شده",
        ],
    },
    "2": {
        title: "وب‌ سایت آموزشی و تخصصی (بر پایه لاراول ۸)",
        category: "Web Application",
        description:
            "پلتفرم جامع آموزش آنلاین با قابلیت سیستم ثبت‌نام، درگاه پرداخت و مدیریت دوره‌ها.",
        fullDescription:
            "یک وب‌سایت آموزشی کامل که زیرساخت آن با لاراول ۸ و پکیج Jetstream توسعه یافته است. این پلتفرم مجهز به سیستم مدیریت فایل اختصاصی، درگاه پرداخت آنلاین، مدیریت سئو پیشرفته و آمارگیر حرفه‌ای بازدیدکنندگان دوره‌هاست و به زودی پس از تکمیل پروژه ربات هوشمند، بروزرسانی‌های اساسی دریافت خواهد کرد.",
        images: [
            "/projects/p2-1.png",
            "/projects/p2-2.png",
            "/projects/p2-3.png",
            "/projects/p2-4.png",
            "/projects/p2-5.png",
        ],
        techs: [
            "Laravel 8",
            "Livewire 2",
            "Laravel Jetstream",
            "MySQL",
            "Bootstrap",
            "Pay.ir",
            "SEOTools",
        ],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "سیستم احراز هویت پیشرفته با Jetstream و Sanctum",
            "درگاه پرداخت آنلاین و مدیریت تراکنش‌ها",
            "سیستم انحصاری مدیریت فایل و آپلود رسانه",
            "بهینه‌سازی کامل سئو و تولید خودکار نقشه سایت (Sitemap)",
            "سیستم ثبت بازدید و تحلیل آمار دوره‌ها",
            "اعلان‌های پویا با SweetAlert",
        ],
    },
    "3": {
        title: " داشبورد مدیریت ربات (BotForge Dashboard)",
        category: "Dashboard & UI",
        description:
            "داشبورد تحلیلی و مانیتورینگ ربات، طراحی‌شده با Next.js 16، React 19 و متریال‌دیزاین.",
        fullDescription:
            "پنل مدیریت و داشبورد تعاملی اختصاصی برای پروژه BotForge که با استفاده از آخرین تکنولوژی‌های فرانت‌اند شامل Next.js (نسخه ۱۶)، React و MUI پیاده‌سازی شده است. این داشبورد مجهز به نمودارهای تحلیلی زنده (Recharts) برای پایش وضعیت سیستم و المان‌های تعاملی مدرن با پشتیبانی کامل از فونت وزیرمتن است.",
        images: [
            "/projects/p3-1.png",
            "/projects/p3-2.png",
            "/projects/p3-3.png",
            "/projects/p3-4.png",
        ],
        techs: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Material-UI (MUI)",
            "Tailwind CSS",
            "Recharts",
        ],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "نمودارهای آماری و تحلیل داده‌های زنده با Recharts",
            "رابط کاربری مدرن و واکنش‌گرا با متریال‌دیزاین (MUI)",
            "بهینه‌سازی فوق‌العاده سئو و سرعت بارگذاری با Next.js",
            "پشتیبانی از تایپ‌پشتی (TypeScript) برای پایداری کد",
            "استفاده از فونت استاندارد فارسی Vazirmatn",
        ],
    },
    "4": {
        title: "داشبورد مدیریت و مانیتورینگ عمومی (Tailwind & MUI)",
        category: "Dashboard",
        description:
            "پنل مدیریت و مانیتورینگ داده‌های سازمانی با رابط کاربری سفارشی‌سازی شده و پویا.",
        fullDescription:
            "این داشبورد با تمرکز بر سرعت، کارایی و تجربه کاربر (UX) طراحی شده و ترکیبی از قدرت Tailwind CSS و کامپوننت‌های انعطاف‌پذیر MUI را ارائه می‌دهد. این پنل ابزاری ایده‌آل برای مدیریت داده‌ها، رصد رویدادها و نمایش گزارش‌های آماری به صورت گرافیکی است.",
        images: [
            "/projects/p4-1.png",
            "/projects/p4-2.png",
            "/projects/p4-3.png",
            "/projects/p4-4.png",
            "/projects/p4-5.png",
            "/projects/p4-6.png",
            "/projects/p4-7.png",
        ],
        techs: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "MUI",
            "Recharts",
        ],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "طراحی کاملاً ماولار و قابلیت توسعه آسان",
            "نمایش گرافیکی اطلاعات و گزارش‌گیری پیشرفته",
            "مدیریت استایل‌ها با ترکیب Tailwind و Emotion",
            "پشتیبانی از حالت‌های واکنش‌گرا برای انواع نمایشگرها",
        ],
    },
    "5": {
        title: " ربات برای اپلیکیشن با کنترل پنل (Python Bot & Control Panel)",
        category: "Python & Panel",
        description:
            "پنل مدیریت تحت وب برای کنترل و مانیتورینگ ربات‌های هوشمند توسعه‌یافته با پایتون.",
        fullDescription:
            "یک پنل مدیریتی اختصاصی و سبک که ارتباط مستقیم با ربات‌های پایتونی برقرار می‌کند. این سیستم با استفاده از Axios برای فراخوانی APIها، ساختار ماژولار Next.js و نمودارهای تحلیلی، امکان نظارت بر عملکرد، دستورات و وضعیت اجرای ربات را به صورت لحظه‌ای فراهم می‌کند.",
        images: [
            "/projects/p5-1.png",
            "/projects/p5-2.png",
            "/projects/p5-3.png",
            "/projects/p5-4.png",
        ],
        techs: [
            "Next.js",
            "React",
            "Axios",
            "TypeScript",
            "Tailwind CSS",
            "Python Backend",
        ],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "ارتباط پویا و سریع با بک‌اند پایتون از طریق Axios",
            "مانیتورینگ لحظه‌ای وضعیت و فعالیت‌های ربات",
            "نمایش آمارهای حیاتی سیستم با نمودارهای تعاملی",
            "رابط کاربری مینیمال، مدرن و پرسرعت",
        ],
    },
};
