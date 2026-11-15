import Page from "../components/Page";
import { education } from "../data/education";
import { personal } from "../data/personal";

export default function Formacao() {
  return (
    <Page title="Formação">
      <h1 className="mb-12 font-display text-5xl font-bold leading-none md:text-7xl">Formação</h1>
      <div className="grid gap-12 md:grid-cols-12">
        <ol className="border-l border-linha pl-8 md:col-span-7">
          {education.map((e) => (
            <li key={e.titulo} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[2.45rem] top-2 h-3 w-3 border border-marinho bg-marinho" aria-hidden="true" />
              {e.periodo && <p className="text-sm text-suave">{e.periodo}</p>}
              <h2 className="font-display text-2xl font-bold">{e.titulo}</h2>
              <p className="text-tinta">{e.instituicao}</p>
              {e.descricao && <p className="mt-1 max-w-[56ch] text-suave">{e.descricao}</p>}
            </li>
          ))}
        </ol>
        <figure className="md:col-span-4 md:col-start-9">
          <img src={personal.fotoFormacao} alt="Isaac Assis no DevOpsDays" loading="lazy" className="aspect-[4/5] w-full object-cover object-[50%_30%]" />
          <figcaption className="mt-3 text-sm text-suave">No DevOpsDays</figcaption>
        </figure>
      </div>
    </Page>
  );
}
