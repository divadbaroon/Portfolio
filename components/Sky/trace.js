// A tiny, local-only behavioral trace of how a visitor uses this page, plus a handful of rules that
// turn it into a few hedged sentences ("raw events → behavior → likely intent"). Nothing is sent
// anywhere: it lives in this browser's localStorage and can be cleared from the card.

const KEY = "db_trace_v1";
const MAX_EVENTS = 400;
const MAX_VISITS = 50;
const IDLE_MS = 20000;

const NAMES = {
  engelbart: "Engelbart",
  mathetic: "Mathetic",
  tutortrace: "TutorTrace",
  illusion: "the Illusion of Learning talk",
  cv: "my CV",
  linkedin: "LinkedIn",
  github: "GitHub",
  x: "Twitter",
  email: "my email",
};
const SITE = { linkedin: "LinkedIn", github: "GitHub", x: "Twitter", cv: "my CV" };
const TIMELINE = ["engelbart", "mathetic", "tutortrace", "illusion"];

let S = null; // persisted state
let listeners = new Set();
let lastInput = 0;
let idleSince = 0;
let hiddenAt = 0;
let lastClick = null; // {k, t} — an outbound click right before the tab was hidden

const now = () => Date.now();
const store = {
  load() {
    try {
      return JSON.parse(window.localStorage.getItem(KEY)) || null;
    } catch {
      return null;
    }
  },
  save() {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(S));
    } catch {
      /* private mode etc. — the card still works for this page view */
    }
  },
};

function referrer() {
  try {
    const r = document.referrer;
    if (!r) return null;
    const h = new URL(r).hostname.replace(/^www\./, "");
    if (h === window.location.hostname) return null;
    if (/linkedin/.test(h)) return "LinkedIn";
    if (/(^|\.)x\.com$|twitter|t\.co$/.test(h)) return "Twitter";
    if (/google\./.test(h)) return "Google";
    if (/github/.test(h)) return "GitHub";
    if (/mathetic/.test(h)) return "Mathetic";
    if (/scholar/.test(h)) return "Google Scholar";
    return h;
  } catch {
    return null;
  }
}

export function initTrace() {
  if (S || typeof window === "undefined") return S;
  const prev = store.load() || { visits: [], events: [] };
  const navEntry = performance.getEntriesByType ? performance.getEntriesByType("navigation")[0] : null;
  const t = now();
  const visit = {
    start: t,
    nav: (navEntry && navEntry.type) || "navigate", // navigate | reload | back_forward
    ref: referrer(),
    touch: window.matchMedia && window.matchMedia("(hover: none)").matches,
    hour: new Date(t).getHours(),
  };
  S = {
    visits: [...(prev.visits || []), visit].slice(-MAX_VISITS),
    events: prev.events || [],
    lastSeen: t,
    prevLastSeen: prev.lastSeen || null, // when this browser was last active on the page
  };
  // re-index session ids after trimming visits
  S.session = S.visits.length - 1;
  S.sessionStart = t;
  const firstKept = (prev.visits || []).length + 1 - S.visits.length;
  if (firstKept > 0) S.events = S.events.filter((e) => e.s >= firstKept).map((e) => ({ ...e, s: e.s - firstKept }));
  store.save();
  wire();
  return S;
}

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
const emit = () => listeners.forEach((fn) => fn());

export function log(type, k, extra) {
  if (!S) return;
  const e = { t: now(), s: S.session, type, ...(k ? { k } : {}), ...(extra || {}) };
  S.events.push(e);
  if (S.events.length > MAX_EVENTS) S.events = S.events.slice(-MAX_EVENTS);
  S.lastSeen = e.t;
  store.save();
  emit();
}

export function clearTrace() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {}
  const t = now();
  S = { visits: [{ start: t, nav: "navigate", ref: null, touch: false, hour: new Date(t).getHours() }], events: [], lastSeen: t, prevLastSeen: null, session: 0, sessionStart: t, cleared: true };
  store.save();
  emit();
}

// Hover timing: start on enter, log the dwell on leave (ignore pass-throughs).
const hoverStart = {};
export function hoverIn(k) {
  hoverStart[k] = now();
}
export function hoverOut(k) {
  const s = hoverStart[k];
  delete hoverStart[k];
  if (!s) return;
  const d = now() - s;
  if (d >= 350) log("hover", k, { d });
}
export function outboundClick(k) {
  lastClick = { k, t: now() };
  log("click", k);
}

function wire() {
  lastInput = now();
  const input = () => {
    const t = now();
    if (idleSince && t - idleSince >= IDLE_MS) log("idle", null, { d: t - idleSince });
    idleSince = 0;
    lastInput = t;
  };
  ["mousemove", "keydown", "scroll", "touchstart", "wheel"].forEach((ev) =>
    window.addEventListener(ev, input, { passive: true })
  );
  setInterval(() => {
    const t = now();
    if (!document.hidden && !idleSince && t - lastInput >= IDLE_MS) idleSince = lastInput;
    if (!document.hidden && S) {
      S.lastSeen = t;
      store.save();
    }
  }, 2000);
  document.addEventListener("visibilitychange", () => {
    const t = now();
    if (document.hidden) {
      hiddenAt = t;
      S.lastSeen = t;
      store.save();
    } else if (hiddenAt) {
      const d = t - hiddenAt;
      const via = lastClick && hiddenAt - lastClick.t < 4000 ? lastClick.k : null;
      if (d >= 1500) log("away", via, { d });
      hiddenAt = 0;
      lastClick = null;
      lastInput = t;
    }
  });
  document.addEventListener("mouseup", () => {
    const sel = window.getSelection && window.getSelection();
    const txt = sel ? String(sel).trim().replace(/\s+/g, " ") : "";
    if (txt.length >= 3 && txt.length <= 90 && sel.anchorNode && sel.anchorNode.parentElement && sel.anchorNode.parentElement.closest(".sky-main"))
      log("select", null, { text: txt });
  });
  document.addEventListener("copy", () => log("copytext"));
}

// ---------- inference ----------
// Not a log readout: guess what the visitor is after (testing it, evaluating me, curious about one piece
// of work, back for more) and answer with something useful. At most two short lines.

const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
export function dur(ms) {
  const s = Math.max(1, Math.round(ms / 1000));
  if (s < 60) return plural(s, "second");
  const m = Math.round(s / 60);
  if (m < 60) return plural(m, "minute");
  const h = Math.round(m / 60);
  if (h < 48) return plural(h, "hour");
  return plural(Math.round(h / 24), "day");
}

// What to offer once we think we know what someone is interested in.
const POINTERS = {
  engelbart: { t: "You seem most interested in Engelbart.", link: { label: "Early access is open", href: "https://mathetic.com/engelbart" } },
  mathetic: { t: "You seem most interested in Mathetic.", link: { label: "Say hi if that's your world", href: "mailto:dbarron410@vt.edu" } },
  tutortrace: { t: "You seem most interested in TutorTrace.", link: { label: "The paper and dataset are public", href: "https://arxiv.org/abs/2608.26184" } },
  illusion: { t: "You seem most interested in the talk.", link: { label: "Watch it from the key part", href: "https://www.youtube.com/watch?v=KBjp7t9403c&t=318s" } },
};

function dwellByKey(events) {
  const m = {};
  for (const e of events) {
    if (e.type === "hover") m[e.k] = (m[e.k] || 0) + e.d;
    if (e.type === "close") m[e.k] = (m[e.k] || 0) + e.d; // time spent inside counts more than a hover
  }
  return m;
}
function favourite(events) {
  const m = dwellByKey(events);
  let best = null;
  for (const k in m) if (POINTERS[k] && (!best || m[k] > m[best])) best = k;
  return best && m[best] >= 3000 ? best : null;
}

// Returns [{ t, link? }], most relevant first, max two.
export function infer() {
  if (!S) return [];
  const t = now();
  const all = S.events;
  const E = all.filter((e) => e.s === S.session);
  const visit = S.visits[S.session];
  const away = S.prevLastSeen ? visit.start - S.prevLastSeen : null;
  const opens = E.filter((e) => e.type === "proc");
  const out = [];
  const say = (x) => x && out.length < 2 && !out.some((o) => o.t === x.t) && out.push(x);

  if (S.cleared && E.length <= 1) return [{ t: "Cleared. As far as this page knows, you just arrived." }];

  // 1) Testing it: flipping it open repeatedly, or reopening it right after doing one or two things.
  //    Judged at the moment of each open (so the line doesn't change while it's showing), said once.
  const isTest = (i) => {
    const o = opens[i];
    const burst = opens.filter((e) => e.t <= o.t && o.t - e.t < 10000).length >= 3;
    const p = opens[i - 1];
    const n = p ? E.filter((e) => e.t > p.t && e.t < o.t && e.type !== "proc" && e.type !== "idle").length : 0;
    return burst || (p && o.t - p.t < 20000 && n >= 1 && n <= 3);
  };
  const last = opens.length - 1;
  if (last >= 1 && isTest(last)) {
    const first = opens.findIndex((_, i) => i >= 1 && isTest(i));
    if (first === last) say({ t: "Checking whether this reacts to what you do? It does. It's reading how you use the page, not just counting clicks." });
    else if (opens.filter((e) => opens[last].t - e.t < 10000).length >= 3) say({ t: "Still testing it. Try looking around the timeline for a bit, then come back." });
  }

  // 2) Reloaded to see if it forgets.
  const prevProc = all.filter((e) => e.s === S.session - 1 && e.type === "proc").pop();
  if (visit.nav === "reload" && prevProc && visit.start - prevProc.t < 10 * 60 * 1000 && opens.length <= 1)
    say({ t: "Reloaded to see if this would forget you? It doesn't. It lives in your browser, nowhere else." });

  // 3) Back after a while: pick up where they left off.
  if (visit.nav !== "reload" && away != null && away >= 30 * 60 * 1000 && opens.length <= 1) {
    const last = favourite(all.filter((e) => e.s === S.session - 1));
    say({ t: `Welcome back${last ? `. Last time you were most interested in ${POINTERS[last].t.replace("You seem most interested in ", "").replace(/\.$/, "")}` : ""}.`,
      link: last ? POINTERS[last].link : null });
  }

  // 4) What they care about this visit.
  const fav = favourite(E);
  if (fav) say(POINTERS[fav]);

  // 5) Evaluating me rather than the work.
  const clicks = E.filter((e) => e.type === "click");
  if (clicks.some((e) => e.k === "cv" || e.k === "linkedin"))
    say({ t: "Looks like you're sizing me up. The timeline is the short version; the CV has the rest.", link: { label: "Open the CV", href: "/david_barron_resume.pdf" } });

  // 6) Scanning.
  const hov = E.filter((e) => e.type === "hover");
  const seen = new Set(hov.map((e) => e.k));
  const quick = hov.reduce((a, e) => a + e.d, 0);
  if (seen.size >= 3 && quick < 6000 && !fav)
    say({ t: "You're scanning. If you only open one thing, make it TutorTrace; it's the clearest picture of the work.", link: { label: "TutorTrace", href: "https://arxiv.org/abs/2608.26184" } });

  // 7) Came straight for the idea.
  if (opens.length && opens.length <= 2 && opens[0].t - S.sessionStart < 12000 && !E.some((e) => e.t < opens[0].t && e.type === "hover"))
    say({ t: "You came for the idea first. The talk is the best ten-minute version of it.", link: { label: "Watch it", href: "https://www.youtube.com/watch?v=KBjp7t9403c&t=318s" } });

  // 8) Small, warm acknowledgements.
  if (E.some((e) => e.type === "email")) say({ t: "You copied my email. I'll look out for it." });

  if (!out.length) say({ t: "Not much to go on yet. Look around, then check back; this updates as you do." });
  return out;
}
