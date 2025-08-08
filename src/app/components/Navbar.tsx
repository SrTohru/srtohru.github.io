'use client';
import Link from "next/link";
import { useI18n } from "@/app/providers/LanguageProvider";
import type { Locale } from "@/i18n/dictionary";

export default function Navbar() {
    const { t, locale, setLocale } = useI18n();

    // Ensure t has the required keys to avoid runtime errors
    if (!t || !t.brand || !t.about || !t.projects || !t.contact || !setLocale) {
        return null;
    }

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-lg font-semibold">
                    {t.brand}
                </Link>
                <div>
                    <Link href="/about" className="text-gray-300 hover:text-white px-4">
                        {t.about}
                    </Link>
                    <Link href="/projects" className="text-gray-300 hover:text-white px-4">
                        {t.projects}
                    </Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white px-4">
                        {t.contact}
                    </Link>

                    <select
                        className="bg-gray-700 text-white px-2 py-1 rounded ml-4"
                        value={locale}
                        onChange={(e) => setLocale(e.target.value as Locale)}
                    >
                        <option value="es">Español</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </div>
        </nav>
    );
}