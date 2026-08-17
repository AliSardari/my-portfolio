"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 px-6 overflow-hidden">
            {/* گرادینت پس‌زمینه ملایم برای جذابیت بصری در حالت دارک و لایت */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-500/10 dark:bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* ستون راست: متن، عنوان و دکمه‌ها (۶ ستون - نصف صفحه) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-6 space-y-6 text-right"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-medium">
                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        آماده برای همکاری‌های جدید
                    </div>

                    <div className="space-y-2 py-1 text-green-500 font-semibold">
                        سلام من یک <span className="text-cyan-600 dark:text-cyan-400 text-xl">توسعه‌ دهنده وب</span> هستم
                        <h1 className="text-4xl sm:text-5xl py-2 font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                            و برنامه نویس <span className="bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Full-Stack</span> فعالیت می کنم
                        </h1>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
                        توسعه‌ دهنده‌ ای که پشت‌ صحنه کسب‌ و کارها را با سیستم‌ های اتوماسیون و داشبوردهای هوشمند مدیریت می‌ کند.

                        با ترکیب <span className="text-blue-600">PHP/Laravel</span> برای بخش‌ های پایدار و پایتون برای پردازش‌ های هوشمند، سیستم‌ هایی می‌ سازم که کارهای تکراری را حذف و تصمیم‌ گیری را برای مدیران آسان می‌کنند.

                        نمونه‌ هایی از کارهایی که انجام داده‌ ام:
                        <p className="text-green-600">- طراحی داشبوردهای مدیریتی با React, Next.js و Tailwind</p>
                        <p className="text-green-600">- ساخت بات‌ های هوشمند برای خودکارسازی تعاملات مشتریان</p>
                        <p className="text-green-600">- پیاده‌ سازی سیستم‌ های اتوماسیون سفارشی برای کاهش زمان پردازش</p>

                        اگر به دنبال سیستمی هستید که وقت شما را آزاد کند و اطلاعات را در قالبی زیبا و کاربردی به شما نشان دهد، با من تماس بگیرید.
                    </p>

                    {/* دکمه‌های اقدام سریع */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
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

                {/* ستون چپ: عکس بزرگ هوش مصنوعی با فریم شیک (۶ ستون - نصف صفحه دیگر) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-6 flex justify-center"
                >
                    <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
                        {/* افکت نورانی پشت عکس */}
                        <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-cyan-500 to-blue-600 opacity-20 blur-2xl animate-pulse" />

                        {/* کادر اصلی نگهدارنده عکس */}
                        <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-cyan-500/30 dark:border-cyan-500/20 shadow-2xl bg-slate-200 dark:bg-slate-900 p-2">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                <Image
                                    src="/avatar/my-avatar.jpg"
                                    alt="توسعه‌دهنده وب"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}