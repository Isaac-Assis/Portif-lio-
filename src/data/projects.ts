// Projetos. Cada item abaixo vira um projeto na página /projetos.
// O primeiro com destaque: true aparece grande no topo.
// image, link e code são opcionais: apague a linha se não tiver.
export type Project = {
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  image?: string; // ex.: "/images/nexaweb.jpg" (arquivo em public/images)
  link?: string; // demonstração
  code?: string; // código-fonte
};

export const projects: Project[] = [
  {
    title: "NexaWeb",
    featured: true,
    description:
      "Iniciativa própria de desenvolvimento de sites e soluções digitais para pequenos negócios, do layout à publicação.",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"]
  },
  {
    title: "Hype Infinity",
    description:
      "Site institucional para empresa de tecnologia, com serviços, produtos digitais e contato direto por WhatsApp.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub", "Vercel"]
  },
  {
    title: "Clínica São Marcos",
    description:
      "Landing page para clínica de Santo Antônio de Jesus (BA), com serviços, horários, localização e contato.",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Stylus",
    description: "Demonstração de site comercial desenvolvida pela NexaWeb.",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Salão Imperial",
    description: "Demonstração de site para salão de beleza desenvolvida pela NexaWeb.",
    technologies: ["HTML", "CSS", "JavaScript"]
  }
];
