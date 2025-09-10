'use client';
import { projects } from '@/i18n/dictionary';
import { useI18n } from '@/app/providers/LanguageProvider';

/**
 * Renders the projects page.
 * This page displays a grid of all the user's projects.
 * Each project card has an image, title, description, and links to the live demo and source code.
 *
 * @returns {JSX.Element} The rendered projects page component.
 */
export default function Projects() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen container mx-auto px-4 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        {t.projects}
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between transition-transform transform hover:scale-105"
          >
            <div>
              <div className="h-48 bg-gray-100 dark:bg-gray-800 rounded mb-4">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {p.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {p.description}
              </p>
            </div>
            <div className="flex justify-end gap-4 mt-auto">
              <a
                href={p.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              >
                Live Demo
              </a>
              <a
                href={p.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-4 py-2 rounded"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
