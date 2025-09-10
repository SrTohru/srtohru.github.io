'use client';
import Link from 'next/link';
import { useI18n } from '@/app/providers/LanguageProvider';
import { projects } from '@/i18n/dictionary';

/**
 * Renders the home page of the portfolio.
 * This component displays three main sections:
 * 1. A hero section with a title and subtitle.
 * 2. An "About Me" preview with a short biography and a picture.
 * 3. A "Featured Projects" section that showcases a few projects.
 *
 * @returns {JSX.Element} The rendered home page component.
 */
export default function Home() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {t.home.heroTitle}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
          {t.home.heroSubtitle}
        </p>
      </section>

      {/* About preview */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-3">
            {t.home.aboutTitle}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t.home.aboutText}
          </p>
        </div>
        <div className="h-3/4 w-3/4 bg-gradient-to-br from-blue-500/0 to-purple-500/20 rounded-lg border border-gray-200 dark:border-gray-700">
          <img
            src="/images/mi_foto.jpg"
            alt="Mi foto"
            className="w-f h-f object-cover rounded-lg"
          />
        </div> 
      </section>

      {/* Projects preview */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          {t.home.projectsTitle}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map over the projects array and render a card for each project. */}
          {projects.map((p) => (
            <div
              key={p.id}
              className="rounded-lg border border-gray-200 dark:border-gray-700 p-4"
            >
              <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded mb-3">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="h-auto bg-gray-100 dark:bg-gray-800 rounded w-auto mb-2">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  {p.title}
                </h3>
              </div>
             
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
