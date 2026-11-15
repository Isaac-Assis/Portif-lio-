import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre mim" },
  { to: "/projetos", label: "Projetos" },
  { to: "/tecnologias", label: "Tecnologias" },
  { to: "/formacao", label: "Formação" },
  { to: "/contato", label: "Contato" }
];

export default function Menu() {
  const [aberto, setAberto] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setAberto(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
  }, [aberto]);

  return (
    <header className="sticky top-0 z-50 border-b border-linha bg-fundo/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-lg font-bold tracking-[0.12em]">
          Isaac de Assis Nazaré
        </Link>
        <nav aria-label="Principal" className="hidden gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end className={({ isActive }) => `relative py-5 text-[0.95rem] transition-colors duration-300 ${isActive ? "text-tinta" : "text-suave hover:text-tinta"}`}>
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && <motion.span layoutId="menu-ativo" className="absolute inset-x-0 -bottom-px h-[3px] bg-marinho" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <button className="p-2 md:hidden" aria-label={aberto ? "Fechar menu" : "Abrir menu"} aria-expanded={aberto} onClick={() => setAberto(!aberto)}>
          {aberto ? <X /> : <MenuIcon />}
        </button>
      </div>
      <AnimatePresence>
        {aberto && (
          <motion.nav aria-label="Menu móvel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-x-0 bottom-0 top-16 bg-fundo px-6 pt-8 md:hidden">
            {links.map((l, i) => (
              <motion.div key={l.to} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                <NavLink to={l.to} end className={({ isActive }) => `block border-b border-linha py-4 font-display text-3xl ${isActive ? "text-tinta" : "text-suave"}`}>
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
