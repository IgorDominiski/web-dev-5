Igor Dominiski - RM562055
Murillo Akira - RM561886
Murilo Canestri - RM564053

## Mini Catálogo de Filmes (React + Tailwind)

Aplicação React que consome a Ghibli API para exibir um catálogo de filmes com busca por título.

### Tecnologias
- React (Vite)
- Tailwind CSS
- Axios

### Como executar
1. Requisitos: Node 18+
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Rode em desenvolvimento:
   ```bash
   npm run dev
   ```

### Estrutura
- `src/components/` — Header, MovieCard, MovieList
- `src/services/` — moviesService (consumo de API)
- `src/App.jsx` — controle principal

### API utilizada
- Ghibli API — `https://ghibliapi.vercel.app/films`

### Funcionalidades
- Lista de filmes da API
- Busca por título (controlada)
- Renderização responsiva com grid (sm, md, lg)

