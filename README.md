# Ahmad Azhar — Portfolio

Personal portfolio website with a premium yellow and black theme.

## Features

- Modern, responsive single-page portfolio
- Yellow & black doft (matte) premium design
- Smooth scroll animations
- Mobile-friendly navigation
- Sections: Hero, About, Skills, Projects, Contact

## Project Structure

```
├── index.html          # Main HTML page (hero, about, skills, projects, contact)
├── style.css           # All styles — theme variables, layout, responsive breakpoints
├── script.js           # Navigation toggle, scroll effects, animations (IntersectionObserver)
├── CNAME               # Custom domain configuration (zharcompany.me)
├── README.md           # This file
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions workflow for GitHub Pages deployment
```

No build step required — the site is pure HTML, CSS, and JavaScript.

## Live

Visit [zharcompany.me](https://zharcompany.me)

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to the `main` branch.

To enable deployment, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.