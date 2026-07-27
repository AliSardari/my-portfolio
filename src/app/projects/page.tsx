"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ProjectSlider from "@/components/ProjectSlider"; 
import { projectsDetailData as projectsData } from "@/data/projectsData";
import { Code, ExternalLink, Layers } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? Object.entries(projectsData)
        : Object.entries(projectsData).filter(([_, p]) => p.category.includes(filter));

    return (
        <main className="min-h-screen text-slate-900 dark:text-slate-100 selection:bg-cyan-500 selection:text-slate-950 bg-slate-50 dark:bg-slate-950 transition-colors">
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
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        آخرین پروژه‌ها و دستاوردهای فنی
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                        مجموعه‌ای از پروژه‌های توسعه داده شده با تکنولوژی‌های مدرن وب، فرانت‌اند و بک‌اند.
                    </p>
                </motion.div>

                {/* لیست کارت‌های پروژه‌ها */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(([id, project], index) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg hover:border-cyan-500/50 transition-all group flex flex-col justify-between"
                        >
                            {/* فریم مرورگر و اسلایدر تصاویر پروژه */}
                            <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                                <div className="px-4 py-2.5 flex items-center gap-1.5 bg-slate-200/60 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80">
                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                </div>

                                {/* جایگزینی تصویر تکی با کامپوننت اسلایدر */}
                                <div className="w-full">
                                    <ProjectSlider images={project.images} title={project.title} />
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
                                            <span key={i} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* دکمه‌های لینک به پروژه و گیت‌هاب */}
                                    <div className="flex items-center gap-3 pt-2">
                                        <Link
                                            href={`/projects/${id}`}
                                            className="flex-1 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/25"
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