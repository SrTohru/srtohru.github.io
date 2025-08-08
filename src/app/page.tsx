'use client';
import Link from 'next/link';
import { useI18n } from '@/app/providers/LanguageProvider';

export default function Home() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {t.home.heroTitle}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
          {t.home.heroSubtitle}
        </p>
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            {t.home.ctaContact}
          </Link>
          <Link
            href="/projects"
            className="px-5 py-2 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
          >
            {t.home.ctaProjects}
          </Link>
        </div>
      </section>

      {/* About preview */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            {t.home.aboutTitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t.home.aboutText}
          </p>
        </div>
        <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-gray-200 dark:border-gray-700" />
      </section>

      {/* Projects preview */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          {t.home.projectsTitle}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="rounded-lg border border-gray-200 dark:border-gray-700 p-4"
            >
              <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded mb-3" />
              <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-2/3 mb-2" />
              <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-1/2" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
