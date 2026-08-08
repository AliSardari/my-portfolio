"use client";

import Image from "next/image";
import { Download, Maximize2 } from "lucide-react";

interface CertificateCardProps {
    title: string;
    category: string | string[];
    thumbnail: string;
    original: string;
    onOpenModal: () => void;
    onCategoryClick: (category: string) => void; // پراپ جدید برای کلیک روی دسته‌بندی
}

export default function CertificateCard({
    title,
    category,
    thumbnail,
    original,
    onOpenModal,
    onCategoryClick,
}: CertificateCardProps) {
    // تبدیل دسته‌بندی به آرایه برای نمایش پویای هر بخش
    const categoriesArray = Array.isArray(category) ? category : [category];

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 shadow-sm hover:border-cyan-500/50 transition-all group">
            {/* عنوان و دسته‌بندی‌ها */}
            <div className="space-y-2 text-right flex-1">
                {/* نمایش دسته‌بندی‌ها به صورت دکمه‌های قابل کلیک */}
                <div className="flex flex-wrap gap-1.5">
                    {categoriesArray.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => onCategoryClick(cat)}
                            className="text-[10px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500 hover:text-slate-950 text-cyan-600 dark:text-cyan-400 font-medium transition-all cursor-pointer"
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    {title}
                </h3>

                <div className="pt-2">
                    <a
                        href={original}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-all shadow-xs"
                    >
                        <Download className="w-3.5 h-3.5" />
                        <span>دانلود مدرک</span>
                    </a>
                </div>
            </div>

            {/* تصویر کوچک مدرک */}
            <div
                onClick={onOpenModal}
                className="relative w-28 h-20 sm:w-36 sm:h-24 shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 cursor-pointer border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/50 transition-all"
            >
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 112px, 144px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-cyan-400 drop-shadow-md" />
                </div>
            </div>
        </div>
    );
}