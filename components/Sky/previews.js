// What the preview card shows for each link.
//  img   – image shown on hover (the card only ever shows images; nothing loads live in it)
//  video – the img is a video thumbnail; the card shows the YouTube play button
//  live  – a page that allows being embedded (only our own pages and YouTube); it opens
//          full size in the browser window when the card is clicked.
//          Everything else (GitHub, X, arXiv…) is a screenshot, and clicking the
//          card just opens the real site in a new tab.
//  desc  – one-line description shown under the image
//  note  – a text card instead of a page
export const PREVIEWS = {
  engelbart: { url: "https://mathetic.com/engelbart", img: "/previews/engelbart.jpg", live: "https://mathetic.com/engelbart",
    desc: "A space for doing research alongside AI, with your tools, notes, and everything you’ve read." },
  mathetic: { url: "https://mathetic.com", img: "/previews/mathetic.jpg", live: "https://mathetic.com",
    desc: "Building tools that increase our capacity to learn, think, create, and discover." },
  tutortrace: { url: "https://arxiv.org/abs/2608.26184", img: "/previews/tutortrace.jpg", live: "/papers/tutortrace.pdf",
    desc: "A dataset and taxonomy of how students actually work with AI tutors, from 480 classroom sessions." }, // first page of the paper
  illusion: {
    url: "https://www.youtube.com/watch?v=KBjp7t9403c&list=PLGh2XVbXlSVI&index=11&t=318s",
    // YouTube's own thumbnail, shown with the standard YouTube play button (the usual "video facade")
    img: "https://i.ytimg.com/vi/KBjp7t9403c/maxresdefault.jpg",
    imgFallback: "https://i.ytimg.com/vi/KBjp7t9403c/hqdefault.jpg",
    video: "youtube",
    live: "https://www.youtube-nocookie.com/embed/KBjp7t9403c?start=318&autoplay=1&rel=0",
    desc: "Why output-based assessment breaks with AI, and what to reward instead.",
  },
};

export const displayUrl = (u) =>
  (u && u.startsWith("/") ? "davidbarron.dev" + u : u || "").replace(/^https?:\/\/(www\.)?/, "").replace(/^mailto:/, "").replace(/\/$/, "");
