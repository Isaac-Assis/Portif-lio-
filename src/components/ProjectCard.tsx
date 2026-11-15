import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "../data/projects";

function Capa({ p, className }: { p: Project; className: string }) {
  return (
    <div className={`overflow-hidden border border-linha bg-superficie ${className}`}>
      {p.image ? (
        <img src={p.image} alt={`Captura de tela de ${p.title}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[repeating-linear-gradient(135deg,#192638_0_12px,#10151E_12px_24px)] text-sm text-suave">
          Captura de tela em breve
        </div>
      )}
    </div>
  );
}

function Links({ p }: { p: Project }) {
  if (!p.link && !p.code) return <p className="text-sm text-suave">Link de demonstração em breve.</p>;
  return (
    <div className="flex gap-6 text-[0.95rem]">
      {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="group/l inline-flex items-center gap-1 underline decoration-marinho decoration-2 underline-offset-4 transition hover:decoration-tinta">Ver demonstração <ArrowUpRight size={16} className="transition-transform group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5" /></a>}
      {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline decoration-marinho decoration-2 underline-offset-4 transition hover:decoration-tinta"><Code2 size={16} /> Código</a>}
    </div>
  );
}

const Tecs = ({ p }: { p: Project }) => (
  <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-suave">{p.technologies.map((t) => <li key={t}>{t}</li>)}</ul>
);

export function FeaturedProject({ p }: { p: Project }) {
  return (
    <article className="group grid gap-8 md:grid-cols-12 md:items-end">
      <Capa p={p} className="aspect-[16/10] md:col-span-7" />
      <div className="flex flex-col gap-5 md:col-span-5">
        <p className="text-sm text-suave">Projeto em destaque</p>
        <h2 className="font-display text-5xl font-bold md:text-6xl">{p.title}</h2>
        <p className="text-suave">{p.description}</p>
        <Tecs p={p} />
        <Links p={p} />
      </div>
    </article>
  );
}

export function ProjectRow({ p }: { p: Project }) {
  return (
    <article className="group grid gap-6 border-t border-linha py-8 md:grid-cols-12 md:items-center">
      <Capa p={p} className="aspect-[16/10] md:col-span-3" />
      <h3 className="font-display text-3xl font-bold md:col-span-3">{p.title}</h3>
      <div className="flex flex-col gap-3 md:col-span-4">
        <p className="text-suave">{p.description}</p>
        <Tecs p={p} />
      </div>
      <div className="md:col-span-2 md:justify-self-end"><Links p={p} /></div>
    </article>
  );
}
