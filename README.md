# Learning Next.js

A hands-on learning repository containing a progressive series of Next.js projects built while studying modern full-stack web development. Each project focuses on a specific real-world domain and incrementally introduces new concepts, libraries, and architectural patterns.

---

## Repository Structure

```
03_learning_nextjs/
└── xx-projects/
    ├── 00-todo-assistant/          # Fullstack todo app with Python backend
    ├── 01-ecommerce/               # E-commerce storefront UI
    ├── 02-cloudinary-photos-app/   # Media management app with Cloudinary
    ├── 03-aiou-fullstack-assistant/# AI-powered fullstack assistant (AIOU)
    ├── 04-neonlaw/                 # Law firm website (v1)
    ├── 05-pos/                     # Point of Sale system
    └── 06-neon-law/                # Law firm website (v2, enhanced)
```

---

## Projects

### 00 — Todo Assistant

A fullstack task management application with a decoupled frontend and backend.

| Layer    | Stack                                                                   |
|----------|-------------------------------------------------------------------------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS, Axios, React Slick               |
| Backend  | Python 3.12, FastAPI, Uvicorn, SQLModel, SQLAlchemy, PostgreSQL, Pytest |

**Key concepts practiced:** REST API integration, server-side rendering, PostgreSQL with ORM, database migrations, API testing with pytest.

---

### 01 — E-Commerce Storefront

A responsive e-commerce UI with a focus on component architecture and design systems.

| Layer    | Stack                                                                             |
|----------|-----------------------------------------------------------------------------------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS, Radix UI, shadcn/ui, Lucide React, Swiper  |

**Key concepts practiced:** Component-driven development, Tailwind utility classes, UI library integration (Radix + shadcn), responsive product layouts, image carousels.

---

### 02 — Cloudinary Photos App

A photo management application that leverages Cloudinary for cloud-based media storage and transformation.

| Layer    | Stack                                                                                  |
|----------|----------------------------------------------------------------------------------------|
| Frontend | Next.js 15, TypeScript, Tailwind CSS, Radix UI, shadcn/ui, Cloudinary, next-cloudinary |

**Key concepts practiced:** Cloudinary SDK integration, image upload and transformation, environment variable management, cloud storage workflows.

---

### 03 — AIOU Fullstack Assistant

A fullstack AI-powered assistant application tailored for Allama Iqbal Open University (AIOU) workflows.

| Layer    | Stack                                                                                     |
|----------|-------------------------------------------------------------------------------------------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS, shadcn/ui                                           |
| Backend  | Python 3.11, FastAPI, Uvicorn, OpenAI API, SQLModel, PostgreSQL, psycopg2, pdfkit, httpx  |

**Key concepts practiced:** OpenAI API integration, fullstack architecture with a separate Python service, PDF generation, web scraping (BeautifulSoup), scheduled tasks.

---

### 04 — NeonLaw (v1)

First iteration of a modern law firm landing site, built with a comprehensive component library.

| Layer    | Stack                                                                                                     |
|----------|-----------------------------------------------------------------------------------------------------------|
| Frontend | Next.js 15, TypeScript, Tailwind CSS v4, shadcn/ui (full Radix UI suite), Framer Motion, Recharts, Zod   |

**Key concepts practiced:** App Router, data visualization with Recharts, form validation with Zod + React Hook Form, animation with Framer Motion, dark mode with next-themes.

---

### 05 — Point of Sale (POS)

A point-of-sale dashboard system with rich data visualization and a Material UI design.

| Layer    | Stack                                                                                 |
|----------|---------------------------------------------------------------------------------------|
| Frontend | Next.js 15, TypeScript, Tailwind CSS v4, Material UI (MUI v7), Framer Motion, Recharts, UUID |

**Key concepts practiced:** MUI component system alongside Tailwind, Recharts dashboards, Turbopack dev server, animated UI interactions with Framer Motion, unique ID generation.

---

### 06 — NeonLaw (v2)

An enhanced and extended version of the NeonLaw site with additional features, improved architecture, and GraphQL data fetching.

| Layer    | Stack                                                                                                                     |
|----------|---------------------------------------------------------------------------------------------------------------------------|
| Frontend | Next.js 15, TypeScript, Tailwind CSS v4, full shadcn/ui suite, Framer Motion, Recharts, SWR, GraphQL, graphql-request, Zod |

**Key concepts practiced:** GraphQL integration with `graphql-request`, SWR for data fetching and caching, advanced Radix UI patterns, intersection observer animations, Pages Router vs App Router comparison.

---

## Core Technology Stack

All projects are built on a shared modern web development foundation:

| Category        | Technologies                                                              |
|-----------------|---------------------------------------------------------------------------|
| Framework       | [Next.js](https://nextjs.org/) (v14 & v15)                               |
| Language        | [TypeScript](https://www.typescriptlang.org/)                             |
| Styling         | [Tailwind CSS](https://tailwindcss.com/) (v3 & v4)                       |
| UI Components   | [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), [MUI](https://mui.com/) |
| Animation       | [Framer Motion](https://www.framer.com/motion/)                           |
| Data Viz        | [Recharts](https://recharts.org/)                                         |
| Forms           | [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/) |
| Backend         | [FastAPI](https://fastapi.tiangolo.com/), [Python](https://www.python.org/) |
| Database        | [PostgreSQL](https://www.postgresql.org/), [SQLModel](https://sqlmodel.tiangolo.com/) |
| Media           | [Cloudinary](https://cloudinary.com/)                                     |
| AI              | [OpenAI API](https://openai.com/)                                         |

---

## Getting Started

Each project is self-contained. To run any project locally, navigate into its directory and install dependencies.

### Frontend (Next.js)

```bash
# Navigate to the project frontend directory
cd xx-projects/<project-name>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Backend (Python — for fullstack projects)

```bash
# Navigate to the backend directory
cd xx-projects/<project-name>/backend_python   # or python_backend

# Install dependencies with Poetry
poetry install

# Start the FastAPI server
poetry run uvicorn main:app --reload
```

The API will be available at [http://localhost:8000](http://localhost:8000).

---

## Learning Progression

The projects are numbered to reflect a deliberate learning progression:

1. **Foundational setup** — Project scaffolding, routing, and API integration (00)
2. **UI depth** — Component systems, design tokens, and layouts (01, 02)
3. **Fullstack patterns** — Decoupled backends, AI integration, database design (03)
4. **Production patterns** — Animations, forms, validation, data visualization (04, 05, 06)

---

## Author

**Haris Javed** — [@Harry5174](https://github.com/Harry5174)
