/* ============================================================
   ✏️  SMARTIZ — SITE CONFIG
   Edit everything here. No need to touch any other file.
   ============================================================ */
const SITE = {

  /* ---------- Brand ---------- */
  studioName: "Smartiz",
  tagline: "Creative Design Studio",
  logo: "logo.png",

  /* ---------- Hero / Home ---------- Every project*/
  hero: {
    kicker: "Design · Motion · Print",
    title: "We craft visual stories that move people.",
    subtitle:
      "studio_hamejoore is a creative studio focused on book covers, editorial layouts, motion design and posters — blending bold ideas with refined execution.",
    ctaText: "See Our Work",
    ctaLink: "#work",
    secondaryCtaText: "Get in Touch",
    secondaryCtaLink: "#/contact",
  },

  /* ---------- About / Intro section ---------- */
  about: {
    heading: "A studio built on craft",
    text:
      "Every project begins with a story. We translate ideas into striking visuals — from the quiet elegance of a book cover to the energy of motion graphics. Minimal where it matters, bold where it counts.",
  },

  /* ---------- What we do ---------- */
  services: [
    { icon: "book",   title: "Cover Design",     text: "Book covers that capture the soul of the story within." },
    { icon: "layout", title: "Editorial Layout", text: "Clean, readable, beautifully structured page design." },
    { icon: "play",   title: "Motion Design",    text: "Animated visuals that bring brands and ideas to life." },
    { icon: "poster", title: "Poster Art",       text: "Bold poster design made to stop people in their tracks." },
  ],

  /* ---------- Stats strip (optional flair) ---------- */
  stats: [
    { value: "20+", label: "Projects Delivered" },
    { value: "4+",    label: "Years of Craft" },
    { value: "40+",  label: "Happy Clients" },
    { value: "7+",    label: "Design Disciplines" },
  ],

  /* ---------- Portfolio pages (folder-driven galleries) ---------- */
  pages: [
    {
      id: "cover", nav: "Cover", icon: "book",
      title: "Cover Design",
      description: "A curated collection of book cover designs — each one a doorway into a story.",
      folder: "cover", type: "image",
    },
    {
      id: "layout", nav: "Layout", icon: "layout",
      title: "Layout & Editorial",
      description: "Editorial layouts and page compositions where typography and space do the talking.",
      folder: "lay", type: "image",
    },
    {
      id: "motions", nav: "Motions", icon: "play",
      title: "Motion Design",
      description: "Motion pieces and animated visuals — hover to feel them move.",
      folder: "motions", type: "video",
    },
    {
      id: "poster", nav: "Poster", icon: "poster",
      title: "Poster Art",
      description: "Posters designed to be loud, bold and unforgettable.",
      folder: "poster", type: "image",
    },
  ],

  /* ---------- Contact ---------- */
  contact: {
    heading: "Let's create something together",
    text: "Have a project in mind? Reach out through any of the channels below — we usually reply within a day.",
    items: [
      { icon: "telegram",  label: "Telegram",  value: "faezeerf",          href: "https://t.me/faezeerf" },
      { icon: "instagram", label: "Instagram", value: "Faeze_erfaninia",        href: "https://instagram.com/Faeze_erfaninia" },
      { icon: "phone",     label: "Phone",     value: "0901 034 8017",          href: "tel:+989010348017" },
      { icon: "mail",      label: "Email",     value: "Faeze.royal",  href: "mailto:Faeze.royal@gmail.com" },
    ],
  },

  /* ---------- Footer ---------- */
  footer: {
    text: "Creative design studio — covers, layouts, motion & posters.",
    copyright: "© " + new Date().getFullYear() + " Smartiz. All rights reserved.",
  },
};
