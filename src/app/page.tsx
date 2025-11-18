'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useI18n } from '@/app/providers/LanguageProvider';
import { projects, technologyIcons } from '@/i18n/dictionary';
import ProjectModal from '@/app/components/ProjectModal';

export default function Home() {
  const { t } = useI18n();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const techStack = Object.keys(technologyIcons);

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-6 py-8 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {t.home.heroTitle}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
          {t.home.heroSubtitle}
        </p>
      </section>

      {/* About preview */}
      <section className="container mx-auto px-16 py-12 grid md:grid-cols-2 gap-8 items-center">
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


  {/* Technologies preview */}
  <section className="container mx-auto px-4 py-12 mb-12">
  
    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Stack technologies</h2>
  
  <div className="flex justify-center">
    <div className='grid grid-cols-4 sm:grid-cols-8 gap-2 max-w-3xl'>
      {techStack.map((tech) => (
      <div key={tech} className="flex flex-col items-center">
        <div className="h-16 w-16 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <img
            src={`https://api.iconify.design/${technologyIcons[tech]}.svg`}
            alt={tech}
            className="h-10 w-10"
            loading="lazy"
          />
        </div>
        <span className="mt-3 text-sm text-gray-700 dark:text-gray-300">{tech}</span>
      </div>
    ))}
    </div>
  </div>
</section>

      {/* Projects preview */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          {t.home.projectsTitle}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              onClick={() => openModal(p.id)}
              className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 cursor-pointer hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-200"
            >
              <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded mb-3">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="h-auto bg-gray-100 dark:bg-gray-800 rounded w-auto mb-2 items-center justify-center flex">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        projectId={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </main>
  );
}
