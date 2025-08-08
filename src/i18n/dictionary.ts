export const messages = {
  es: {
    brand: "Portafolio de Jose",
    about: "Acerca de mi",
    projects: "Mis proyectos",
    contact: "Contacto",
    home: {
      heroTitle: "Hola, soy Jose",
      heroSubtitle: "Desarrollador Frontend",
      ctaContact: "Contáctame",
      ctaProjects: "Ver proyectos",
      aboutTitle: "Sobre mí",
      aboutText: "Breve descripción para que la edites a tu gusto.",
      projectsTitle: "Proyectos destacados",
    },
  },
  en: {
    brand: "Jose's Portfolio",
    about: "About me",
    projects: "My Projects",
    contact: "Contact",
    home: {
      heroTitle: "Hi, I'm Jose",
      heroSubtitle: "Frontend Developer",
      ctaContact: "Contact me",
      ctaProjects: "See projects",
      aboutTitle: "About me",
      aboutText: "Short description you can edit as you like.",
      projectsTitle: "Featured projects",
    },
  },
} as const;

export type Locale = keyof typeof messages;
