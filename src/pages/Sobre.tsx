import Page from "../components/Page";
import { personal } from "../data/personal";
import { experience } from "../data/experience";

export default function Sobre() {
  return (
    <Page title="Sobre mim">
      <div className="grid gap-12 md:grid-cols-12">
        <figure className="md:col-span-4 md:sticky md:top-28 md:self-start">
          <img src={personal.fotoSobre} alt="Retrato de Isaac Assis sorrindo" className="aspect-[4/5] w-full object-cover object-[50%_35%]" />
          <figcaption className="mt-3 text-sm text-suave">{personal.localizacao}</figcaption>
        </figure>
        <div className="md:col-span-7 md:col-start-6">
          <h1 className="mb-10 font-display text-5xl font-bold leading-none md:text-7xl">Sobre mim</h1>
          <div className="max-w-[62ch] space-y-5 text-lg text-suave">
            {personal.biografia.map((t) => <p key={t}>{t}</p>)}
          </div>

          <h2 className="mb-2 mt-16 font-display text-2xl font-bold">Objetivos profissionais</h2>
          <ul className="max-w-[62ch]">
            {personal.objetivos.map((o) => <li key={o} className="border-t border-linha py-3 text-suave">{o}</li>)}
          </ul>

          <h2 className="mb-2 mt-16 font-display text-2xl font-bold">Iniciativas</h2>
          <ul className="max-w-[62ch]">
            {experience.map((e) => (
              <li key={e.titulo} className="border-t border-linha py-4">
                <p className="font-medium">{e.titulo} <span className="ml-2 text-sm text-suave">{e.tipo}</span></p>
                <p className="text-suave">{e.descricao}</p>
              </li>
            ))}
          </ul>

          <h2 className="mb-4 mt-16 font-display text-2xl font-bold">Aberto a</h2>
          <ul className="flex flex-wrap gap-3">
            {personal.abertoA.map((a) => <li key={a} className="border border-linha px-4 py-2 text-sm text-suave">{a}</li>)}
          </ul>
        </div>
      </div>
    </Page>
  );
}
