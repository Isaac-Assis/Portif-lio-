import { motion } from "framer-motion";
import Page from "../components/Page";
import TechIcon from "../components/TechIcon";
import { skillGroups } from "../data/skills";

export default function Tecnologias() {
  return (
    <Page title="Tecnologias">
      <h1 className="mb-12 font-display text-5xl font-bold leading-none md:text-7xl">Tecnologias</h1>
      <div className="space-y-16">
        {skillGroups.filter((g) => g.itens.length > 0).map((g) => (
          <section key={g.titulo} className="grid gap-6 border-t border-linha pt-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="font-display text-2xl font-bold">{g.titulo}</h2>
              <p className="mt-2 text-suave">{g.descricao}</p>
            </div>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:col-span-8 lg:grid-cols-4">
              {g.itens.map((s) => (
                <motion.li
                  key={s.name}
                  tabIndex={0}
                  whileHover={{ scale: 1.06, rotate: -2 }}
                  whileFocus={{ scale: 1.06, rotate: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="group flex aspect-square cursor-default flex-col items-center justify-center gap-3 border border-linha bg-pagina text-suave transition-colors duration-300 hover:border-marinho hover:bg-superficie hover:text-tinta focus-visible:border-marinho"
                >
                  {s.icon ? <TechIcon name={s.icon} /> : <span className="px-2 text-center font-display text-2xl font-bold">{s.name}</span>}
                  <span className={`${s.icon ? "" : "hidden "}translate-y-1 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100`}>
                    {s.name}
                  </span>
                </motion.li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Page>
  );
}
