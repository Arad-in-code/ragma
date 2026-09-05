/* ============================================================
   SMARTIZ — app (hash-based SPA, data-driven from config.js)
   All editable text lives in config.js — don't edit copy here.
   ============================================================ */

/* ---------- inline SVG icon set ---------- */
const ICONS = {
  home:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
  book:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  layout:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
  play:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',
  poster:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="9" r="2.5"/><path d="M7 18c1.5-3 3.5-4 5-4s3.5 1 5 4"/></svg>',
  mail:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/></svg>',
  phone:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  telegram:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 3 2.5 10.5c-.9.35-.85 1.65.08 1.93l4.92 1.5 1.8 5.6c.28.87 1.4 1.05 1.95.32l2.6-3.4 4.9 3.6c.7.5 1.7.13 1.88-.72L23 4.2c.2-.95-.72-1.6-1-1.2z"/><path d="m7.5 13.9 10-8.4"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  arrow:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg>',
  up:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 15 12 9 18 15"/></svg>',
  close:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>',
  left:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 6 9 12 15 18"/></svg>',
  right:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>',
  zoom:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',
  menu:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>',
};
const icon = name => ICONS[name] || "";

/* ---------- media loading (dynamic, folder-driven) ---------- */
const mediaCache = {};
async function getMedia(folder) {
  if (mediaCache[folder]) return mediaCache[folder];
  // GitHub Pages has no Node API, so use the generated static manifest.
  // Keep the API fallback for local development with server.js.
  const manifestUrl = `media/${encodeURIComponent(folder)}.json`;
  try {
    const res = await fetch(manifestUrl);
    if (res.ok) {
      const files = await res.json();
      mediaCache[folder] = files;
      return files;
    }
  } catch {}
  try {
    const res = await fetch(`api/media/${encodeURIComponent(folder)}`);
    const files = await res.json();
    mediaCache[folder] = files;
    return files;
  } catch { return []; }
}

/* ---------- lightbox ---------- */
let lbItems = [], lbIndex = 0, lbType = "image", lbPageId = "";
const lightbox = document.getElementById("lightbox");

/* Look up the identity card for one gallery item, falling back to
   SITE.identityFallback when the pageId/position has no entry yet.
   Keep everything editable from config.js only. */
function getIdentity(pageId, index) {
  const fallback = SITE.identityFallback || {};
  const entry = SITE.identities?.[`${pageId}-${index + 1}`] || {};
  return {
    title: entry.title || fallback.title || "Untitled Work",
    tag: entry.tag || fallback.tag || "",
    description: entry.description || fallback.description || "",
  };
}

function renderLightbox() {
  const src = lbItems[lbIndex];
  const media = lbType === "video"
    ? `<video src="${src}" autoplay muted loop playsinline controls></video>`
    : `<img src="${src}" alt="Preview" />`;
  const identity = getIdentity(lbPageId, lbIndex);
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close">${icon("close")}</button>
    ${lbItems.length > 1 ? `
      <button class="lightbox-nav prev" aria-label="Previous">${icon("left")}</button>
      <button class="lightbox-nav next" aria-label="Next">${icon("right")}</button>` : ""}
    <div class="lightbox-content">
      <div class="identity-card">
        <div class="identity-media">
          ${media}
          <h3 class="identity-title">${identity.title}</h3>
        </div>
        <span class="identity-tag">${identity.tag}</span>
        <p class="identity-desc">${identity.description}</p>
      </div>
    </div>`;
  lightbox.querySelector(".lightbox-close").onclick = closeLightbox;
  const prev = lightbox.querySelector(".prev");
  const next = lightbox.querySelector(".next");
  if (prev) prev.onclick = e => { e.stopPropagation(); lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length; renderLightbox(); };
  if (next) next.onclick = e => { e.stopPropagation(); lbIndex = (lbIndex + 1) % lbItems.length; renderLightbox(); };
}
function openLightbox(items, index, type, pageId) {
  lbItems = items; lbIndex = index; lbType = type; lbPageId = pageId;
  renderLightbox();
  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  setTimeout(() => { lightbox.innerHTML = ""; }, 350);
}
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("show")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft" && lbItems.length > 1) { lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length; renderLightbox(); }
  if (e.key === "ArrowRight" && lbItems.length > 1) { lbIndex = (lbIndex + 1) % lbItems.length; renderLightbox(); }
});

/* ---------- nav ---------- */
function renderNav(activeId) {
  const links = [
    { id: "home", nav: "Home", icon: "home", hash: "#/" },
    ...SITE.pages.map(p => ({ id: p.id, nav: p.nav, icon: p.icon, hash: `#/${p.id}` })),
    { id: "contact", nav: "Contact Us", icon: "mail", hash: "#/contact" },
  ];
  document.getElementById("nav").innerHTML = `
    <div class="nav-inner">
      <a class="brand" href="#/">
        <img src="${SITE.logo}" alt="${SITE.studioName} logo" />
        <span class="brand-name">${SITE.studioName}</span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Menu">${icon("menu")}</button>
      <nav class="nav-links" id="navLinks">
        ${links.map(l => `
          <a class="nav-link ${l.id === activeId ? "active" : ""}" href="${l.hash}">
            ${icon(l.icon)}<span>${l.nav}</span>
          </a>`).join("")}
      </nav>
    </div>`;
  document.getElementById("navToggle").onclick = () =>
    document.getElementById("navLinks").classList.toggle("open");
}

/* ---------- footer ---------- */
function renderFooter() {
  document.getElementById("footer").innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="name">${SITE.studioName}</div>
        <p>${SITE.footer.text}</p>
      </div>
      <div class="footer-col">
        <h4>Explore</h4>
        <a href="#/">${icon("home")} Home</a>
        ${SITE.pages.map(p => `<a href="#/${p.id}">${icon(p.icon)} ${p.nav}</a>`).join("")}
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        ${SITE.contact.items.map(c => `
          <a href="${c.href}" target="_blank" rel="noopener">${icon(c.icon)} ${c.value}</a>`).join("")}
      </div>
    </div>
    <div class="footer-bottom">${SITE.footer.copyright}</div>`;
}

/* ---------- home page ---------- */
async function renderHome(app) {
  app.innerHTML = `
    <section class="hero page">
      <img class="hero-logo" src="${SITE.logo}" alt="${SITE.studioName} logo" />
      <div class="studio-name">${SITE.studioName}</div>
      <div class="hero-tagline">${SITE.tagline}</div>
      <h1 class="reveal">${SITE.hero.title}</h1>
      <p class="sub reveal d1">${SITE.hero.subtitle}</p>
      <div class="hero-ctas reveal d2">
        <a class="btn btn-primary" href="${SITE.hero.ctaLink}">${SITE.hero.ctaText} ${icon("arrow")}</a>
        <a class="btn btn-ghost" href="${SITE.hero.secondaryCtaLink}">${SITE.hero.secondaryCtaText}</a>
      </div>
      <div class="scroll-hint reveal d3" aria-hidden="true"></div>
    </section>

    <section class="page">
      <div class="about-band reveal">
        <span class="kicker">${SITE.hero.kicker}</span>
        <h2>${SITE.about.heading}</h2>
        <p>${SITE.about.text}</p>
      </div>
    </section>

    <section class="page" id="services">
      <div class="section-head reveal">
        <h2>What We Do</h2>
        <p>Four disciplines, one obsession: beautiful, meaningful design.</p>
      </div>
      <div class="services">
        ${SITE.services.map((s, i) => `
          <div class="service-card reveal d${i + 1}">
            <div class="service-icon">${icon(s.icon)}</div>
            <h3>${s.title}</h3>
            <p>${s.text}</p>
          </div>`).join("")}
      </div>
    </section>

    <section class="page">
      <div class="stats">
        ${SITE.stats.map((s, i) => `
          <div class="stat reveal d${i + 1}">
            <div class="num">${s.value}</div>
            <div class="lbl">${s.label}</div>
          </div>`).join("")}
      </div>
    </section>

    <section class="page" id="work">
      <div class="section-head reveal">
        <h2>Selected Work</h2>
        <p>Step into each collection — every gallery grows as we create.</p>
      </div>
      <div class="work-grid" id="workGrid"></div>
    </section>`;

  // work preview cards: first media of each folder
  const grid = document.getElementById("workGrid");
  const cards = await Promise.all(SITE.pages.map(async (p, i) => {
    const files = await getMedia(p.folder);
    const first = files[0] || "";
    const media = p.type === "video"
      ? `<video src="${first}" autoplay muted loop playsinline></video>`
      : `<img src="${first}" alt="${p.title}" loading="lazy" />`;
    return `
      <a class="work-card reveal d${i + 1}" href="#/${p.id}">
        ${first ? media : ""}
        <div class="overlay">
          <h3>${p.title}</h3>
          <span>View gallery ${icon("arrow")}</span>
        </div>
      </a>`;
  }));
  grid.innerHTML = cards.join("");
  observeReveals();
}

/* ---------- gallery page ---------- */
async function renderGallery(app, page) {
  app.innerHTML = `
    <section class="gallery-hero page">
      <span class="kicker">${SITE.studioName} · Portfolio</span>
      <h1>${page.title}</h1>
      <p>${page.description}</p>
    </section>
    <div class="page">
      <div class="gallery" id="gallery"></div>
    </div>`;

  const files = await getMedia(page.folder);
  const gallery = document.getElementById("gallery");
  if (!files.length) {
    gallery.outerHTML = `<div class="gallery-empty">New work coming soon — check back shortly.</div>`;
    return;
  }
  gallery.innerHTML = files.map((src, i) => `
    <div class="g-item reveal d${(i % 4) + 1}" data-index="${i}" tabindex="0" role="button" aria-label="Open preview">
      ${page.type === "video"
        ? `<video src="${src}" autoplay muted loop playsinline preload="metadata"></video>`
        : `<img src="${src}" alt="${page.title} ${i + 1}" loading="lazy" />`}
      <span class="zoom-badge">${icon("zoom")}</span>
    </div>`).join("");

  gallery.querySelectorAll(".g-item").forEach(el => {
    const open = () => openLightbox(files, +el.dataset.index, page.type, page.id);
    el.addEventListener("click", open);
    el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
  observeReveals();
}

/* ---------- contact page ---------- */
function renderContact(app) {
  app.innerHTML = `
    <section class="gallery-hero page">
      <span class="kicker">${SITE.studioName} · Contact</span>
      <h1>${SITE.contact.heading}</h1>
      <p>${SITE.contact.text}</p>
    </section>
    <section class="page" style="padding-top:0">
      <div class="contact-grid">
        ${SITE.contact.items.map((c, i) => `
          <a class="contact-card reveal d${i + 1}" href="${c.href}" target="_blank" rel="noopener">
            <div class="contact-icon">${icon(c.icon)}</div>
            <div>
              <div class="label">${c.label}</div>
              <div class="value">${c.value}</div>
            </div>
          </a>`).join("")}
      </div>
    </section>`;
  observeReveals();
}

/* ---------- reveal-on-scroll ---------- */
let revealObserver;
function observeReveals() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("visible"); revealObserver.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

/* ---------- router ---------- */
async function route() {
  const hash = location.hash.replace(/^#\/?/, "").split("?")[0];
  const app = document.getElementById("app");
  document.getElementById("navLinks")?.classList.remove("open");

  // restart the page-in animation
  app.style.animation = "none";
  void app.offsetHeight;
  app.style.animation = "";

  const page = SITE.pages.find(p => p.id === hash);
  if (page) {
    renderNav(page.id);
    document.title = `${page.title} — ${SITE.studioName}`;
    await renderGallery(app, page);
  } else if (hash === "contact") {
    renderNav("contact");
    document.title = `Contact — ${SITE.studioName}`;
    renderContact(app);
  } else {
    renderNav("home");
    document.title = `${SITE.studioName} — ${SITE.tagline}`;
    await renderHome(app);
  }
  if (!location.hash.includes("#work")) window.scrollTo({ top: 0, behavior: "instant" });
}

/* in-page anchor (CTA → #work) */
document.addEventListener("click", e => {
  const a = e.target.closest('a[href="#work"]');
  if (a) {
    e.preventDefault();
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  }
});


/* ---------- scroll chrome: sticky nav shadow + back-to-top ---------- */
const toTop = document.getElementById("toTop");
if (toTop) {
  toTop.innerHTML = icon("up");
  toTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
}
window.addEventListener("scroll", () => {
  document.getElementById("nav").classList.toggle("scrolled", window.scrollY > 8);
  if (toTop) toTop.classList.toggle("show", window.scrollY > 500);
}, { passive: true });

/* ---------- boot ---------- Every project*/
window.addEventListener("hashchange", route);
renderFooter();
route();
