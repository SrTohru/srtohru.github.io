import Link from 'next/link';

/**
 * Renders the footer for the application.
 * It contains navigation links and social media icons.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Jose Eduardo Hinojosa Romero. All Rights Reserved.</p>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-gray-400">
            GitHub
          </Link>
          <Link href="#" className="hover:text-gray-400">
            LinkedIn
          </Link>
          <Link href="#" className="hover:text-gray-400">
            Twitter / X
          </Link>
        </div>
      </div>
    </footer>
  );
}
