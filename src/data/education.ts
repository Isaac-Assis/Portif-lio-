// Formação e atividades. Aparecem como linha do tempo, na ordem da lista.
// periodo é opcional: só preencha se tiver certeza.
export type EducationItem = { titulo: string; instituicao: string; descricao?: string; periodo?: string };

export const education: EducationItem[] = [
  {
    titulo: "Engenharia da Computação",
    instituicao: "Universidade Federal do Recôncavo da Bahia (UFRB)",
    descricao: "Graduação em andamento, no campus de Cruz das Almas.",
    periodo: "Em andamento"
  },
  {
    titulo: "Ensino médio integrado ao técnico",
    instituicao: "IF Baiano, Campus Valença",
    descricao: "Formação anterior, base para a entrada na graduação."
  },
  {
    titulo: "DevOpsDays, Feira de Santana",
    instituicao: "Evento de tecnologia",
    descricao: "Participação como ouvinte, com contato com temas de DevOps, cloud native e desenvolvimento."
  },
  {
    titulo: "Recode Jr",
    instituicao: "Empresa júnior da UFRB",
    descricao: "Contato e participação em atividades relacionadas à empresa júnior, com interesse em front-end."
  }
];
