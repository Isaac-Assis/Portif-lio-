import Page from "../components/Page";
import { FeaturedProject, ProjectRow } from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projetos() {
  const destaque = projects.find((p) => p.featured);
  const outros = projects.filter((p) => p !== destaque);
  return (
    <Page title="Projetos">
      <h1 className="mb-12 font-display text-5xl font-bold leading-none md:text-7xl">Projetos</h1>
      {destaque && <FeaturedProject p={destaque} />}
      <div className="mt-20">
        <h2 className="mb-6 font-display text-2xl font-bold">Outros trabalhos</h2>
        {outros.map((p) => <ProjectRow key={p.title} p={p} />)}
        <div className="border-t border-linha" />
      </div>
    </Page>
  );
}
