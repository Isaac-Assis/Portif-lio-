/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { fundo: "#080B10", pagina: "#10151E", superficie: "#192638", marinho: "#24476B", tinta: "#F5F7FA", suave: "#AAB6C8", linha: "#263B5A" },
      fontFamily: { display: ['"Bricolage Grotesque"', "Segoe UI", "system-ui", "sans-serif"], texto: ["Figtree", "Segoe UI", "system-ui", "sans-serif"] }
    }
  },
  plugins: []
};
