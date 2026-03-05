// ===== SVG Icon Library =====
const SVG_ICONS = {
  github: '<svg width="SIZE" height="SIZE" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  linkedin: '<svg width="SIZE" height="SIZE" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  email: '<svg width="SIZE" height="SIZE" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
  instagram: '<svg width="SIZE" height="SIZE" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
  threads: '<svg width="SIZE" height="SIZE" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.17.408-2.243 1.33-3.023.88-.744 2.084-1.168 3.59-1.264 1.104-.07 2.132.006 3.065.218-.078-1.14-.58-2.048-1.498-2.61-.664-.406-1.547-.603-2.858-.59l-.045.002c-1.026.018-1.907.283-2.618.788-.563.4-.958.924-1.168 1.436l-1.9-.694c.29-.708.83-1.41 1.61-1.974 1.004-.726 2.22-1.109 3.615-1.14h.06c1.662-.017 3.015.304 4.022.957 1.313.852 2.066 2.217 2.19 3.967.065.091.12.186.168.284.754.32 1.41.733 1.964 1.238 1.07.978 1.743 2.263 1.946 3.713.22 1.573-.177 3.218-1.15 4.766-1.078 1.716-2.762 2.93-5.003 3.61-1.16.352-2.447.535-3.829.546zm-1.143-8.198c-.95.06-1.685.31-2.189.737-.473.4-.685.885-.66 1.432.04.7.389 1.24 1.04 1.662.614.398 1.386.584 2.22.54 1.122-.063 2.004-.467 2.62-1.2.507-.603.858-1.44 1.034-2.466-.712-.183-1.466-.283-2.268-.283-.278 0-.574.012-.888.037l.091-.46z"/></svg>',
  wave: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M18 11V6a2 2 0 0 0-4 0v1"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-5.7-2.4L3.7 16c-.7-.9-.2-2.2.9-2.5.7-.2 1.4.1 1.9.7l1.5 2V4a2 2 0 0 1 4 0"/></svg>',
  book: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
  mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
  externalLink: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  githubSmall: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  location: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  mailLg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
  // Skill icons
  layers: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
  layout: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
  code: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  atom: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>',
  wind: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>',
  settings: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  // Project icons
  monitor: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  users: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  box: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
};

function icon(name, size) {
  var svg = SVG_ICONS[name] || '';
  if (size) svg = svg.replace(/SIZE/g, String(size));
  else svg = svg.replace(/SIZE/g, '20');
  return svg;
}

// ===== Escape HTML to prevent XSS =====
function escapeHTML(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// ===== Render Site from SITE_DATA =====
function renderSite() {
  var d = SITE_DATA;

  // Meta
  document.title = d.meta.siteTitle;
  var descEl = document.getElementById('metaDesc');
  if (descEl) descEl.setAttribute('content', d.meta.description);
  var authEl = document.getElementById('metaAuthor');
  if (authEl) authEl.setAttribute('content', d.meta.author);

  // Navigation logo
  var navLogo = document.getElementById('navLogo');
  if (navLogo) {
    navLogo.innerHTML =
      '<span class="logo-accent">' + escapeHTML(d.owner.firstName.charAt(0)) + '</span>' +
      escapeHTML(d.owner.lastName) +
      '<span class="logo-dot">.</span>';
  }

  // Navigation menu
  var navMenu = document.getElementById('navMenu');
  if (navMenu) {
    navMenu.innerHTML = d.navLinks.map(function(link, i) {
      return '<li><a href="' + escapeHTML(link.href) + '" class="nav-link' + (i === 0 ? ' active' : '') + '">' + escapeHTML(link.label) + '</a></li>';
    }).join('');
  }

  // Hero section
  var heroContent = document.getElementById('heroContent');
  if (heroContent) {
    var fullName = d.owner.firstName + ' ' + d.owner.lastName;
    heroContent.innerHTML =
      '<div class="hero-badge animate-slide-up">' +
        '<span class="badge-dot"></span>' +
        escapeHTML(d.owner.tagline) +
      '</div>' +
      '<h1 class="hero-title animate-slide-up delay-1">' +
        escapeHTML(d.owner.heroGreeting) + ' <span class="wave">' + SVG_ICONS.wave + '</span><br>' +
        escapeHTML(d.owner.heroIntro) + ' <span class="text-accent">' + escapeHTML(fullName) + '</span>' +
      '</h1>' +
      '<p class="hero-subtitle animate-slide-up delay-2">' +
        d.owner.heroDescription +
      '</p>' +
      '<div class="hero-actions animate-slide-up delay-3">' +
        '<a href="#projects" class="btn btn-primary">' +
          SVG_ICONS.book + ' View Projects' +
        '</a>' +
        '<a href="#contact" class="btn btn-outline">' +
          SVG_ICONS.mail + ' Contact Me' +
        '</a>' +
      '</div>' +
      '<div class="hero-social animate-slide-up delay-4">' +
        renderSocialLinks(d.socialLinks, 20) +
      '</div>';
  }

  // Hero initials
  var heroInitials = document.getElementById('heroInitials');
  if (heroInitials) heroInitials.textContent = d.owner.initials;

  // About section
  var aboutText = document.getElementById('aboutText');
  if (aboutText) {
    aboutText.innerHTML =
      d.about.paragraphs.map(function(p) { return '<p>' + p + '</p>'; }).join('') +
      '<div class="about-stats">' +
        d.about.stats.map(function(s) {
          return '<div class="stat-item"><span class="stat-number">' + escapeHTML(s.value) + '</span><span class="stat-label">' + escapeHTML(s.label) + '</span></div>';
        }).join('') +
      '</div>';
  }

  var aboutName = document.getElementById('aboutName');
  if (aboutName) aboutName.textContent = d.owner.firstName + ' ' + d.owner.lastName;

  // Skills
  var skillsGrid = document.getElementById('skillsGrid');
  if (skillsGrid) {
    skillsGrid.innerHTML = d.skills.map(function(skill) {
      return '<div class="skill-card">' +
        '<div class="skill-icon">' + (SVG_ICONS[skill.icon] || '') + '</div>' +
        '<h3>' + escapeHTML(skill.name) + '</h3>' +
        '<p>' + escapeHTML(skill.description) + '</p>' +
      '</div>';
    }).join('');
  }

  // Projects
  var projectsGrid = document.getElementById('projectsGrid');
  if (projectsGrid) {
    projectsGrid.innerHTML = d.projects.map(function(proj) {
      return '<div class="project-card">' +
        '<div class="project-image"><div class="project-placeholder">' +
          (SVG_ICONS[proj.icon] || '') +
        '</div></div>' +
        '<div class="project-info">' +
          '<h3 class="project-title">' + escapeHTML(proj.title) + '</h3>' +
          '<p class="project-desc">' + escapeHTML(proj.description) + '</p>' +
          '<div class="project-tech">' +
            proj.technologies.map(function(t) { return '<span class="tech-tag">' + escapeHTML(t) + '</span>'; }).join('') +
          '</div>' +
          '<div class="project-links">' +
            '<a href="' + escapeHTML(proj.liveUrl) + '" class="project-link">' +
              SVG_ICONS.externalLink + ' Live Demo' +
            '</a>' +
            '<a href="' + escapeHTML(proj.sourceUrl) + '" target="_blank" rel="noopener noreferrer" class="project-link">' +
              SVG_ICONS.githubSmall + ' Source' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  // Contact header
  var contactHeader = document.getElementById('contactHeader');
  if (contactHeader) {
    contactHeader.innerHTML =
      '<span class="section-tag">Contact</span>' +
      '<h2 class="section-title">' + escapeHTML(d.contact.heading) + '</h2>' +
      '<p class="section-subtitle">' + escapeHTML(d.contact.subtitle) + '</p>';
  }

  // Contact content
  var contactContent = document.getElementById('contactContent');
  if (contactContent) {
    var emailIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>';
    var locationIcon = SVG_ICONS.location;
    var ghIcon = icon('github', 24);

    contactContent.innerHTML =
      '<div class="contact-info">' +
        '<div class="contact-item"><div class="contact-icon">' + emailIcon + '</div><div><h3>Email</h3><p>' + escapeHTML(d.owner.email) + '</p></div></div>' +
        '<div class="contact-item"><div class="contact-icon">' + locationIcon + '</div><div><h3>Location</h3><p>' + escapeHTML(d.owner.location) + '</p></div></div>' +
        '<div class="contact-item"><div class="contact-icon">' + ghIcon + '</div><div><h3>GitHub</h3><p>' + escapeHTML(d.socialLinks.find(function(s) { return s.icon === 'github'; }).url.replace('https://', '')) + '</p></div></div>' +
      '</div>' +
      '<div class="contact-cta">' +
        '<p>' + escapeHTML(d.contact.ctaText) + '</p>' +
        '<a href="mailto:' + escapeHTML(d.owner.email) + '" class="btn btn-primary btn-lg">' +
          SVG_ICONS.mailLg + ' ' + escapeHTML(d.contact.ctaButtonLabel) +
        '</a>' +
      '</div>';
  }

  // Footer
  var footerContent = document.getElementById('footerContent');
  if (footerContent) {
    footerContent.innerHTML =
      '<div class="footer-brand">' +
        '<a href="#home" class="nav-logo"><span class="logo-accent">' + escapeHTML(d.owner.firstName.charAt(0)) + '</span>' + escapeHTML(d.owner.lastName) + '<span class="logo-dot">.</span></a>' +
        '<p>' + escapeHTML(d.footer.tagline) + '</p>' +
      '</div>' +
      '<div class="footer-links">' +
        d.navLinks.map(function(link) { return '<a href="' + escapeHTML(link.href) + '">' + escapeHTML(link.label) + '</a>'; }).join('') +
      '</div>' +
      '<div class="footer-social">' +
        renderSocialLinks(d.socialLinks, 18) +
      '</div>';
  }

  var footerCopyright = document.getElementById('footerCopyright');
  if (footerCopyright) {
    footerCopyright.innerHTML = '&copy; ' + escapeHTML(d.meta.copyrightYear) + ' ' + escapeHTML(d.owner.firstName + ' ' + d.owner.lastName) + '. All rights reserved.';
  }
}

function renderSocialLinks(links, size) {
  return links.map(function(link) {
    var isExternal = link.icon !== 'email';
    return '<a href="' + escapeHTML(link.url) + '"' +
      (isExternal ? ' target="_blank" rel="noopener noreferrer"' : '') +
      ' class="social-link" title="' + escapeHTML(link.label) + '">' +
      icon(link.icon, size) +
    '</a>';
  }).join('');
}

// ===== Particle Background =====
function initParticles() {
  var canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var particles = [];
  var PARTICLE_COUNT = 40;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (var i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.3 + 0.05,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(201, 168, 76, ' + p.opacity + ')';
      ctx.fill();
    }
    // Draw connecting lines
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx = particles[i].x - particles[j].x;
        var dy = particles[i].y - particles[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(201, 168, 76, ' + (0.03 * (1 - dist / 150)) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ===== Navigation Toggle =====
function initNavigation() {
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
}

// ===== Navbar Scroll Effect =====
function initScrollEffects() {
  var navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function() {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });
}

// ===== Active Navigation Link =====
function initActiveLink() {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');

  function setActiveLink() {
    var scrollPosition = window.scrollY + 100;

    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      var sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
}

// ===== Scroll Animations =====
function initScrollAnimations() {
  var elements = document.querySelectorAll('.animate-on-scroll');

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(function(element) {
    observer.observe(element);
  });
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', function() {
  renderSite();
  initParticles();
  initNavigation();
  initScrollEffects();
  initActiveLink();
  initScrollAnimations();
});
