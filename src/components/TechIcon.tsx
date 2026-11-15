import { Sparkles } from "lucide-react";
import { siHtml5, siCss3, siJavascript, siPython, siGithub, siVercel, siLinkedin, siWhatsapp } from "simple-icons";

// Ícones oficiais (Simple Icons). Para novos, importe aqui e adicione ao mapa.
export const brandIcons: Record<string, { path: string; title: string }> = {
  html5: siHtml5, css3: siCss3, javascript: siJavascript, python: siPython,
  github: siGithub, vercel: siVercel, linkedin: siLinkedin, whatsapp: siWhatsapp
};

export default function TechIcon({ name, size = 40 }: { name?: string; size?: number }) {
  const icon = name ? brandIcons[name] : undefined;
  if (!icon) return <Sparkles size={size} strokeWidth={1.5} aria-hidden="true" />;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
