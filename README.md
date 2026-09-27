# Sid Shakya — Personal Portfolio & Engineering Showcase

A modern, high-performance portfolio website built with **React 19**, **Vite**, and **Tailwind CSS v4**, showcasing full-stack systems, machine learning applications, and backend engineering projects.

## 🚀 Live Site
- **URL**: [https://sidd4150.github.io/SidPortfolio-/](https://sidd4150.github.io/SidPortfolio-/)

## 🛠 Tech Stack
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: GitHub Pages (`gh-pages`)

## 📂 Project Structure
```text
├── public/                 # Static assets & project preview screenshots
│   ├── OPTCG.png           # One Piece TCG Deck Builder preview
│   └── Rent_img.png        # SF Rent & ROI Predictor preview
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Glassmorphic header with navigation & status badge
│   │   ├── Hero.jsx        # Value proposition, copy-email action & tech stack
│   │   ├── About.jsx       # Engineering focus pillars & bio
│   │   ├── Skills.jsx      # Categorized technical skills & tools
│   │   ├── Projects.jsx    # Filterable project showcase with live links
│   │   ├── Contact.jsx     # Direct email copy & quick message drafter
│   │   ├── Footer.jsx      # Copyright & back-to-top navigation
│   │   └── GithubIcon.jsx  # Reusable GitHub SVG icon
│   ├── data/
│   │   └── portfolioData.js # Single source of truth for projects, skills & bio
│   ├── App.jsx             # Root layout
│   ├── index.css           # Tailwind CSS directives & custom grid styles
│   └── main.jsx            # Entry point
├── index.html              # HTML shell with Google Fonts & metadata
└── vite.config.js          # Vite build config with base path for GitHub Pages
```

## 💻 Local Development

1. Clone and install dependencies:
   ```bash
   npm install
   ```

2. Run the Vite development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
