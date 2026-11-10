// What the preview card shows for each link.
//  img   – screenshot shown instantly on hover
//  live  – a page that allows being embedded; it loads live behind the screenshot
//          and can be used full size when the card is clicked. Sites that block
//          embedding (GitHub, X, arXiv, VT, Scholar…) stay as screenshots.
//  note  – a text card instead of a page
export const PREVIEWS = {
  engelbart: { url: "https://mathetic.com/engelbart", img: "/previews/engelbart.jpg", live: "https://mathetic.com/engelbart" },
  mathetic: { url: "https://mathetic.com", img: "/previews/mathetic.jpg", live: "https://mathetic.com" },
  surplus: { url: "https://surplus.dev", img: "/previews/surplus.jpg" },
  tutortrace: { url: "https://arxiv.org/abs/2608.26184", img: "/previews/tutortrace.jpg" },
  uist: { url: "https://uist.acm.org/2026/", img: "/previews/uist.jpg" },
  illusion: {
    url: "https://www.youtube.com/watch?v=KBjp7t9403c&list=PLGh2XVbXlSVI&index=11&t=318s",
    img: "/previews/illusion.jpg",
    live: "https://www.youtube-nocookie.com/embed/KBjp7t9403c?start=318",
  },
  futurehci: { url: "https://hci.icat.vt.edu/news/futurehci--26-workshop-to-be-hosted-by-chci.html", img: "/previews/futurehci.jpg" },
  vt: { url: "https://cs.vt.edu", img: "/previews/vt.jpg" },
  prime: { url: "https://chensivan.github.io", img: "/previews/prime.jpg", live: "https://chensivan.github.io" },
  cv: { url: "/david_barron_resume.pdf", img: "/previews/cv.jpg", live: "/david_barron_resume.pdf" },
  github: { url: "https://github.com/divadbaroon", img: "/previews/github.jpg" },
  x: { url: "https://x.com/DavidBarron410", img: "/previews/x.jpg" },
  scholar: { note: { label: "Google Scholar", body: "Profile coming soon." } },
  email: { url: "mailto:dbarron410@vt.edu", note: { label: "Email", body: "dbarron410@vt.edu" } },
  processes: {
    note: {
      label: "Processes",
      body: "Most systems judge the final answer. I study how people get there: the struggle, the questions, the detours. That is where learning and discovery actually happen.",
    },
  },
};

export const displayUrl = (u) => (u || "").replace(/^https?:\/\/(www\.)?/, "").replace(/^mailto:/, "").replace(/\/$/, "");
