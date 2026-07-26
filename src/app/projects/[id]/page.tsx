"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ExternalLink, ArrowRight, Layers, CheckCircle2, Code } from "lucide-react";

// اطلاعات کامل پروژه‌ها (می‌توانید اطلاعات دقیق‌تر پروژه‌های خودتان را اینجا بنویسید)
const projectsDetailData: Record<string, {
    title: string;
    category: string;
    description: string;
    fullDescription: string;
    image: string;
    techs: string[];
    liveUrl: string;
    githubUrl: string;
    features: string[];
}> = {
    "1": {
        title: "داشبورد مدیریت پیشرفته (BotForge)",
        category: "Web App",
        description: "طراحی و توسعه پنل مدیریت ادمین با قابلیت‌های نمودار زنده، مدیریت کاربران و ساختار امن در نکست‌جی‌اس.",
        fullDescription: "پروژه BotForge یک پلتفرم مدیریت پیشرفته است که با هدف ارائه آمار لحظه‌ای و کنترل کامل روی داده‌ها توسعه یافته است. در این پروژه تمرکز اصلی روی بهینه‌سازی سرعت بارگذاری با استفاده از قابلیت‌های Next.js و طراحی رابط کاربری چشم‌نواز با Tailwind CSS بوده است.",
        image: "/project-1.png",
        techs: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "طراحی کاملاً ریسپانسیو و سازگار با تمام دستگاه‌ها",
            "سیستم احراز هویت امن و مدیریت دسترسی کاربران",
            "نمایش نمودارهای تحلیلی و آمار زنده",
            "اتصال به دیتابیس MySQL و بهینه‌سازی کوئری‌ها"
        ]
    },
    "2": {
        title: "سیستم اتوماسیون و فروشگاه آنلاین",
        category: "Full-Stack",
        description: "پلتفرم تجارت الکترونیک کامل همراه با سبد خرید، درگاه پرداخت امن و سیستم مدیریت موجودی انبار.",
        fullDescription: "یک سامانه فروشگاهی و اتوماسیون کامل که بخش فرانت‌اند آن با React و بخش بک‌اند و مدیریت داده‌های آن با Python و Django پیاده‌سازی شده است. این سیستم قابلیت مدیریت محصولات، دسته‌بندی‌ها و پردازش سفارش‌ها را به صورت کاملاً ساختاریافته دارد.",
        image: "/project-2.png",
        techs: ["React", "Python", "Django", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "سبد خرید پویا و مدیریت سفارشات کاربران",
            "پنل ادمین مجزا برای مدیریت موجودی و محصولات",
            "ارتباط امن بین فرانت‌اند React و بک‌اند Django از طریق RESTful API",
            "سرعت بالا و ساختار ماکودولار"
        ]
    },
    "3": {
        title: "پروژه سیستم‌های تعبیه‌شده و مانیتورینگ",
        category: "Embedded & Web",
        description: "وب‌اپلیکیشن ارتباطی برای کنترل و نمایش داده‌های سنسورها با ریزکنترلرها و مانیتورینگ آنلاین.",
        fullDescription: "این پروژه تلفیقی از دنیای سخت‌افزار (سیستم‌های تعبیه‌شده) و نرم‌افزار وب است که داده‌های ارسالی از میکروکنترلرها را دریافت کرده و بر روی یک داشبورد تحت وب به صورت لحظه‌ای به نمایش درمی‌آورد.",
        image: "/project-3.png",
        techs: ["TypeScript", "API", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "مایگریشن و مانیتورینگ داده‌های آنلاین سنسورها",
            "طراحی رابط کاربری صنعتی و متمایز",
            "مدیریت خطاها و پایداری بالا در ارتباط داده‌ای"
        ]
    }
};

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // باز کردن پارامترها در Next.js 15+
    const resolvedParams = use(params);
    const project = projectsDetailData[resolvedParams.id];

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-cyan-500 selection:text-slate-950 transition-colors">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">

                {/* دکمه بازگشت به صفحه نمونه‌کارها */}
                <div>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                        <ArrowRight className="w-4 h-4" />
                        <span>بازگشت به نمونه‌کارها</span>
                    </Link>
                </div>

                {/* اطلاعات اصلی پروژه */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-medium">
                        <Layers className="w-3.5 h-3.5" />
                        {project.category}
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        {project.title}
                    </h1>

                    <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
                        {project.description}
                    </p>
                </motion.div>

                {/* فریم مرورگر و تصویر اسکرین‌شات */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl"
                >
                    <div className="px-4 py-3 flex items-center gap-1.5 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="relative h-64 sm:h-96 w-full bg-slate-100 dark:bg-slate-950">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                {/* جزئیات کامل و ویژگی‌ها */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4"
                >
                    {/* توضیحات تکمیلی */}
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-xl font-bold">درباره پروژه</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                            {project.fullDescription}
                        </p>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-lg font-bold">ویژگی‌های کلیدی</h3>
                            <ul className="space-y-3">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* سایدبار اطلاعات و لینک‌ها */}
                    <div className="space-y-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 h-fit shadow-sm">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">تکنولوژی‌های استفاده‌شده</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techs.map((tech, i) => (
                                    <span key={i} className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                            <a
                                href={project.liveUrl}
                                className="w-full py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20"
                            >
                                <span>مشاهده آنلاین پروژه</span>
                                <ExternalLink className="w-4 h-4" />
                            </a>
                            <a
                                href={project.githubUrl}
                                className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-all flex items-center justify-center gap-2"
                            >
                                <span>سورس کد در گیت‌هاب</span>
                                <Code className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </main>
    );
}