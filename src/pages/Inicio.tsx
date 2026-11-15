import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Page from "../components/Page";
import { brandIcons } from "../components/TechIcon";
import { personal } from "../data/personal";
import { contact } from "../data/contact";

export default function Inicio() {
  return (
    <Page>
      <div className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="mb-6 text-suave">{personal.cargo}</p>
          <h1 className="font-display text-[clamp(4.2rem,14vw,12rem)] font-bold leading-[0.84] tracking-tight">
            Isaac<br />Assis
          </h1>
        </div>
        <figure className="relative md:col-span-4">
          <div className="absolute -bottom-3 -left-3 h-full w-full border border-marinho" aria-hidden="true" />
          <img src={personal.fotoInicio} alt="Isaac Assis segurando o crachá de participante do DevOpsDays" className="relative aspect-[4/5] w-full object-cover object-[50%_25%]" fetchPriority="high" />
        </figure>
      </div>

      <div className="mt-14 grid gap-8 border-t border-linha pt-8 md:grid-cols-12">
        <p className="font-display text-2xl leading-snug md:col-span-5 md:text-3xl">{personal.frase}</p>
        <p className="text-suave md:col-span-4">{personal.resumoFormacao}</p>
        <div className="flex flex-col items-start gap-4 md:col-span-3">
          <Link to="/projetos" className="btn btn-main">Conhecer projetos <ArrowRight size={18} /></Link>
          <Link to="/contato" className="btn">Entrar em contato <ArrowRight size={18} /></Link>
        </div>
      </div>

      <div className="mt-10 flex gap-6 text-sm text-suave">
        {[["GitHub", contact.github, "github"], ["LinkedIn", contact.linkedin, "linkedin"]].map(([nome, href, ic]) => (
          <a key={nome} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-tinta">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d={brandIcons[ic].path} /></svg>
            {nome}
          </a>
        ))}
      </div>
    </Page>
  );
}
