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
    modal: {
      close: "Cerrar",
      viewGithub: "Ver en GitHub",
      technologies: "Tecnologías utilizadas",
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
    modal: {
      close: "Close",
      viewGithub: "View on GitHub",
      technologies: "Technologies used",
    },
  },
} as const;

export const technologyIcons: Record<string, string> = {
  Java: "logos:java",
  "C#": "logos:c-sharp",
  JavaScript: "logos:javascript",
  React: "logos:react",
  "Vue.js": "logos:vue",
  "Node.js": "logos:nodejs-icon",
  ".NET Core": "logos:dotnet",
  MySQL: "logos:mysql",
  MongoDB: "logos:mongodb-icon",
  Angular: "logos:angular-icon",
  TypeScript: "logos:typescript-icon",
  "Tailwind CSS": "logos:tailwindcss-icon",
  TypeORM: "logos:typeorm",
  "Nest.js": "logos:nestjs",
  BuilderBot: "simple-icons:whatsapp",
};

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: {
      es: "Un sitio web de portafolio personal que muestra mis habilidades y proyectos.",
      en: "A personal portfolio website showcasing my skills and projects."
    },
    image: "/images/portfolioimg.jpg",
    technologies: ["Angular", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/SrTohru/srtohru.github.io",
  }, 
  {
    id: 2,
    title: "Eilyn Garcia Fotografía",
    description: {
      es: "Sistema de gestión para estudio fotográfico con backend y frontend para manejo de datos empresariales y citas, integrado con chatbot de WhatsApp para interacciones con clientes.",
      en: "Management system for photography studio with backend & frontend for business data and appointments, integrated with WhatsApp chatbot for customer interactions."
    },
    image: "/images/EilynFotografia.jpg",
    technologies: ["Vue.js", "TypeScript", "TypeORM", "Nest.js", "MySQL", "BuilderBot"],
    github: "https://github.com/ErickLabrada/Eilyn-Garcia-Fotografia-Sistema-Gestion",
  },
  {
    id: 3,
    title: "Product Store",
    description: {
      es: "Una aplicación de una tienda para operaciones CRUD.",
      en: "A basic store application for CRUD operations."
    },
    image: "/images/store.jpg",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Python", "Django"],
    github: "https://github.com/SrTohru/CRUD-Store.git",
  },
] as const;


export type Locale = keyof typeof messages;
