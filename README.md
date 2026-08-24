# Tejashwini Godyal — Portfolio

A professional, responsive developer portfolio built as a React single-page application with route-based pages.

## Tech stack

- React + Vite (JavaScript)
- Tailwind CSS v4
- React Router DOM
- TanStack Query

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Structure

Shared UI lives in `src/components`, route views in `src/pages`, and the shared shell in `src/layouts`. Content lives in `src/data`; project retrieval is separated into `src/services/projectService.js` and `src/hooks/useProjects.js`.

## TanStack Query

Projects are read through `useProjects`, with a dedicated query key, loading state, and error state. The local source is intentionally asynchronous, so `getProjects` can later be replaced with a real API request without changing page components.

## Resume

Add your actual PDF as `public/resume.pdf`, then link the resume control in `src/pages/Home.jsx` to `/resume.pdf`.

## Netlify

Connect this repository in Netlify and use `npm run build` as the build command with `dist` as the publish directory. The included `_redirects` file enables direct route visits.
