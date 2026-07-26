"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "خانه", href: "/", icon: <Home className="w-4 h-4" /> },
        { name: "درباره من", href: "/about", icon: <User className="w-4 h-4" /> },
        { name: "نمونه کارها", href: "/projects", icon: <Briefcase className="w-4 h-4" /> },
        { name: "تماس", href: "/contact", icon: <Mail className="w-4 h-4" /> },
    ];

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 transition-colors">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* لوگو */}
                <Link href="/" className="font-bold text-lg tracking-tight bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    رزومه کاری من
                </Link>

                {/* منوی دسکتاپ (بدون آیکون، مینیمال و همراه با استایل اکتیو) */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href === "/projects" && pathname.startsWith("/projects/"));
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition-colors relative py-1 ${isActive
                                        ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                                        : "text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400"
                                    }`}
                            >
                                {link.name}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 rounded-full animate-pulse" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* دکمه‌های سمت چپ (تم، دکمه ارتباط و همبرگری موبایل) */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />

                    <Link
                        href="/contact"
                        className="hidden sm:inline-block text-sm font-medium bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-full transition-all shadow-lg shadow-cyan-500/20"
                    >
                        ارتباط با من
                    </Link>

                    {/* دکمه همبرگری موبایل */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
                        aria-label="منوی ناوبری"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* منوی کشویی موبایل (همراه با آیکون و وضعیت اکتیو) */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl px-6 py-6 space-y-4 transition-colors">
                    <nav className="flex flex-col space-y-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                                            ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900"
                                        }`}
                                >
                                    {link.icon}
                                    <span>{link.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="pt-2">
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-3 rounded-xl transition-all shadow-md shadow-cyan-500/20"
                        >
                            ارتباط با من
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}