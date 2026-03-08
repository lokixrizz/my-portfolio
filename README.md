# LOGESHBALAN P — Developer Portfolio

A modern, responsive AI/ML developer portfolio built with **React + Vite + Tailwind CSS**.

**Design:** Terminal-noir aesthetic — dark slate background, electric cyan accents, JetBrains Mono + Syne + DM Sans typography.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Fixed navigation with active section detection
│   │   ├── Hero.jsx           # Typewriter intro, CTA, social links
│   │   ├── About.jsx          # Bio, contact info, stats cards
│   │   ├── Skills.jsx         # Animated skill bars, tools, terminal snippet
│   │   ├── Projects.jsx       # Project cards with tech stack
│   │   ├── Education.jsx      # Timeline-style education section
│   │   ├── Certifications.jsx # Cert cards + language proficiency bars
│   │   ├── Contact.jsx        # Contact form + info
│   │   └── Footer.jsx         # Social links + navigation
│   ├── App.jsx                # Root component
│   ├── data.js                # All portfolio content (edit this!)
│   ├── hooks.js               # useScrollReveal + useTypewriter
│   ├── index.css              # Global styles + Tailwind directives
│   └── main.jsx               # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🚀 Local Development

### Prerequisites
- Node.js ≥ 18
- npm or yarn

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

---

## ✏️ How to Customize

All your portfolio data is in **`src/data.js`**. Edit this file to update:

- Personal info, email, phone, location
- GitHub and LinkedIn URLs
- Education entries
- Skills and proficiency levels
- Projects (add more!)
- Certifications
- Languages

### Adding a New Project

In `src/data.js`, add to the `projects` array:

```js
{
  title: 'Your Project Title',
  description: 'Short description of what it does.',
  bullets: [
    'Feature 1',
    'Feature 2',
  ],
  tech: ['Python', 'TensorFlow'],
  category: 'AI / ML',
  color: 'cyan',
  github: 'https://github.com/yourusername/project',
  demo: 'https://your-demo-link.com',
}
```

### Adding a Resume Download

1. Place your PDF as `public/LOGESHBALAN_Resume.pdf`
2. The "Download CV" button in Hero will auto-link to it.

---

## 🏗️ Build for Production

```bash
npm run build
# Output: dist/ folder
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment

### Option A — Vercel (Recommended, Free)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to your Vercel account
# - Select project name
# - Framework: Vite (auto-detected)
# Done! You'll get a live URL instantly.
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deploys on every push.

### Option B — GitHub Pages

1. Install the deploy package:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Add to `vite.config.js`:
```js
base: '/your-repo-name/',
```

4. Deploy:
```bash
npm run deploy
```

5. Go to GitHub Repo → Settings → Pages → Source: `gh-pages` branch

Your site will be live at: `https://yourusername.github.io/your-repo-name`

### Option C — Netlify

1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)
3. Done! Instant live URL.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 4 | Build tool + dev server |
| Tailwind CSS 3 | Utility-first styling |
| Lucide React | Icon library |
| JetBrains Mono | Monospace font |
| Syne | Display/heading font |
| DM Sans | Body text font |

---

## 📋 Features

- ✅ Typewriter hero animation
- ✅ Scroll-reveal animations (IntersectionObserver)
- ✅ Animated skill progress bars
- ✅ Sticky navbar with active section detection
- ✅ Project cards with tech stack chips
- ✅ Timeline-style education section
- ✅ Certification cards
- ✅ Language proficiency bars
- ✅ Contact form with loading state
- ✅ Terminal-style UI elements
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark theme throughout
- ✅ Smooth scrolling
- ✅ Footer with social links

---

## 📝 License

MIT — free to use and modify for personal portfolios.
