'use client';
import Link from "next/link";
import { useI18n } from "@/app/providers/LanguageProvider";
import type { Locale } from "@/i18n/dictionary";

/**
 * The navigation bar component with name/logo and language switcher.
 * This component must be rendered within a `LanguageProvider` to access the `useI18n` hook.
 *
 * @returns {JSX.Element} The rendered navigation bar.
 */
export default function Navbar() {
    const { locale, setLocale } = useI18n();
    
    return (
        <nav className="border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo/Name */}
                <Link href="/" className="group flex items-center gap-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                        <span className="text-white font-bold text-xl">JH</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Jose Hinojosa
                    </span>
                </Link>

                {/* Language Switcher with flags */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setLocale('es')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                            locale === 'es' 
                                ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 shadow-md' 
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                        <span className="text-xl">🇪🇸</span>
                        <span className="font-medium hidden sm:inline">ES</span>
                    </button>
                    <button
                        onClick={() => setLocale('en')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                            locale === 'en' 
                                ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 shadow-md' 
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                        <span className="text-xl">🇺🇸</span>
                        <span className="font-medium hidden sm:inline">EN</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}