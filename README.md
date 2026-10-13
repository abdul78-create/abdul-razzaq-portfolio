# Abdul Razzaq — Personal Portfolio

A clean, professional, and performant portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS Custom Properties |
| Animations | Framer Motion |
| 3D Graphics | React Three Fiber + drei |
| Icons | Lucide React |
| Font | Inter (Google Fonts) |
| Deployment | Render (Node.js Web Service) |

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Main page (assembles all sections)
│   └── globals.css        # Design system + CSS tokens
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Responsive nav with active section tracking
│   │   └── Footer.tsx     # Footer with social links
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx   # With case study modal
│   │   ├── SkillsSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── TrainingSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       └── HeroCanvas.tsx # React Three Fiber 3D scene
└── data/
    └── portfolio.ts       # ALL portfolio content (update here)
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🏗️ Production Build

```bash
npm run build
npm run start
```

## ✅ Adding Your Resume

1. Place your PDF in `/public/Abdul_Razzaq_Resume.pdf`
2. In `src/data/portfolio.ts`, set:
   ```ts
   resume: "/Abdul_Razzaq_Resume.pdf",
   ```

## 🔗 Adding Project Links

In `src/data/portfolio.ts`, locate the project by `id` and update `github` and/or `demo`:

```ts
{
  id: "opspilot",
  github: "https://github.com/your-actual-repo-link",
  demo: "https://your-live-demo.vercel.app",
  ...
}
```

When `github` or `demo` is `null`, those buttons are hidden automatically.

## ☁️ Deploying to Render

### Service type: **Web Service** (Node.js runtime)

Use `render.yaml` (already included) or configure manually:

| Setting | Value |
|---|---|
| **Repository** | Your GitHub repo (must be connected to Render) |
| **Branch** | `main` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm run start` |
| **Node Version** | 20 (recommended) |
| **Plan** | Free or Starter |

### Steps

1. Push this repository to GitHub (make sure it's public or connected).
2. Go to [https://dashboard.render.com](https://dashboard.render.com) → **New → Web Service**.
3. Connect your GitHub account and select this repository.
4. Render auto-detects `render.yaml` — review and confirm settings.
5. Click **Deploy**.
6. Once deployed, your live URL will be shown in the Render dashboard.

> ⚠️ Deployment is not verified here. Complete it manually following these steps.

## 🔐 Security

- No API keys or secrets are committed.
- See `.env.example` for environment variable templates.
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.) are configured in `next.config.ts`.

## 📝 Updating Content

All portfolio content (bio, projects, skills, certifications, education, etc.) is in a single file:

```
src/data/portfolio.ts
```

Edit this file to update any section without touching component code.

## 🧪 Checks

| Check | Status |
|---|---|
| TypeScript compilation | Run `npx tsc --noEmit` |
| ESLint | Run `npm run lint` |
| Production build | Run `npm run build` |
| Browser testing | Run dev server and inspect |
