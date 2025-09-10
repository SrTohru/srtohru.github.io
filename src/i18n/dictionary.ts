/**
 * An object containing the translations for the application.
 * The keys are the locales (e.g., 'es', 'en'), and the values are objects
 * containing the translated strings.
 *
 * @type {{ [key in Locale]: { about: string; projects: string; contact: string; home: { heroTitle: string; heroSubtitle: string; ctaContact: string; ctaProjects: string; aboutTitle: string; aboutText: string; projectsTitle: string; }; }; }}
 */
export const messages = {
  es: {
    about: "Acerca de mi",
    projects: "Mis proyectos",
    contact: "Contacto",
    home: {
      heroTitle: "Hola, soy Jose Eduardo Hinojosa Romero",
      heroSubtitle: "Desarrollador Full-Stack",
      ctaContact: "Contáctame",
      ctaProjects: "Ver proyectos",
      aboutTitle: "Sobre mí",
      aboutText: "Ingeniero de Software Full-Stack proactivo con experiencia práctica en el diseño y desarrollo de aplicaciones web, desde la creación de prototipos de UX hasta la arquitectura de bases de datos y servicios backend escalables. Con habilidades en Java, C#, JavaScript y frameworks modernos (React, Vue.js, Node.js, .NET Core). Competente en bases de datos relacionales y NoSQL (MySQL, SQL Server, MongoDB) y en metodologías ágiles (Scrum, Kanban). Apasionado por el código limpio, la colaboración en equipo y la entrega de soluciones de software confiables y centradas en el usuario.",
      projectsTitle: "Proyectos destacados",
    },
  },
  en: {
    about: "About me",
    projects: "My Projects",
    contact: "Contact",
    home: {
      heroTitle: "Hi, I'm Jose Eduardo Hinojosa Romero",
      heroSubtitle: "Full-Stack Developer",
      ctaContact: "Contact me",
      ctaProjects: "See projects",
      aboutTitle: "About me",
      aboutText: "Proactive Full-Stack Software Engineer with hands-on experience in designing and developing web applications, from UX prototyping to database architecture and scalable back-end services. Skilled in Java, C#, JavaScript, and modern frameworks (React, Vue.js, Node.js, .NET Core). Proficient in relational and NoSQL databases (MySQL, SQL Server, MongoDB) and Agile methodologies (Scrum, Kanban). Passionate about clean code, team collaboration, and delivering reliable, user-focused software solutions.",
      projectsTitle: "Featured projects",
    },
  },
} as const;


/**
 * @typedef {object} Project
 * @property {number} id - The unique identifier of the project.
 * @property {string} title - The title of the project.
 * @property {string} description - A brief description of the project.
 * @property {string} image - The path to the project's image.
 * @property {string} liveLink - A link to the live demo of the project.
 * @property {string} sourceLink - A link to the source code of the project.
 */

/**
 * An array of project objects, each representing a project to be displayed on the portfolio.
 *
 * @type {Project[]}
 */
export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills and projects.",
    image: "/images/EilynFotografia.jpg",
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 2,
    title: "Eilyn Garcia Fotografía Website Management & WhatsApp Bot",
    description: "Worked on the backend & frontend of a system for managing photography studio business data and appointments, integrated with a WhatsApp chatbot for customer interactions.",
    image: "/images/EilynFotografia.jpg",
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 3,
    title: "Blog Application",
    description: "A blog application with user authentication and CRUD operations.",
    image: "/images/blog.jpg",
    liveLink: "#",
    sourceLink: "#",
  },
] as const;


/**
 * The available locales for the application.
 * @type {'es' | 'en'}
 */
export type Locale = keyof typeof messages;
