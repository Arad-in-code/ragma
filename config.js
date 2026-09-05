/* ============================================================
   ✏️  SMARTIZ — SITE CONFIG
   Edit everything here. No need to touch any other file.
   ============================================================ */
const SITE = {

  /* ---------- Brand ---------- */
  studioName: "فائزه عرفانی",
  tagline: "طراح گرافیک",
  logo: "logo.png",

  /* ---------- Hero / Home ---------- Every project*/
  hero: {
    kicker: "گرافیک دیزاین",
    title: " طراحی صفحه آرایی، جلد کتاب،  پوستر و بنر ، موشن گرافیک ، هویت بصری	",
    subtitle:
      "برای مشاهده نمونه کارها دکمه زیر را کلیک کنید.",
    ctaText: "نمونه کار",
    ctaLink: "#work",
    secondaryCtaText: "درخواست همکاری",
    secondaryCtaLink: "#/contact",
  },

  /* ---------- About / Intro section ---------- */
  about: {
    heading: "تجارب کاری",
    text:
      "طراح گرافیک و صفحه‌آرا در انتشارات گراد به مدت سه سال، صفحه آرا به صورت پروژه‌ای در انتشارات بهارناز و خط سفید، طراحی پوستر ، بنر و هویت بصری به صورت فریلنسر.",
  },

  /* ---------- What we do ---------- */
  services: [
    { icon: "book",   title: "طراحی جلد",     text: "طراحی جلد کودک و بزرگسال برای انتشارات‌ها یا کتاب و مجله‌ی شخصی شما" },
    { icon: "layout", title: "صفحه آرایی", text: "صفحه آرایی کتاب کودک، بزرگسال، نشریه، مجله" },
    { icon: "play",   title: "موشن گرافیک",    text: "طراحی موشن گرافیک برای کسب و کار ، و پیج شما و لوگوموشن " },
    { icon: "poster", title: "طراحی پوستر",       text: "طراحی پوستر و بنر برای برند، پیج و سایت شما " },
  ],

  /* ---------- Stats strip (optional flair) ---------- */
  stats: [
    { value: "20+", label: "پروژه‌های تحویل داده شده" },
    { value: "3+",    label: "سال تجربه" },
    { value: "18+",  label: "رضایت مشتریان" },
    { value: "4+",    label: "حوزه‌های طراحی" },
  ],

  /* ---------- Portfolio pages (folder-driven galleries) ---------- */
  pages: [
    {
      id: "cover", nav: "Cover", icon: "book",
      title: "طراحی جلد",
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

  /* ---------- Work Identity Cards ----------
     Every single piece opened from a gallery (image OR motion video) shows
     an "identity card" next to it. The card always has 3 editable zones:

       title       -> top zone, next to the media. Slightly bigger font,
                       sky-blue color.
       tag         -> top-right zone. Normal font size, glowing bright-blue
                       color.
       description -> right zone, the biggest area of the card. Normal
                       font, plain gray color.

     `identities` keys are "<pageId>-<position>", where <pageId> matches
     the `id` above (cover / layout / motions / poster) and <position> is
     the file's order inside its folder, starting at 1 (1 = first file,
     2 = second file, ...). Edit, add, or delete any entry below.

     Any item that has no matching key automatically falls back to
     `identityFallback`, so newly added files always show *something*
     until you write their real identity here.
  */
  identityFallback: {
    title: "Untitled Work",
    tag: "Smartiz Studio",
    description: "No details written yet for this piece — edit config.js to add a title, tag, and description.",
  },
  identities: {
    "cover-1": {
      title: "Arabic 9 — Comprehensive Workbook",
      tag: "Book Cover · Exam Prep",
      description: "Cover design for a ninth-grade Arabic exam-prep book, built around a street-safety illustration and bold calligraphic type for the Nohom Center series.",
    },
    "cover-2": {
      title: "Math 9 — Comprehensive Workbook",
      tag: "Book Cover · Exam Prep",
      description: "An explorer-themed cover for a ninth-grade math workbook, where two young characters unlock a doorway of equations — playful visuals for a serious subject.",
    },
    "cover-3": {
      title: "Persian Literature 9",
      tag: "Book Cover · Exam Prep",
      description: "A social-feed-styled cover that reimagines classical Persian poets inside a mock Instagram post, bridging literary heritage with a scroll-stopping visual hook.",
    },
    "cover-4": {
      title: "Science 9 — Comprehensive Workbook",
      tag: "Book Cover · Exam Prep",
      description: "Chemistry-element mascots face off on a football pitch for this ninth-grade science cover — a lighthearted metaphor for reactions and chapter content.",
    },
    "cover-5": {
      title: "Chemistry 10",
      tag: "Book Cover · Exam Prep",
      description: "A retro poster-style illustration of two chemists at the bench sets the tone for this tenth-grade chemistry cover, paired with a bold two-tone palette.",
    },

    "layout-1": {
      title: "Preschool Skills Worksheet No. 4",
      tag: "Editorial · Layout",
      description: "A skill-building worksheet spread for early learners, mixing tracing, coloring, and feelings exercises around a friendly umbrella-toting mascot.",
    },
    "layout-2": {
      title: "Elementary Math — Fractions Chapter",
      tag: "Editorial · Layout",
      description: "A fractions chapter spread built for young readers, translating equal-parts problems into sports and everyday-object diagrams that stay easy to follow.",
    },
    "layout-3": {
      title: "Elementary Math — Time & Measurement",
      tag: "Editorial · Layout",
      description: "A first-chapter spread on telling time, pairing clock and timetable exercises with buses, houses, and other familiar scenes to keep the page inviting.",
    },
    "layout-4": {
      title: "Religious Studies Worksheet",
      tag: "Editorial · Layout",
      description: "A clean black-and-white worksheet spread on the prophets, using simple line art and guided steps to keep the layout calm and easy to complete.",
    },
    "layout-5": {
      title: "Preschool Activity Worksheet No. 28",
      tag: "Editorial · Layout",
      description: "A shape-tracing and matching spread for preschoolers, pairing vehicles and animals with dotted grids that build early motor and pattern skills.",
    },
    "layout-6": {
      title: "Social Studies Exam Booklet",
      tag: "Editorial · Layout",
      description: "A structured, grid-driven layout for a high-school social-studies exam booklet, keeping dense question sets legible with a calm blue palette.",
    },
    "layout-7": {
      title: "Early Persian Language Worksheet",
      tag: "Editorial · Layout",
      description: "A cheerful spelling and matching spread for early Persian-language learners, built around duck and teapot illustrations that make repetition fun.",
    },

    "motions-1": {
      title: "Social Reel Animation",
      tag: "Motion Design · Social",
      description: "A short, loop-friendly animation built for feed and story placements — swap in the real brand, message, and metrics here.",
    },
    "motions-2": {
      title: "Logo Reveal Animation",
      tag: "Motion Design · Branding",
      description: "A kinetic logo reveal meant to open a video or intro with energy — replace with the specific brand and reveal concept.",
    },
    "motions-3": {
      title: "Event Promo Animation",
      tag: "Motion Design · Event",
      description: "An animated countdown-style teaser for an upcoming event or session — add the real event name, date, and speaker here.",
    },
    "motions-4": {
      title: "Product Showcase Animation",
      tag: "Motion Design · Product",
      description: "A moving product highlight meant to sit on a landing page or ad — replace with the actual product and selling points.",
    },
    "motions-5": {
      title: "Kinetic Typography Piece",
      tag: "Motion Design · Typography",
      description: "Type-driven motion built to carry a message on its own — drop in the real quote, slogan, or announcement text.",
    },
    "motions-6": {
      title: "Story Highlight Animation",
      tag: "Motion Design · Social",
      description: "A vertical, story-format animation designed for quick mobile viewing — replace with the true campaign details.",
    },

    "poster-1": {
      title: "Keyboard Collection Banner",
      tag: "Poster · Ad Banner",
      description: "A vivid purple product banner promoting mechanical, gaming, and office keyboards, built to convert with a bold headline and clear call-to-action.",
    },
    "poster-2": {
      title: "\u201CTrapped in the Algorithm\u201D Talk \u2014 Portrait",
      tag: "Poster · Event",
      description: "A panel-discussion poster on algorithmic bias in social media, using a chained-figure illustration to visualize the pull of the feed.",
    },
    "poster-3": {
      title: "Star Football Academy Poster",
      tag: "Poster · Sports",
      description: "A stadium-lit football academy poster built around a dynamic player illustration, with programs and contact details laid out for quick scanning.",
    },
    "poster-4": {
      title: "Puzzle Tutoring Group Poster",
      tag: "Poster · Education",
      description: "A tutoring-center poster pairing a real classroom photo with puzzle-piece icons for chemistry, math, physics, and biology subjects.",
    },
    "poster-5": {
      title: "\u201CTrapped in the Algorithm\u201D Talk \u2014 Story",
      tag: "Poster · Event",
      description: "A vertical story-format crop of the algorithm-talk poster, resized and rebalanced for Instagram Stories placement.",
    },
    "poster-6": {
      title: "Social Anxiety Disorder Talk Poster",
      tag: "Poster · Event",
      description: "A lavender-toned lecture poster introducing the speaker with a portrait photo alongside the session's title, venue, and schedule.",
    },
    "poster-7": {
      title: "Xerox Printer Devices Banner",
      tag: "Poster · Ad Banner",
      description: "A teal product banner showcasing a lineup of Xerox printers and multifunction devices, framed for a store or catalog homepage.",
    },
  },

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
