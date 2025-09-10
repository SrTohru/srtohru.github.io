'use client';
import { useI18n } from '@/app/providers/LanguageProvider';

/**
 * Renders the contact page.
 * This page contains a contact form and links to social media profiles.
 *
 * @returns {JSX.Element} The rendered contact page component.
 */
export default function Contact() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen container mx-auto px-4 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        {t.contact}
      </h1>
      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Send me a message
          </h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message..."
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Find me on
          </h2>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-lg text-blue-600 hover:underline">
              GitHub
            </a>
            <a href="#" className="text-lg text-blue-600 hover:underline">
              LinkedIn
            </a>
            <a href="#" className="text-lg text-blue-600 hover:underline">
              Twitter / X
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
  