'use client';
import Link from "next/link";
import { useI18n } from "@/app/providers/LanguageProvider";
import type { Locale } from "@/i18n/dictionary";

/**
 * The navigation bar component.
 * It displays the links to the different pages and the language switcher.
 * This component must be rendered within a `LanguageProvider` to access the `useI18n` hook.
 *
 * @returns {JSX.Element} The rendered navigation bar.
 */
export default function Navbar() {
    const { t, locale, setLocale } = useI18n();

    // No need for a null check here, because the `useI18n` hook
    // will throw an error if the component is not wrapped in a `LanguageProvider`.
    // This ensures that `t`, `locale`, and `setLocale` are always available.

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-center items-center">
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

                    {/* The language switcher dropdown. */}
                    <select
                        className="bg-gray-700 text-white px-2 py-1 rounded ml-4"
                        value={locale}
                        // When the user selects a new language, the `setLocale` function from the LanguageProvider is called.
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