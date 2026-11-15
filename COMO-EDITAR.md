# Como editar o seu portfólio

Você não precisa saber programar. Quase tudo se edita em **um só lugar**: a pasta `src/data/`. Cada arquivo dali alimenta uma página do site.

| Arquivo | O que controla |
|---|---|
| `src/data/personal.ts` | Nome, frase, biografia, objetivos, fotos |
| `src/data/projects.ts` | Página **Projetos** |
| `src/data/skills.ts` | Página **Tecnologias** |
| `src/data/education.ts` | Página **Formação** (linha do tempo) |
| `src/data/experience.ts` | Iniciativas na página **Sobre mim** |
| `src/data/contact.ts` | Página **Contato** e links do Início |

**Regra de ouro:** mexa só no texto entre aspas `"..."`. Mantenha as vírgulas no fim das linhas e as chaves `{ }` de cada item.

Para ver o resultado antes de publicar: `npm install` (só na primeira vez) e depois `npm run dev`. O endereço aparece no terminal (normalmente http://localhost:5173).

---

## 1. Adicionar um projeto
Abra `src/data/projects.ts`. Copie um bloco inteiro (de `{` até `},`) e cole no fim da lista, antes do `];`:

```ts
  {
    title: "Nome do projeto",
    description: "Descrição curta do que o projeto faz.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://exemplo.com",
    code: "https://github.com/Isaac-Assis/repositorio",
    image: "/images/projeto.jpg"
  },
```
`link`, `code` e `image` são opcionais: se não tiver, apague a linha. Ele aparece sozinho na página Projetos.

## 2. Editar um projeto
No mesmo arquivo, ache o projeto pelo `title` e troque o texto que quiser.

## 3. Remover um projeto
Apague o bloco inteiro, de `{` até `},`.

## 4. Adicionar uma tecnologia
Abra `src/data/skills.ts` e escolha o grupo (ex.: "Uso nos meus projetos"). Dentro de `itens`, acrescente:
```ts
{ name: "React", icon: "javascript" },
```
Ícones prontos: `html5`, `css3`, `javascript`, `python`, `github`, `vercel`. Sem `icon`, o nome aparece escrito no quadrado. Para mudar o nível, mova o item para outro grupo. O grupo "Maior domínio" fica oculto enquanto estiver vazio. Só coloque o que for verdade.

Para um ícone oficial novo, abra `src/components/TechIcon.tsx`, importe o ícone de `simple-icons` (ex.: `siReact`) e acrescente ao mapa `brandIcons`.

## 5. Alterar a biografia
`src/data/personal.ts`, lista `biografia`: cada texto entre aspas é um parágrafo. Aqui também ficam `frase`, `cargo`, `objetivos` e `abertoA`.

## 6. Adicionar cursos
`src/data/education.ts`, novo bloco no fim da lista:
```ts
  {
    titulo: "Nome do curso",
    instituicao: "Onde fez",
    descricao: "Em uma frase, o que aprendeu.",
    periodo: "2026"
  },
```
`periodo` e `descricao` são opcionais. Não invente datas.

## 7. Atualizar a formação
No mesmo arquivo, edite o bloco da UFRB (por exemplo, trocar `periodo`). Ao concluir algo, altere o texto.

## 8. Adicionar experiências
`src/data/experience.ts`:
```ts
  { titulo: "Nome", tipo: "Projeto pessoal", descricao: "O que você fez." },
```

## 9. Trocar a fotografia
Copie a nova foto para `public/images/` e, em `src/data/personal.ts`, mude `fotoInicio`, `fotoSobre` ou `fotoFormacao` para o novo nome (ex.: `"/images/nova-foto.jpg"`). Prefira fotos verticais com cerca de 1000 px de largura.

## 10. Atualizar contatos
`src/data/contact.ts`. Para o WhatsApp, o link usa só números com DDI: `https://wa.me/557598314734`.

## 11. Adicionar imagens
Coloque o arquivo em `public/images/` (ex.: `public/images/nexaweb.jpg`) e use no código como `"/images/nexaweb.jpg"`. Prefira JPG ou WebP com até 1000 px de largura, para o site carregar rápido.

## 12. Publicar na Vercel
1. Envie o projeto ao GitHub (pode ser pelo site: *Add file > Upload files*, ou com `git add . && git commit -m "atualização" && git push`).
2. Na Vercel, clique em **Add New > Project** e escolha o repositório. Ela reconhece o Vite sozinha (comando `npm run build`, pasta `dist`).
3. Depois disso, **todo envio ao GitHub publica o site automaticamente**.

O arquivo `vercel.json` já está configurado para que `/sobre`, `/projetos` etc. funcionem ao recarregar a página.

---

**Algo quebrou?** Quase sempre é uma aspa ou vírgula faltando. Compare com os outros blocos do mesmo arquivo.
