"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<{ loading: boolean; success?: boolean; message?: string }>({ loading: false });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ loading: true });

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus({ loading: false, success: true, message: data.message });
                setFormData({ name: "", email: "", message: "" }); // پاک کردن فرم
            } else {
                setStatus({ loading: false, success: false, message: data.message });
            }
        } catch (err) {
            setStatus({ loading: false, success: false, message: "خطا در ارتباط با سرور." });
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-cyan-500 selection:text-slate-950 transition-colors no-scrollbar">
            <div className="max-w-5xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-medium mb-4">
                        راه‌ های ارتباطی
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight mb-3">ارتباط با من</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">خوشحال می‌ شوم پروژه‌ های جدید یا فرصت‌ های همکاری را با هم بررسی کنیم.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                    {/* اطلاعات تماس */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-6">اطلاعات تماس</h3>

                            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span>alisardari66@gmail.com</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4v-8.2c0-2-.1-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z" />
                                        </svg>
                                    </div>

                                    <a
                                        href="https://www.linkedin.com/in/ali-s-a230b4172/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
                                    >
                                        پروفایل لینکدین من
                                    </a>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18v3.24c0 .31.21.68.8.56A10.53 10.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z" />
                                        </svg>

                                    </div>
                                    <a href="https://github.com/AliSardari" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                        https://github.com/AliSardari
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* فرم تماس */}
                    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-4 shadow-sm">
                        {status.message && (
                            <div className={`p-3 rounded-xl text-sm flex items-center gap-2 ${status.success ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400'}`}>
                                {status.success ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                                <span>{status.message}</span>
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">نام شما</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="مثال: علی سرداری"
                                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">ایمیل</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="name@example.com"
                                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">پیام</label>
                            <textarea
                                rows={4}
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="متن پیام شما..."
                                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status.loading}
                            className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold py-3 rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            <span>{status.loading ? "در حال ارسال..." : "ارسال پیام"}</span>
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </motion.div>

                {/* فوتر */}
                <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-900 text-center text-slate-500 text-xs">
                    <p>© {new Date().getFullYear()} - طراحی و توسعه یافته با Next.js و Tailwind CSS</p>
                </div>
            </div>
        </main>
    );
}