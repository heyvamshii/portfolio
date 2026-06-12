# Portfolio

A polished, content-driven portfolio site built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Works in every modern browser (Chrome, Firefox, Safari, Edge).

## Quick start

```powershell
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000 in any browser.

## How to customize

All personal content lives in one file: [`lib/data.ts`](lib/data.ts).

Edit it to fill in:

- `profile`: name, title, tagline, email, social links, resume URL
- `about`: bio paragraphs
- `skills`: categorized skill groups
- `projects`: project entries with GitHub and/or live-site links
- `education`: schools and degrees
- `achievements`: leadership and extracurricular highlights

To swap the resume PDF, replace `public/VamshiKrishna-resume.pdf` (and update `resumeUrl` in `lib/data.ts` if the filename changes).

## Sections

1. **Hero**: name, headline, CTA buttons, social icons
2. **About**: bio paragraphs
3. **Skills**: grouped skill pills
4. **Projects**: horizontal cards with GitHub / live-site links
5. **Education**: academic background
6. **Achievements**: leadership and extracurricular highlights
7. **Contact**: LinkedIn card

## Production build

```powershell
npm run build
npm start
```

## Deploy

Easiest options (all free for personal sites):

- **Vercel**: `vercel` CLI or connect the GitHub repo at vercel.com
- **Netlify**: connect the repo, build command `npm run build`, publish dir `.next`
- **Cloudflare Pages**: same as Netlify

## Tech

- Next.js 14 App Router, React 18, TypeScript
- Tailwind CSS with a custom dark palette
- Inter and JetBrains Mono via Google Fonts

## Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── lib/
│   └── data.ts
├── public/
│   └── resume.pdf
├── tailwind.config.ts
└── package.json
```
