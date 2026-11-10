// What the preview card shows for each link.
//  img   – image shown on hover (the card only ever shows images; nothing loads live in it)
//  video – the img is a video thumbnail; the card shows the YouTube play button
//  live  – a page that allows being embedded (only our own pages and YouTube); it opens
//          full size in the browser window when the card is clicked.
//          Everything else (GitHub, X, arXiv…) is a screenshot, and clicking the
//          card just opens the real site in a new tab.
//  note  – a text card instead of a page
//  definition – the dictionary-style card for "processes"
export const PREVIEWS = {
  engelbart: { url: "https://mathetic.com/engelbart", img: "/previews/engelbart.jpg", live: "https://mathetic.com/engelbart" },
  mathetic: { url: "https://mathetic.com", img: "/previews/mathetic.jpg", live: "https://mathetic.com" },
  tutortrace: { url: "https://arxiv.org/abs/2608.26184", img: "/previews/tutortrace.jpg", live: "/papers/tutortrace.pdf" }, // first page of the paper
  illusion: {
    url: "https://www.youtube.com/watch?v=KBjp7t9403c&list=PLGh2XVbXlSVI&index=11&t=318s",
    // YouTube's own thumbnail, shown with the standard YouTube play button (the usual "video facade")
    img: "https://i.ytimg.com/vi/KBjp7t9403c/maxresdefault.jpg",
    imgFallback: "https://i.ytimg.com/vi/KBjp7t9403c/hqdefault.jpg",
    video: "youtube",
    live: "https://www.youtube-nocookie.com/embed/KBjp7t9403c?start=318&autoplay=1&rel=0",
  },
  cv: { url: "/david_barron_resume.pdf", img: "/previews/cv.jpg", live: "/david_barron_resume.pdf" },
  github: { url: "https://github.com/divadbaroon", img: "/previews/github.jpg" },
  x: { url: "https://x.com/DavidBarron410", img: "/previews/x.jpg" },
  scholar: { note: { label: "Google Scholar", body: "Profile coming soon." } },
  email: { url: "mailto:dbarron410@vt.edu", note: { label: "Email", body: "dbarron410@vt.edu" } },
  processes: { definition: true }, // drawn by ProcessDefinition.jsx
};

export const displayUrl = (u) =>
  (u && u.startsWith("/") ? "davidbarron.dev" + u : u || "").replace(/^https?:\/\/(www\.)?/, "").replace(/^mailto:/, "").replace(/\/$/, "");
