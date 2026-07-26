"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// لیست مهارت‌ها همراه با درصد و رنگ آیکون/نوار پیشرفت
const skillsList = [
    { name: "React & Next.js", level: 85, color: "from-cyan-500 to-blue-500", icon: "⚛️" },
    { name: "Laravel & PHP", level: 95, color: "from-red-500 to-orange-500", icon: "🐘" },
    { name: "Python & Django", level: 75, color: "from-yellow-500 to-amber-500", icon: "🐍" },
    { name: "TypeScript & JavaScript", level: 88, color: "from-blue-400 to-indigo-500", icon: "📜" },
    { name: "Tailwind CSS", level: 99, color: "from-teal-400 to-cyan-500", icon: "🎨" },
    { name: "MySQL & Database", level: 82, color: "from-blue-600 to-cyan-700", icon: "🗄️" },
];

export default function SkillsSection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-slate-900/40 transition-colors">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* ستون راست: متن توضیحات، عنوان و دکمه Learn More (در راست‌چین سمت راست قرار می‌گیرد) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-5 space-y-6 text-right"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-medium">
                        مهارت‌های تخصصی
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                            مهارت‌های محبوب و سوابق من
                        </h2>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                        با بهره‌گیری از ابزارها و تکنولوژی‌های روز دنیا، تلاش می‌کنم کدهایی تمیز، مقیاس‌پذیر و با بالاترین کیفیت ممکن برای پروژه‌های وب خلق کنم.
                    </p>

                    {/* <div className="pt-2">
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-100 font-semibold transition-all shadow-lg group"
                        >
                            <span>بیشتر بدانید</span>
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        </Link>
                    </div> */}
                </motion.div>

                {/* ستون چپ: مستطیل کارت مهارت‌ها با انیمیشن پر شدن درصد */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {skillsList.map((skill, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800/80 hover:border-cyan-500/50 transition-all group"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                                            {skill.icon}
                                        </div>
                                        <span className="font-bold text-sm text-slate-800 dark:text-slate-200">{skill.name}</span>
                                    </div>
                                    <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">{skill.level}%</span>
                                </div>

                                {/* نوار پیشرفت متحرک */}
                                <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
                                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}