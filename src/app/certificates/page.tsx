"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import CertificateCard from "@/components/CertificateCard";
import { certificatesData } from "@/data/certificatesData";
import { Award, X, ChevronRight, ChevronLeft } from "lucide-react";

export default function CertificatesPage() {
    const [selectedCategory, setSelectedCategory] = useState("همه");
    // ذخیره ایندکس مدرک فعال در مودال برای قابلیت بعدی/قبلی
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // استخراج تمام دسته‌بندی‌های یکتا (حتی اگر آرایه باشند)
    const allCategories = ["همه", ...Array.from(new Set(certificatesData.flatMap(c => c.category)))];

    // فیلتر کردن مدارک بر اساس دسته‌بندی (پشتیبانی از چند دسته‌بندی)
    const filteredCertificates = selectedCategory === "همه"
        ? certificatesData
        : certificatesData.filter(c => c.category.includes(selectedCategory));

    // توابع کنترل اسلایدر مودال
    const handleNext = () => {
        if (activeIndex !== null) {
            setActiveIndex((prev) => (prev! + 1) % filteredCertificates.length);
        }
    };

    const handlePrev = () => {
        if (activeIndex !== null) {
            setActiveIndex((prev) => (prev! - 1 + filteredCertificates.length) % filteredCertificates.length);
        }
    };

    const activeCert = activeIndex !== null ? filteredCertificates[activeIndex] : null;

    return (
        <main className="min-h-screen text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-950 transition-colors">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-20">
                {/* هدر صفحه */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-12 space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-medium">
                        <Award className="w-3.5 h-3.5" />
                        سوابق و گواهینامه‌ها
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        مدارک و افتخارات تخصصی
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                        مجموعه‌ای از دوره‌ها و گواهینامه‌های رسمی اخذ شده در حوزه‌های مختلف فنی و مهندسی.
                    </p>
                </motion.div>

                {/* دکمه‌های فیلتر دسته‌بندی */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {allCategories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                                selectedCategory === cat
                                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-cyan-500/50"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* گرید کارت‌های مدارک */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredCertificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.04 }}
                        >
                            <CertificateCard
                                title={cert.title}
                                category={cert.category}
                                thumbnail={cert.thumbnail}
                                original={cert.original}
                                onOpenModal={() => setActiveIndex(index)}
                                onCategoryClick={(cat) => setSelectedCategory(cat)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* مودال گرافیکی پیش‌نمایش با دکمه‌های بعدی و قبلی */}
            <AnimatePresence>
                {activeCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveIndex(null)}
                        className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
                    >
                        {/* دکمه بستن */}
                        <button
                            onClick={() => setActiveIndex(null)}
                            className="absolute top-6 right-6 text-white bg-slate-800/80 hover:bg-slate-700 p-2.5 rounded-full transition-all z-50 shadow-xl"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* دکمه بعدی (گالری) */}
                        <button
                            onClick={(e) => { e.stopPropagation(); handleNext(); }}
                            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white bg-slate-800/80 hover:bg-slate-700 p-3 rounded-full transition-all z-50 shadow-xl"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* دکمه قبلی (گالری) */}
                        <button
                            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white bg-slate-800/80 hover:bg-slate-700 p-3 rounded-full transition-all z-50 shadow-xl"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* تصویر بزرگ مودال */}
                        <motion.div
                            key={activeCert.id}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl h-[75vh] sm:h-[85vh] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl flex items-center justify-center p-2"
                        >
                            <Image
                                src={activeCert.original}
                                alt={activeCert.title}
                                fill
                                sizes="(max-width: 1200px) 100vw, 1200px"
                                className="object-contain"
                                priority
                            />
                            <div className="absolute bottom-4 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800 text-xs sm:text-sm font-bold text-cyan-400 text-center">
                                {activeCert.title} ({activeIndex! + 1} از {filteredCertificates.length})
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}