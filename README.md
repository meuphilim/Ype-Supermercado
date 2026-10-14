# Ype Supermercado — Landing Page

Site institucional do Ype Supermercado: hero carrossel, ofertas, seção de fidelidade, lojas, departamentos e marcas.

## Stack

- **Next.js 14** (App Router) + **React 18**
- **TypeScript** + **Tailwind CSS 3**
- **Docker** (imagem multi-stage com output standalone)

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Docker

```bash
docker compose up --build
```

A aplicação fica disponível na porta `80` (mapeada para `3000` no container).

## Estrutura

```
src/
  app/          # App Router (layout, página, estilos globais)
  components/   # Componentes da landing page
public/         # Logos e assets estáticos
```
