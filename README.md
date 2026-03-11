# 🌐 Portfolio Redesign — Aisha Aliyu

> A modern, fully responsive personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, Material UI, and Styled Components. Optimised for performance, Core Web Vitals, and SSR/SSG.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge)](https://portfolio-redesign-eta.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![MUI](https://img.shields.io/badge/Material%20UI-5.x-007FFF?style=for-the-badge&logo=mui)](https://mui.com/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)](https://portfolio-redesign-eta.vercel.app/)

-----

## 🌐 Live Demo

👉 **[portfolio-redesign-eta.vercel.app](https://portfolio-redesign-eta.vercel.app/)**

-----

## 📖 About

A clean, production-grade personal portfolio that demonstrates advanced frontend engineering — combining multiple styling systems (Tailwind CSS, Material UI, and Styled Components) in a single cohesive Next.js 14 App Router project.

Built with full TypeScript type safety, SSR/SSG rendering strategies, and a strong focus on performance, smooth animations, and developer experience.

-----

## ✨ Features

- 🎨 **Multi-library Styling** — Tailwind CSS for utility-first layouts, MUI for component system, Styled Components for dynamic theming — all integrated seamlessly
- ⚡ **Performance Optimised** — SSR/SSG via Next.js App Router, image optimisation, code splitting, and lazy loading for strong Core Web Vitals scores
- 📱 **Fully Responsive** — Fluid layouts across mobile, tablet, and desktop breakpoints
- 🔤 **Custom Typography** — Carefully chosen font pairing with `next/font` for zero layout shift
- 🎞️ **Smooth Animations** — Subtle entrance and scroll animations for a polished feel
- 🔒 **Type-Safe** — 100% TypeScript with strict mode enabled
- 🗂️ **Sections** — Hero, Projects, Skills, About, Contact
- 🚀 **Fast Deployment** — Auto-deployed on Vercel from GitHub

-----

## 🛠️ Tech Stack

|Layer     |Technology                                    |
|----------|----------------------------------------------|
|Framework |Next.js 14 (App Router)                       |
|Language  |TypeScript                                    |
|Styling   |Tailwind CSS + Material UI + Styled Components|
|Fonts     |next/font (Google Fonts)                      |
|Deployment|Vercel                                        |

-----

## 📂 Project Structure

```
src/
├─ app/
│  ├─ layout.tsx        # Root layout, fonts, metadata
│  ├─ page.tsx          # Home page (all sections)
│  └─ globals.css       # Global styles & CSS variables
├─ components/
│  ├─ Hero/             # Hero section
│  ├─ Projects/         # Projects grid
│  ├─ Skills/           # Skills section
│  ├─ About/            # About section
│  ├─ Contact/          # Contact form
│  └─ shared/           # Navbar, Footer, common components
public/                 # Static assets & images
```

-----

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Aisha-Aliyu/portfolio-redesign.git
cd portfolio-redesign
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Open <http://localhost:3000> in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

-----

## 🚀 Deployment

Deployed on **Vercel** with automatic deployments from the `main` branch:

1. Push your code to GitHub
1. Import the repo at [vercel.com/new](https://vercel.com/new)
1. Deploy ✅ — zero configuration needed for Next.js

-----

## 🗺️ Roadmap

- [ ] Dark mode toggle
- [ ] Blog section with MDX posts
- [ ] Framer Motion page transitions
- [ ] Contact form with email sending (Resend / EmailJS)
- [ ] i18n support (English / French)

-----

## 👩‍💻 Author

**Aisha Aliyu** — Full-Stack & Frontend Engineer

- 🌐 Portfolio: [humairah.netlify.app](https://humairah.netlify.app)
- 💼 LinkedIn: [https://www.linkedin.com/in/aisha-aliyu-dev](https://www.linkedin.com/in/aisha-aliyu-dev)
- 🐙 GitHub: [@Aisha-Aliyu](https://github.com/Aisha-Aliyu)

-----

## 📜 License

This project is open source and available under the [MIT License](./LICENSE).