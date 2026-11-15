// Tecnologias. Cada grupo aparece na página /tecnologias (grupos vazios ficam ocultos).
// icon: html5, css3, javascript, python, github, vercel. Se não houver ícone, aparece um padrão.
export type Skill = { name: string; icon?: string };
export type SkillGroup = { titulo: string; descricao: string; itens: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    titulo: "Uso nos meus projetos",
    descricao: "O que já aplico em sites e páginas que desenvolvi.",
    itens: [
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "GitHub", icon: "github" }
    ]
  },
  {
    titulo: "Conhecimento básico",
    descricao: "Base inicial, em prática de lógica e algoritmos.",
    itens: [{ name: "Python", icon: "python" }]
  },
  {
    titulo: "Em desenvolvimento",
    descricao: "Ferramentas que estou aprendendo e explorando.",
    itens: [
      { name: "Vercel", icon: "vercel" },
      { name: "Lovable" },
      { name: "Bolt" },
      { name: "v0" },
      { name: "Ferramentas de IA" }
    ]
  },
  {
    titulo: "Maior domínio",
    descricao: "Adicione aqui quando tiver confirmado.",
    itens: []
  }
];
