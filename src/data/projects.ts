export interface Project {
  title: string;
  description: { es: string; en: string };
  tags: string[];
  demo?: string;
  repo?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Comandify",
    description: {
      es: "SaaS integral para la gestión de restaurantes y pedidos en tiempo real.",
      en: "Comprehensive SaaS for real-time restaurant management and ordering.",
    },
    tags: ["React", "Vite", "Firebase", "Tailwind"],
    image: "/projects/comandify.webp",
    demo: "https://comandify.app",
    repo: "https://github.com/bider88/comandify",
  },
  {
    title: "E-commerce",
    description: {
      es: "Tienda online con carrito de compras y procesamiento de pagos.",
      en: "Online store with shopping cart and payment processing.",
    },
    tags: ["React", "Vite", "Firebase", "Tailwind"],
    image: "/projects/ecommerce.webp",
    demo: "https://ecommerce.vercel.app",
    repo: "https://github.com/bider88/ecommerce",
  },
];
