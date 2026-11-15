import { useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

// Envolve cada página: define o título da aba e a animação de entrada/saída.
export default function Page({ title, children }: { title?: string; children: ReactNode }) {
  useEffect(() => {
    document.title = title ? `${title} | Isaac Assis` : "Isaac Assis | Engenharia da Computação";
  }, [title]);
  return (
    <motion.main
      id="conteudo"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto min-h-[calc(100vh-9rem)] max-w-7xl px-6 pb-24 pt-10 md:pt-16"
    >
      {children}
    </motion.main>
  );
}
