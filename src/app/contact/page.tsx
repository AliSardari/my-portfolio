"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Mail, Send, Globe, Code, CheckCircle, AlertCircle } from "lucide-react";

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
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-cyan-500 selection:text-slate-950 transition-colors">
            <Navbar />
            <div className="max-w-5xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-medium mb-4">
                        راه‌های ارتباطی
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight mb-3">ارتباط با من</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">خوشحال می‌شوم پروژه‌های جدید یا فرصت‌های همکاری را با هم بررسی کنیم.</p>
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
                                    <span>your.email@example.com</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">linkedin.com/in/yourprofile</a>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                                        <Code className="w-5 h-5" />
                                    </div>
                                    <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">github.com/yourusername</a>
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
                                placeholder="مثال: علی احمدی"
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