export interface Project {
  title: string;
  description: { es: string; en: string };
  tags: string[];
  link?: string;
  github?: string;
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
  },
  {
    title: "E-commerce",
    description: {
      es: "Tienda online con carrito de compras y procesamiento de pagos.",
      en: "Online store with shopping cart and payment processing.",
    },
    tags: ["React", "Vite", "Firebase", "Tailwind"],
    image: "/projects/ecommerce.webp",
  },
];
