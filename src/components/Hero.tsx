"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Briefcase, Clock, Smile } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-6 overflow-hidden">
            {/* گرادینت پس‌زمینه ملایم برای جذابیت بصری در حالت دارک و لایت */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-500/10 dark:bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* ستون راست: اسم، عنوان، توضیحات و دکمه‌ها */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-5 space-y-6 text-right"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-medium">
                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        آماده برای همکاری‌های جدید
                    </div>

                    <div className="space-y-2">
                        سلام، من هستم <span className="text-cyan-600 dark:text-cyan-400">توسعه‌دهنده وب</span>
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                            برنامه‌نویس <span className="bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Full-Stack</span>
                        </h1>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                        توسعه‌دهنده وب با اشتیاق فراوان به خلق راهکارهای نرم‌افزاری مقیاس‌پذیر، مدرن و بهینه. تبدیل ایده‌های شما به تجربه‌های کاربری بی‌نظیر.
                    </p>

                    {/* دکمه‌های اقدام سریع (درباره من + دانلود رزومه) */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-lg shadow-cyan-500/20 group"
                        >
                            <span>درباره من</span>
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="/my-resume.pdf"
                            download="my-resume.pdf"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold transition-all group"
                        >
                            <span>دانلود رزومه</span>
                            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </motion.div>

                {/* ستون مرکز: عکس در کارد دایره‌ای با پس‌زمینه رنگی */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-3 flex justify-center"
                >
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-linear-to-tr from-cyan-500 to-blue-600 opacity-20 blur-xl animate-pulse" />
                        <div className="absolute inset-2 rounded-full bg-linear-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 dark:border-cyan-500/20 flex items-center justify-center p-3">
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-2xl bg-slate-200 dark:bg-slate-900">
                                <Image
                                    src="/avatar.png"
                                    alt="توسعه‌دهنده"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ستون چپ: کارت مستطیلی شامل آمار */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="lg:col-span-4 flex flex-col gap-4"
                >
                    <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:border-cyan-500/50 transition-all group">
                        <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">+۱,۵۰۰</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-xs">ساعت تجربه و کدنویسی</p>
                        </div>
                    </div>

                    <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:border-cyan-500/50 transition-all group">
                        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">+۲۵</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-xs">پروژه موفق پیاده‌سازی شده</p>
                        </div>
                    </div>

                    <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:border-cyan-500/50 transition-all group">
                        <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                            <Smile className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">%۱۰۰</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-xs">رضایت کارفرمایان و مشتریان</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}