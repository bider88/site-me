export interface Experience {
  role: { es: string; en: string };
  company: string;
  period: string;
  description: { es: string; en: string };
  current: boolean;
}

export const experience: Experience[] = [
  {
    role: {
      es: "Fundador / Lead Developer",
      en: "Founder / Lead Developer",
    },
    company: "Comandify",
    period: "2023 - Presente",
    description: {
      es: "Lideré el desarrollo completo de una plataforma SaaS para gestión de restaurantes, desde la arquitectura hasta el despliegue. Implementé soluciones en tiempo real con Firebase y creé una interfaz intuitiva con React y Tailwind CSS.",
      en: "Led the complete development of a SaaS platform for restaurant management, from architecture to deployment. Implemented real-time solutions with Firebase and created an intuitive interface with React and Tailwind CSS.",
    },
    current: true,
  },
  {
    role: {
      es: "Frontend Developer",
      en: "Frontend Developer",
    },
    company: "Freelance",
    period: "2021 - 2023",
    description: {
      es: "Desarrollé aplicaciones web modernas para diversos clientes, especializándome en Angular, React y StencilJS. Implementé arquitecturas escalables y mejores prácticas de desarrollo.",
      en: "Developed modern web applications for various clients, specializing in Angular, React, and StencilJS. Implemented scalable architectures and development best practices.",
    },
    current: false,
  },
];
