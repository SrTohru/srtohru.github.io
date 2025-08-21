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


export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills and projects.",
    image: "/images/EilynFotografia.jpg",
    link: "test",
  }, 
  {
    id: 2,
    title: "Eilyn Garcia Fotografía Website Management & WhatsApp Bot",
    description: "Worked on the backend & frontend of a system for managing photography studio business data and appointments, integrated with a WhatsApp chatbot for customer interactions.",
    image: "/images/EilynFotografia.jpg",
    link: "test",
  },
  {
    id: 3,
    title: "Blog Application",
    description: "A blog application with user authentication and CRUD operations.",
    image: "/images/blog.jpg",
    link: "test",
  },
] as const;


export type Locale = keyof typeof messages;
