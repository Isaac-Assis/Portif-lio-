import { useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail, MdContentCopy, MdCheck } from "react-icons/md";
import "../styles/Contato.css";

type ChaveCopia = "whats" | "email";

const EMAIL = "isaacassis012@gmail.com";
const WHATSAPP_NUMERO = "+55 75 98314-5734";
const WHATSAPP_LINK = "https://wa.me/557598314734";
const LINKEDIN_LINK = "https://www.linkedin.com/in/isaac-assis"; // confira a URL do seu perfil
const GITHUB_LINK = "https://github.com/Isaac-Assis";

export default function Contato() {
  const [copiado, setCopiado] = useState<ChaveCopia | null>(null);
  const temporizador = useRef<ReturnType<typeof setTimeout> | null>(null);

  // limpa o temporizador se o componente sair da tela
  useEffect(() => {
    return () => {
      if (temporizador.current) clearTimeout(temporizador.current);
    };
  }, []);

  async function copiar(texto: string, chave: ChaveCopia): Promise<void> {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(chave);
      if (temporizador.current) clearTimeout(temporizador.current);
      temporizador.current = setTimeout(() => setCopiado(null), 1800);
    } catch (erro) {
      console.error("Não foi possível copiar:", erro);
    }
  }

  return (
    <section className="contato">
      <h1 className="contato__titulo">Vamos conversar?</h1>
      <p className="contato__texto">
        Recrutadores, empresas, clientes e colegas de profissão: será um prazer
        conversar sobre oportunidades, projetos e colaborações.
      </p>

      <div className="contato__whats">
        <a
          className="contato__whats-link"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={22} aria-hidden="true" />
          Chamar no WhatsApp
        </a>
        <button
          type="button"
          className="contato__whats-copiar"
          onClick={() => copiar(WHATSAPP_NUMERO, "whats")}
          aria-label="Copiar número do WhatsApp"
        >
          {copiado === "whats" ? <MdCheck size={20} /> : <MdContentCopy size={20} />}
        </button>
      </div>

      <div className="contato__redes">
        <div className="contato__email">
          <a className="contato__pilula" href={`mailto:${EMAIL}`}>
            <span className="contato__icone contato__icone--email">
              <MdEmail size={22} aria-hidden="true" />
            </span>
            E-mail
          </a>
          <button
            type="button"
            className="contato__copiar"
            onClick={() => copiar(EMAIL, "email")}
            aria-label="Copiar e-mail"
          >
            {copiado === "email" ? <MdCheck size={20} /> : <MdContentCopy size={20} />}
          </button>
        </div>

        <a
          className="contato__pilula"
          href={LINKEDIN_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contato__icone contato__icone--linkedin">
            <FaLinkedinIn size={20} aria-hidden="true" />
          </span>
          LinkedIn
        </a>

        <a
          className="contato__pilula"
          href={GITHUB_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contato__icone contato__icone--github">
            <FaGithub size={22} aria-hidden="true" />
          </span>
          GitHub
        </a>
      </div>

      <p className="contato__aviso" role="status" aria-live="polite">
        {copiado ? "Copiado!" : ""}
      </p>
    </section>
  );
}
