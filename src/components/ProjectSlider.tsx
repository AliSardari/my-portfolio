"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectSliderProps {
    images: string[];
    title: string;
    isDetail?: boolean; // پراپ جدید برای مشخص کردن حالت صفحه جزئیات
}

export default function ProjectSlider({ images, title, isDetail = false }: ProjectSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    if (!images || images.length === 0) {
        return (
            <div className={`w-full ${isDetail ? "h-72 sm:h-96" : "h-48 sm:h-52"} flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 text-slate-400 dark:text-slate-600 gap-2`}>
                <span className="text-xs">تصویری موجود نیست</span>
            </div>
        );
    }

    const prevSlide = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            {/* اسلایدر - اگر isDetail فعال باشد ارتفاع بیشتر (h-72 تا h-96) می‌گیرد */}
            <div
                className={`relative w-full overflow-hidden group/slider cursor-pointer ${isDetail ? "h-72 sm:h-[420px] rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800" : "h-48 sm:h-52"
                    }`}
                onClick={() => setIsLightboxOpen(true)}
            >
                <Image
                    src={images[currentIndex]}
                    alt={`${title} - تصویر ${currentIndex + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/slider:scale-105"
                />

                {/* آیکون بزرگنمایی روی هاور */}
                <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover/slider:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-slate-900/80 text-white text-xs px-3.5 py-2 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                        <Maximize2 className="w-4 h-4 text-cyan-400" /> کلیک برای مشاهده در اندازه بزرگ
                    </span>
                </div>

                {/* فلش‌های ناوبری */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-950/70 hover:bg-slate-950 text-white p-2 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity backdrop-blur-sm shadow-md"
                            aria-label="تصویر قبلی"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-950/70 hover:bg-slate-950 text-white p-2 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity backdrop-blur-sm shadow-md"
                            aria-label="تصویر بعدی"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </>
                )}

                {/* نشانگر نقطه‌ای (Dots) */}
                {images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-slate-950/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        {images.map((_, idx) => (
                            <span
                                key={idx}
                                className={`h-1.5 rounded-full transition-all ${currentIndex === idx ? "w-6 bg-cyan-400" : "w-1.5 bg-white/60"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* مودال تمام‌صفحه (Lightbox Modal) */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsLightboxOpen(false)}
                        className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
                    >
                        <button
                            onClick={() => setIsLightboxOpen(false)}
                            className="absolute top-6 right-6 text-white bg-slate-800/80 hover:bg-slate-700 p-2.5 rounded-full transition-all z-50 shadow-xl"
                            aria-label="بستن"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl h-[75vh] sm:h-[80vh] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl flex items-center justify-center"
                        >
                            <Image
                                src={images[currentIndex]}
                                alt={`${title} - نمای بزرگ`}
                                fill
                                className="object-contain"
                            />

                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-cyan-500 hover:text-slate-950 text-white p-3 rounded-full transition-all shadow-lg border border-slate-700"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-cyan-500 hover:text-slate-950 text-white p-3 rounded-full transition-all shadow-lg border border-slate-700"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </>
                            )}

                            <div className="absolute bottom-4 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800 text-white text-xs sm:text-sm flex items-center gap-3">
                                <span className="font-bold text-cyan-400">{title}</span>
                                <span className="text-slate-400">|</span>
                                <span className="text-slate-300">تصویر {currentIndex + 1} از {images.length}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}