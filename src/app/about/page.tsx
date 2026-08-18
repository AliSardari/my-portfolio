"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Server, Layout, Cpu, CheckCircle2, Award, ArrowLeft } from "lucide-react";
import SkillsSection from "@/components/SkillsSection";

export default function AboutPage() {
    const skillCategories = [
        {
            title: "فرانت‌اند (Frontend)",
            icon: <Layout className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
            skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "JavaScript", "TypeScript", "HTML5", "CSS3"],
        },
        {
            title: "بک‌اند (Backend)",
            icon: <Server className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
            skills: ["Laravel", "PHP", "Python"],
        },
        {
            title: "ابزارها و تکنولوژی‌ها",
            icon: <Cpu className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
            skills: ["RESTful APIs", "Git & GitHub", "Responsive Design"],
        },
    ];

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-cyan-500 selection:text-slate-950 transition-colors ">

            <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">
                {/* بخش بیوگرافی */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-medium mb-4">
                        رزومه و بیوگرافی
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">درباره من</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                        مسیر حرفه‌ ای من با یک تغییر مسیرِ از سرِ اشتیاق آغاز شد؛ فارغ‌ التحصیل مهندسی برق (قدرت) هستم، اما کششِ درونی‌ ام به دنیای کدنویسی مرا از سال ۱۳۹۵ به این عرصه کشاند. سال‌ های ابتدایی را با یادگیری عمیق، تجربه‌ های خودآموز (مثل ساخت اولین پلتفرم آموزشی با PHP/Laravel) و چالش‌ های فنی گذراندم تا اینکه وارد بازار کار شدم.
                        <br className="hidden md:block my-2" />
                        امروز به عنوان یک توسعه‌ دهنده وب فول‌استک، عاشقِ چالش‌ های پیچیده و حل مسئله هستم. برای من، دنیای فناوری یک بازیِ بی‌ انتهای یادگیری است. ترکیب تسلط بر فرانت‌ اند (React و Next.js) با قدرت بک‌ اند (Laravel و Python) به من ابزاری می‌دهد تا ایده‌ های خام را از صفر تا صد به راهکارهای نرم‌ افزاری مقیاس‌ پذیر و مدرن تبدیل کنم.
                    </p>
                </motion.div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                    <div className="flex items-center gap-4 text-right">
                        <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                            <Award className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">مدارک و گواهینامه‌ های تخصصی</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">مشاهده بیش از ۳۰ مدرک رسمی اخذ شده از دوره‌های تخصصی مختلف</p>
                        </div>
                    </div>

                    <Link
                        href="/certificates"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-cyan-500/20 shrink-0 group"
                    >
                        <span>مشاهده مدارک</span>
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* 3 دسته‌بندی مهارت‌ها */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-8"
                >
                    <h2 className="text-2xl font-bold tracking-tight">مهارت‌ ها و تخصص‌ ها</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {skillCategories.map((category, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 hover:border-cyan-500/50 transition-all shadow-sm group"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                                        {category.icon}
                                    </div>
                                    <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs font-medium px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700/50 flex items-center gap-1.5"
                                        >
                                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* بخش نوار پیشرفت متحرک (SkillsSection) */}
                <div className="pt-6">
                    <SkillsSection />
                </div>
            </div>
        </main>
    );
}