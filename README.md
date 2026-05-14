# Vale Log — Demo institucional (site)

Proposta visual demonstrativa para a **Vale Log** / Cooperativa de Transportes do Vale do Taquari, em **React**, **TypeScript**, **Vite** e **Tailwind CSS**.

## Estrutura do repositório

| Pasta / ficheiro | Função |
|------------------|--------|
| `src/` | Código da aplicação (páginas, componentes, estilos). |
| `src/pages/` | Páginas por rota. |
| `src/components/` | Componentes reutilizáveis. |
| `src/constants/` | Dados institucionais centralizados (contactos, textos de referência). |
| `public/` | Ficheiros estáticos na raiz do site. Imagens em `public/img/` → URL `/img/...` (evita conflito com `assets/` do Vite no Windows). |
| `docs/` | Documentação auxiliar (ex.: `metadata.json`). |
| `index.html` | Entrada HTML do Vite. |
| `vite.config.ts` | Configuração do Vite. |

## Requisitos

- [Node.js](https://nodejs.org/) (LTS recomendado, v20 ou superior).

## Instalação e execução

```bash
npm install
npm run dev
```

Por defeito o servidor de desenvolvimento usa a porta **3000** (ver `package.json`).

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento com hot reload. |
| `npm run build` | Gera a versão de produção em `dist/`. |
| `npm run preview` | Pré-visualiza o build de produção. |
| `npm run lint` | Verificação de tipos com TypeScript (`tsc --noEmit`). |
| `npm run clean` | Remove a pasta `dist/` (útil antes de um build limpo). |

## Variáveis de ambiente

O ficheiro `.env.example` documenta variáveis usadas no ecossistema original (ex.: chave Gemini no `vite.config`). **A demo do site em si não depende delas para funcionar.** Se não usar integrações que as exijam, pode ignorar.

## Publicação no GitHub

1. Crie um repositório vazio no GitHub.
2. Na pasta do projecto:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Vale Log demo"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
   git push -u origin main
   ```


   Atualização para disparar deploy na Vercel.

3. Confirme que **não** está a versionar `node_modules/` nem `dist/` (já estão no `.gitignore`).

## Licença

Conteúdo de demonstração; ajuste a licença conforme a política da sua organização ou da cooperativa.
