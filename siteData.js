// ============================================================
//  siteData.js — Single source of truth for all site content
// ============================================================
//  Edit the values below to update your portfolio.
//  After saving, refresh the page to see the changes.
// ============================================================

const SITE_DATA = {

  // ── Meta & Branding ──────────────────────────────────────
  meta: {
    siteTitle: "Ahmad Azhar — Portfolio",
    description: "Ahmad Azhar — Portfolio. Web Developer & Creative Professional.",
    author: "Ahmad Azhar",
    copyrightYear: "2025",
  },

  // ── Owner / Personal Info ────────────────────────────────
  owner: {
    firstName: "Ahmad",
    lastName: "Azhar",
    initials: "AA",
    role: "Web Developer",
    tagline: "Available for Work",
    heroGreeting: "Hi!",
    heroIntro: "I'm",
    heroDescription:
      "A passionate <strong>Web Developer</strong> who loves crafting clean, modern, and user-friendly digital experiences with attention to detail and quality.",
    email: "ahmadazhar@example.com",
    location: "Indonesia",
  },

  // ── Navigation Links ─────────────────────────────────────
  navLinks: [
    { label: "Home",     href: "#home" },
    { label: "About",    href: "#about" },
    { label: "Skills",   href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact",  href: "#contact" },
  ],

  // ── Social Links ─────────────────────────────────────────
  //  icon: "github" | "linkedin" | "email" | "instagram" | "threads"
  socialLinks: [
    { icon: "github",    url: "https://github.com/victorlimer26",  label: "GitHub" },
    { icon: "linkedin",  url: "https://linkedin.com",               label: "LinkedIn" },
    { icon: "email",     url: "mailto:ahmadazhar@example.com",       label: "Email" },
    { icon: "instagram", url: "https://instagram.com",               label: "Instagram" },
    { icon: "threads",   url: "https://threads.net",                 label: "Threads" },
  ],

  // ── About Section ────────────────────────────────────────
  about: {
    paragraphs: [
      "Hello! I'm <strong>Ahmad Azhar</strong>, a creative web developer with a passion for building beautiful, functional, and user-centered digital experiences.",
      "I enjoy turning complex problems into simple, elegant solutions. My focus is on creating clean code and intuitive designs that provide great user experiences.",
      "When I'm not coding, you can find me exploring new technologies, reading about design trends, or working on personal projects to sharpen my skills.",
    ],
    stats: [
      { value: "10+", label: "Projects" },
      { value: "2+",  label: "Years Experience" },
      { value: "5+",  label: "Technologies" },
    ],
  },

  // ── Skills ───────────────────────────────────────────────
  //  icon: use any Lucide-style SVG path string, or one of the
  //  preset names: "layers" | "layout" | "code" | "atom" | "wind" | "settings"
  skills: [
    { name: "HTML5",        description: "Semantic markup & accessibility",        icon: "layers" },
    { name: "CSS3",         description: "Modern layouts & animations",            icon: "layout" },
    { name: "JavaScript",   description: "Dynamic & interactive web apps",         icon: "code" },
    { name: "React",        description: "Component-based UI development",         icon: "atom" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework",            icon: "wind" },
    { name: "Git",          description: "Version control & collaboration",        icon: "settings" },
  ],

  // ── Projects ─────────────────────────────────────────────
  //  icon: "monitor" | "users" | "box" (or any preset name)
  projects: [
    {
      title: "Portfolio Website",
      description: "Personal portfolio website with modern design, smooth animations, and responsive layout.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      sourceUrl: "https://github.com/victorlimer26",
      icon: "monitor",
    },
    {
      title: "Web Application",
      description: "A full-featured web application with user authentication, dashboard, and data management.",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      sourceUrl: "https://github.com/victorlimer26",
      icon: "users",
    },
    {
      title: "Landing Page",
      description: "A modern, responsive landing page with engaging animations and clean design approach.",
      technologies: ["HTML", "Tailwind CSS", "JS"],
      liveUrl: "#",
      sourceUrl: "https://github.com/victorlimer26",
      icon: "box",
    },
  ],

  // ── Contact Section ──────────────────────────────────────
  contact: {
    heading: "Get In Touch",
    subtitle: "Have a project in mind? Let's work together!",
    ctaText: "Feel free to reach out for collaboration, freelance work, or just to say hi!",
    ctaButtonLabel: "Send Me an Email",
  },

  // ── Footer ───────────────────────────────────────────────
  footer: {
    tagline: "Building digital experiences with passion and precision.",
  },
};
