// What the preview card shows for each link.
//  img   – screenshot shown instantly on hover
//  live  – a page that allows being embedded (only our own pages and YouTube); it loads
//          live behind the screenshot and opens full size in the browser window on click.
//          Everything else (GitHub, X, arXiv…) is a screenshot, and clicking the
//          card just opens the real site in a new tab.
//  note  – a text card instead of a page
export const PREVIEWS = {
  engelbart: { url: "https://mathetic.com/engelbart", img: "/previews/engelbart.jpg", live: "https://mathetic.com/engelbart" },
  mathetic: { url: "https://mathetic.com", img: "/previews/mathetic.jpg", live: "https://mathetic.com" },
  tutortrace: { url: "https://arxiv.org/abs/2608.26184", img: "/previews/tutortrace.jpg", live: "/papers/tutortrace.pdf" },
  illusion: {
    url: "https://www.youtube.com/watch?v=KBjp7t9403c&list=PLGh2XVbXlSVI&index=11&t=318s",
    img: "/previews/illusion.jpg",
    live: "https://www.youtube-nocookie.com/embed/KBjp7t9403c?start=318",
  },
  cv: { url: "/david_barron_resume.pdf", img: "/previews/cv.jpg", live: "/david_barron_resume.pdf" },
  github: { url: "https://github.com/divadbaroon", img: "/previews/github.jpg" },
  x: { url: "https://x.com/DavidBarron410", img: "/previews/x.jpg" },
  scholar: { note: { label: "Google Scholar", body: "Profile coming soon." } },
  email: { url: "mailto:dbarron410@vt.edu", note: { label: "Email", body: "dbarron410@vt.edu" } },
  // drawn by EssayNote.jsx; clicking opens the paper
  processes: { url: "/papers/illusion-of-learning.pdf", live: "/papers/illusion-of-learning.pdf", note: { label: "Processes", body: "" } },
};

export const displayUrl = (u) =>
  (u && u.startsWith("/") ? "davidbarron.dev" + u : u || "").replace(/^https?:\/\/(www\.)?/, "").replace(/^mailto:/, "").replace(/\/$/, "");
