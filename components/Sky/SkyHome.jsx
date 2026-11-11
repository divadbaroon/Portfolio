"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Clouds from "./Clouds";
import { STARS } from "./stars";
import { PREVIEWS, displayUrl } from "./previews";

const LINKS = [
  { k: "cv", href: "/david_barron_resume.pdf", label: "CV" },
  { k: "linkedin", href: "https://www.linkedin.com/in/david-barron-8248a11aa/", label: "LinkedIn" },
  // { k: "scholar", href: "TODO: profile URL", label: "Google Scholar" }, — add back once the profile exists
  { k: "github", href: "https://github.com/divadbaroon", label: "GitHub" },
  { k: "x", href: "https://x.com/DavidBarron410", label: "Twitter" },
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
// Every outbound link opens in a new tab so the homepage stays put.
const newTab = (href) =>
  href && !href.startsWith("mailto:") && href !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {};
export default function SkyHome() {
  const [active, setActive] = useState("engelbart"); // what the card shows once visible
  const [visible, setVisible] = useState(false); // hidden until the first hover; click-away hides it again
  const [open, setOpen] = useState(null); // key shown full size in the browser window
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(0);
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

  // The card is a look-only preview: it shows while a timeline link is hovered and fades out when the
  // pointer leaves. Clicking the link itself opens the item.
  const show = (k) => {
    setActive(k);
    setVisible(true);
  };
  const hide = () => setVisible(false);
  // Embeddable items (our pages, the paper PDF, the talk) open in the in-page browser window;
  // modifier-clicks still open a real new tab, and everything else follows its link normally.
  const openLink = (k) => (e) => {
    if (!PREVIEWS[k].live || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    setVisible(false);
    setOpen(k);
  };
  const copyEmail = (e) => {
    if (!navigator.clipboard) return; // fall back to the mailto link
    e.preventDefault();
    navigator.clipboard.writeText("dbarron410@vt.edu").then(() => {
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 1800);
    }, () => (window.location.href = "mailto:dbarron410@vt.edu"));
  };
  const pv = (k) => ({
    "data-pv": k,
    onMouseEnter: () => show(k),
    onMouseLeave: hide,
    onFocus: () => show(k),
    onBlur: hide,
    onClick: openLink(k),
  });

  return (
    <div className="sky-root">
      <div aria-hidden="true" className="sky-glow" />
      <div aria-hidden="true" className="sky-stars">
        {STARS.map((t, i) => (
          <span
            key={i}
            className={t.tw ? "tw" : undefined}
            style={{
              left: t.x + "%",
              top: t.y + "%",
              width: t.s,
              height: t.s,
              opacity: t.o,
              backgroundColor: t.c,
              boxShadow: t.g ? `0 0 ${Math.round(t.s * 2.5)}px rgba(220,230,255,.45)` : undefined,
              animationDelay: t.tw ? `-${t.d}s` : undefined,
            }}
          />
        ))}
      </div>
      <Clouds />

      <div className="sky-wrap">
        <main className="sky-main">
          <h1 className="sky-name">David Barron</h1>
          <p className="sky-intro">
            I build systems that understand and reward the{" "}
            <em>behavioral processes</em>{" "}
            behind learning and exceptional research.
          </p>
          {/* Plain links: no preview card. Email copies the address instead of opening a mail app. */}
          <nav className="sky-links" aria-label="Elsewhere" ref={navRef}>
            {LINKS.map((l) =>
              l.k === "email" ? (
                <span key={l.k} className="sky-email">
                  <a href={l.href} onClick={copyEmail}>
                    {l.label}
                  </a>
                  <span className={"sky-copied" + (copied ? " on" : "")} role="status" aria-live="polite">
                    {copied ? "Copied dbarron410@vt.edu" : ""}
                  </span>
                </span>
              ) : (
                <a key={l.k} href={l.href} {...newTab(l.href)}>
                  {l.label}
                </a>
              )
            )}
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
                            {...newTab(PREVIEWS[k].url)}
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
            className="sky-card"
            // quick fade in, slower fade out so it doesn't blink away
            style={{
              top,
              opacity: visible ? 1 : 0,
              pointerEvents: "none",
              transition: visible ? "opacity 0.18s ease-out" : "opacity 0.5s ease-in-out",
            }}
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
          </div>
        </aside>
      </div>

      {open && <BrowserWindow k={open} onClose={() => setOpen(null)} />}
    </div>
  );
}

function BrowserWindow({ k, onClose }) {
  const p = PREVIEWS[k];
  const winRef = useRef(null);
  const [ready, setReady] = useState(false);
  const isPdf = (p.live || "").endsWith(".pdf");
  // Focus the window itself (not the close button) so keyboard users land inside it without a ring on open.
  useEffect(() => winRef.current && winRef.current.focus(), []);
  return (
    <div className="sky-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="sky-window" role="dialog" aria-modal="true" aria-label={displayUrl(p.url)} tabIndex={-1} ref={winRef}>
        <div className="sky-bar">
          <span className="dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="url">{displayUrl(p.url)}</span>
          <a className="btn" href={p.url} target="_blank" rel="noopener noreferrer">
            Open in new tab
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path d="M5.5 4.5h6v6M11.5 4.5l-7 7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <button className="btn close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="sky-view">
          {!ready && <span className="sky-loading" aria-label="Loading" />}
          <iframe
            src={isPdf ? p.live + "#view=FitH&toolbar=0" : p.live}
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
