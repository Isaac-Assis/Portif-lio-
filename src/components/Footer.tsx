import { personal } from "../data/personal";

export default function Footer() {
  return (
    <footer className="border-t border-linha">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-6 py-8 text-sm text-suave">
        <span>{personal.nome}</span>
        <span>{personal.localizacao}</span>
      </div>
    </footer>
  );
}
