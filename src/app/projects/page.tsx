"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Code, ExternalLink, Layers } from "lucide-react";
import Link from "next/link";

// داده‌های نمونه‌کارها (می‌توانید اطلاعات پروژه‌های خودتان را اینجا جایگزین کنید)
const projectsData = [
    {
        id: 1,
        title: "داشبورد مدیریت پیشرفته (BotForge)",
        category: "Web App",
        description: "طراحی و توسعه پنل مدیریت ادمین با قابلیت‌های نمودار زنده، مدیریت کاربران و ساختار امن در نکست‌جی‌اس.",
        image: "/project-1.png", // مسیر اسکرین‌شات پروژه در پوشه public
        techs: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "سیستم اتوماسیون و فروشگاه آنلاین",
        category: "Full-Stack",
        description: "پلتفرم تجارت الکترونیک کامل همراه با سبد خرید، درگاه پرداخت امن و سیستم مدیریت موجودی انبار.",
        image: "/project-2.png",
        techs: ["React", "Python", "Django", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "پروژه سیستم‌های تعبیه‌شده و مانیتورینگ",
        category: "Embedded & Web",
        description: "وب‌اپلیکیشن ارتباطی برای کنترل و نمایش داده‌های سنسورها با ریزکنترلرها و مانیتورینگ آنلاین.",
        image: "/project-3.png",
        techs: ["TypeScript", "API", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "#",
    },
];

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projectsData
        : projectsData.filter(p => p.category.includes(filter));

    return (
        <main className="min-h-screen text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
            <Navbar />
            <div className="max-w-6xl mx-auto px-6 py-20">

                {/* هدر صفحه نمونه کارها */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-16 space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-medium">
                        <Layers className="w-3.5 h-3.5" />
                        نمونه کارهای من
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-gray-600">
                        آخرین پروژه‌ها و دستاوردهای فنی
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                        مجموعه‌ای از پروژه‌های توسعه داده شده با تکنولوژی‌های مدرن وب، فرانت‌اند و بک‌اند.
                    </p>
                </motion.div>

                {/* لیست کارت‌های پروژه‌ها */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg hover:border-cyan-500/50 transition-all group flex flex-col justify-between"
                        >
                            {/* فریم مرورگر و اسکرین‌شات پروژه */}
                            <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                                {/* نوار بالای مرورگر فانتزی */}
                                <div className="px-4 py-2.5 flex items-center gap-1.5 bg-slate-200/60 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80">
                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                </div>

                                {/* تصویر اسکرین‌شات */}
                                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            // اگر عکس هنوز آپلود نشده بود، یک ظاهر جایگزین شیک نشان دهد
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                    {/* باکس جایگزین پیش‌فرض اگر تصویر موجود نباشد */}
                                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 text-slate-400 dark:text-slate-600 gap-2">
                                        <Layers className="w-8 h-8 opacity-40" />
                                        <span className="text-xs">اسکرین‌شات پروژه</span>
                                    </div>
                                </div>
                            </div>

                            {/* محتوای کارت (توضیحات و تگ‌ها) */}
                            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                    {/* تگ‌های تکنولوژی */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.techs.map((tech, i) => (
                                            <span key={i} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* دکمه‌های لینک به پروژه و گیت‌هاب */}
                                    <div className="flex items-center gap-3 pt-2">
                                        <Link
                                            href={`/projects/${project.id}`}
                                            className="flex-1 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20"
                                        >
                                            <span>جزئیات پروژه</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </Link>
                                        <Link
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all"
                                            aria-label="سورس گیت‌هاب"
                                        >
                                            <Code className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

        </main>
    );
}