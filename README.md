# Portfolio Redesign

My personal portfolio, rebuilt with Next.js (App Router) and TypeScript. The interesting part is that it combines three styling approaches in one project: Tailwind CSS for layout, Material UI for components and Styled Components for theming.

Live demo: https://portfolio-redesign-eta.vercel.app

## What's in it

- Hero, Projects, Skills, About and Contact sections.
- Responsive layouts for phones, tablets and desktops.
- Fonts load through `next/font`, so the text doesn't jump around while the page loads.
- Subtle entrance and scroll animations.
- TypeScript in strict mode.
- Server rendering, static generation, image optimisation, code splitting and lazy loading to keep it fast.

## Run it locally

```bash
git clone https://github.com/Aisha-Aliyu/portfolio-redesign.git
cd portfolio-redesign
npm install
npm run dev
```

Then open http://localhost:3000. For a production build, run `npm run build` and then `npm start`.

## What I'd add next

A dark mode toggle, a blog with MDX posts, page transitions with Framer Motion, a contact form that actually sends email (Resend or EmailJS), and English and French versions.

## Contact

Aisha Aliyu, full stack and frontend engineer

- Portfolio: https://humairah.netlify.app
- LinkedIn: https://www.linkedin.com/in/aisha-aliyu-dev
- GitHub: https://github.com/Aisha-Aliyu

License: MIT
