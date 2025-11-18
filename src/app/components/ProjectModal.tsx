'use client';
import { useI18n } from '@/app/providers/LanguageProvider';
import { projects } from '@/i18n/dictionary';

interface ProjectModalProps {
  projectId: number | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ projectId, isOpen, onClose }: ProjectModalProps) {
  const { t, locale } = useI18n();
  
  if (!isOpen || projectId === null) return null;
  
  const project = projects.find(p => p.id === projectId);
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Project Image */}
          <div className="mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description[locale]}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              {t.modal.technologies}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-center"
            >
              {t.modal.viewGithub}
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 border bg-red-500 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-red-800 transition-colors"
            >
              {t.modal.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
