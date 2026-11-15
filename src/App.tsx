import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Tecnologias from "./pages/Tecnologias";
import Formacao from "./pages/Formacao";
import Contato from "./pages/Contato";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-marinho focus:px-4 focus:py-2">
        Ir para o conteúdo
      </a>
      <Menu />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/formacao" element={<Formacao />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
