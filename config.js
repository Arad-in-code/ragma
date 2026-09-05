/* ============================================================
   ✏️  SMARTIZ — SITE CONFIG
   Edit everything here. No need to touch any other file.
   ============================================================ */
const SITE = {

  /* ---------- Brand ---------- */
  studioName: "Faeze Erfani",
  tagline: "Creative Design Studio",
  logo: "logo.png",

  /* ---------- Hero / Home ---------- Every project*/
  hero: {
    kicker: "Design · Motion · Print",
    title: "Graphic designer specialized in editorial layout, book design, and dynamic visuals.",
    subtitle:
      "my services include book layout, cover design, posters, motion graphic, banners and visual identity design.",
    ctaText: "See Our Work",
    ctaLink: "#work",
    secondaryCtaText: "Get in Touch",
    secondaryCtaLink: "#/contact",
  },

  /* ---------- About / Intro section ---------- */
  about: {
    heading: "Work Experience",
    text:
      "My work experience was two years in  Gerad publishing as a graphic and layout designer. I did layout design for Khate Sefid and Baharnaz publications as a project. As a freelancer, I design book cover , poster and banner design, and layout design for publications..",
  },

  /* ---------- What we do ---------- */
  services: [
    { icon: "book",   title: "Cover Design",     text: "Book covers that capture the soul of the story within." },
    { icon: "layout", title: "Editorial Layout", text: "Clean, readable, beautifully structured page design." },
    { icon: "play",   title: "Motion Design",    text: "Animated visuals that bring brands and ideas to life." },
    { icon: "poster", title: "Poster Art",       text: "To showcase your business artistically." },
  ],

  /* ---------- Stats strip (optional flair) ---------- */
  stats: [
    { value: "20+", label: "Projects Delivered" },
    { value: "3+",    label: "Years of Craft" },
    { value: "18+",  label: "Happy Clients" },
    { value: "4+",    label: "Design Disciplines" },
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
      { icon: "phone",     label: "Phone",     value: "0939 042 6909",          href: "tel:+989390426909" },
      { icon: "mail",      label: "Email",     value: "Faeze.Erfani",  href: "mailto:Faezeerf15@gmail.com" },
    ],
  },

  /* ---------- Footer ---------- */
  footer: {
    text: "Creative design studio — covers, layouts, motion & posters.",
    copyright: "© " + new Date().getFullYear() + " FaezeErfani. All rights reserved.",
  },
};
