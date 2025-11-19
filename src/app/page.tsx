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
      <section className="container mx-auto px-6 py-16 flex flex-col items-center text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent pointer-events-none"></div>
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.home.heroTitle}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.home.heroSubtitle}
          </p>
        </div>
      </section>

    

      {/* About preview */}
      <section className="container mx-auto px-16 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.home.aboutTitle}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {t.home.aboutText}
          </p>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative h-3/4 w-3/4 mx-auto">
            <img
              src="/images/mi_foto.jpg"
              alt="Mi foto"
              className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-white dark:border-gray-800"
            />
          </div>
        </div> 
    
       {/* Social Media Links - MEJORADO */}
        <div className="mt-16 md:col-span-2 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Find me on
          </h2>
          
          <div className="flex flex-row gap-6">
            
            {/* GitHub Button */}
            <a 
              href="https://github.com/SrTohru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={`https://api.iconify.design/skill-icons:github-light.svg`}
                alt="GitHub"
                className="h-12 w-12 transition-transform group-hover:scale-110"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  GitHub
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Check out my projects
                </span>
              </div>
            </a>

            {/* LinkedIn Button */}
            <a 
              href="https://www.linkedin.com/in/jehinojosa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={`https://api.iconify.design/skill-icons:linkedin.svg`}
                alt="LinkedIn"
                className="h-12 w-12 transition-transform group-hover:scale-110"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  LinkedIn
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect professionally
                </span>
              </div>
            </a>

          </div>
        </div>

      </section>


  {/* Technologies preview */}
  <section className="container mx-auto px-4 py-10 mb-2">
  
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Stack technologies</h2>
  
  <div className="flex justify-center">
    <div className='grid grid-cols-4 sm:grid-cols-6 gap-4 max-w-3xl'>
      {techStack.map((tech) => (
      <div key={tech} className="flex flex-col items-center group">
        <div className="h-16 w-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400">
          <img
            src={`https://api.iconify.design/${technologyIcons[tech]}.svg`}
            alt={tech}
            className="h-10 w-10"
            loading="lazy"
          />
        </div>
        <span className="mt-3 text-sm text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
      </div>
    ))}
    </div>
  </div>
</section>

      {/* Projects preview */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          {t.home.projectsTitle}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((p) => (
            <div
              key={p.id}
              onClick={() => openModal(p.id)}
              className="group rounded-xl border-2 border-gray-200 dark:border-gray-700 p-5 cursor-pointer hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-gray-800"
            >
              <div className="h-64 bg-gray-100 dark:bg-gray-900 rounded-lg mb-4 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-lg p-3 text-center">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
