"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Clouds from "./Clouds";
import { PREVIEWS, displayUrl } from "./previews";

const LINKS = [
  { k: "cv", href: "/david_barron_resume.pdf", label: "CV" },
  { k: "scholar", href: "#", label: "Google Scholar" },
  { k: "github", href: "https://github.com/divadbaroon", label: "GitHub" },
  { k: "x", href: "https://x.com/DavidBarron410", label: "X" },
  { k: "email", href: "mailto:dbarron410@vt.edu", label: "Email" },
];

// Each row: date, then parts. A part is plain text, a "work" link (underlined), a "sub" link (quiet),
// or grey context text. White = yours and interactive; grey = where it happened, not a link.
const WORK = [
  { date: "Now", now: true, parts: [{ work: "engelbart", text: "Engelbart" }, { text: "Mathetic", muted: true }] },
  { date: "Aug '26", parts: ["Cofounded", { work: "mathetic", text: "Mathetic" }, { text: "Surplus incubator", muted: true }] },
  { date: "Jul '26", parts: [{ work: "tutortrace", text: "TutorTrace" }, { text: "UIST '26", muted: true }] },
  { date: "Jul '26", parts: [{ work: "illusion", text: "The Illusion of Learning" }, { text: "FutureHCI '26", muted: true }] },
  { date: "Jan '26", parts: ["Started PhD in CS", { text: "Virginia Tech", muted: true }] },
  { date: "Jan '25", parts: ["Started MS in CS", { text: "Virginia Tech", muted: true }] },
  { date: "Oct '24", parts: ["Research intern", { text: "PRIME Lab", muted: true }] },
];

const KEYS = Object.keys(PREVIEWS);
export default function SkyHome() {
  const [active, setActive] = useState("engelbart"); // what the card shows once visible
  const [visible, setVisible] = useState(false); // hidden until the first hover; click-away hides it again
  const [open, setOpen] = useState(null); // key shown full size in the browser window
  const [top, setTop] = useState(192);

  const asideRef = useRef(null);
  const navRef = useRef(null);

  // Card top sits just under the underline of the CV / Scholar / GitHub / X / Email row.
  const place = useCallback(() => {
    const a = asideRef.current;
    const l = navRef.current && navRef.current.querySelector("a");
    if (!a || !l) return;
    setTop(Math.round(l.getBoundingClientRect().bottom - a.getBoundingClientRect().top) + 8);
  }, []);

  useLayoutEffect(() => {
    place();
    window.addEventListener("resize", place);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);
    return () => window.removeEventListener("resize", place);
  }, [place]);

  // Clicking anywhere except a previewable link, the card or the browser window hides the card.
  useEffect(() => {
    const onDown = (e) => {
      if (e.target.closest && e.target.closest("[data-pv], .sky-card, .sky-overlay")) return;
      setVisible(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // Esc closes the browser window; the page behind doesn't scroll while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const show = (k) => {
    setActive(k);
    setVisible(true);
  };
  const pv = (k) => ({ "data-pv": k, onMouseEnter: () => show(k), onFocus: () => show(k) });

  const cur = PREVIEWS[active];
  const expandable = !!cur.live;
  const clickable = !!(cur.live || cur.url);
  // Pages that allow embedding open full size in the browser window; everything else opens the real site.
  const openCard = () => {
    if (cur.live) setOpen(active);
    else if (cur.url && cur.url.startsWith("mailto:")) window.location.href = cur.url;
    else if (cur.url) window.open(cur.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="sky-root">
      <div aria-hidden="true" className="sky-glow" />
      <Clouds />

      <div className="sky-wrap">
        <main className="sky-main">
          <h1 className="sky-name">David Barron</h1>
          <p className="sky-intro">
            I build systems that understand and reward the{" "}
            <em>processes</em>{" "}
            behind learning and exceptional research.
          </p>
          <nav className="sky-links" aria-label="Elsewhere" ref={navRef}>
            {LINKS.map((l) => (
              <a key={l.k} href={l.href} {...pv(l.k)}>
                {l.label}
              </a>
            ))}
          </nav>

          <section aria-labelledby="rw-h" className="sky-recent">
            <h2 id="rw-h">Timeline</h2>
            <ol>
              {WORK.map((row, i) => (
                <li key={i}>
                  <span className={row.now ? "sky-date now" : "sky-date"}>{row.date}</span>
                  <span>
                    {row.parts.map((p, j) => {
                      const sep = j ? " " : "";
                      if (typeof p === "string") return sep + p;
                      const k = p.work || p.sub;
                      if (!k)
                        return (
                          <span key={j}>
                            {sep}
                            <span className="ctx">{p.text}</span>
                          </span>
                        );
                      return (
                        <span key={j}>
                          {sep}
                          <a
                            href={PREVIEWS[k].url}
                            className={p.work ? "work" : "sub"}
                            {...pv(k)}
                          >
                            {p.text}
                          </a>
                        </span>
                      );
                    })}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </main>

        <aside className="sky-aside" aria-hidden="true" ref={asideRef}>
          <div
            className={"sky-card" + (expandable ? " expandable" : clickable ? " clickable" : "")}
            style={{ top, opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
            onClick={openCard}
          >
            <div className="sky-frame">
              {KEYS.filter((k) => PREVIEWS[k].img).map((k) => (
                <img
                  key={k}
                  src={PREVIEWS[k].img}
                  alt=""
                  style={{ opacity: k === active ? 1 : 0 }}
                  onError={(e) => {
                    // maxresdefault doesn't exist for every YouTube video
                    const fb = PREVIEWS[k].imgFallback;
                    if (fb && e.currentTarget.src !== fb) e.currentTarget.src = fb;
                  }}
                />
              ))}
              {KEYS.filter((k) => PREVIEWS[k].video).map((k) => (
                <span key={k} className="sky-play" aria-hidden="true" style={{ opacity: k === active ? 1 : 0 }}>
                  <svg viewBox="0 0 68 48" width="68" height="48">
                    <path
                      className="bg"
                      d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                    />
                    <path d="M45 24 27 14v20" fill="#fff" />
                  </svg>
                </span>
              ))}
              {KEYS.filter((k) => PREVIEWS[k].note).map((k) => (
                <div key={k} className="sky-note" style={{ opacity: k === active ? 1 : 0 }}>
                  <div className="label">{PREVIEWS[k].note.label}</div>
                  <div className="body">{PREVIEWS[k].note.body}</div>
                </div>
              ))}
            </div>
            {clickable && (
              <span className="sky-hint">
                {(cur.live || "").endsWith(".pdf") ? "Click to read" : cur.video ? "Click to play" : cur.live ? "Click to explore" : cur.url.startsWith("mailto:") ? "Click to email" : "Opens in new tab ↗"}
              </span>
            )}
          </div>
        </aside>
      </div>

      {open && <BrowserWindow k={open} onClose={() => setOpen(null)} />}
    </div>
  );
}

function BrowserWindow({ k, onClose }) {
  const p = PREVIEWS[k];
  const closeRef = useRef(null);
  const [ready, setReady] = useState(false);
  useEffect(() => closeRef.current && closeRef.current.focus(), []);
  return (
    <div className="sky-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="sky-window" role="dialog" aria-modal="true" aria-label={displayUrl(p.url)}>
        <div className="sky-bar">
          <span className="dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="url">{displayUrl(p.url)}</span>
          <a className="btn" href={p.url} target="_blank" rel="noopener noreferrer">
            Open in new tab ↗
          </a>
          <button className="btn close" ref={closeRef} onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="sky-view">
          {p.img && <img src={p.img} alt="" style={{ opacity: ready ? 0 : 1 }} />}
          <iframe
            src={p.live}
            title={displayUrl(p.url)}
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            onLoad={() => setReady(true)}
            style={{ opacity: ready ? 1 : 0 }}
          />
        </div>
      </div>
    </div>
  );
}
