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
const ORD = ["", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];
const ord = (n) => ORD[n] || `${n}th`;
const list = (xs) => (xs.length <= 1 ? xs.join("") : xs.slice(0, -1).join(", ") + " and " + xs[xs.length - 1]);
const name = (k) => NAMES[k] || k;
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

function dwellByKey(events) {
  const m = {};
  for (const e of events) if (e.type === "hover") m[e.k] = (m[e.k] || 0) + e.d;
  return m;
}
function top(m) {
  let best = null;
  for (const k in m) if (!best || m[k] > m[best]) best = k;
  return best;
}

// Returns up to three sentences, most telling first.
export function infer() {
  if (!S) return [];
  const t = now();
  const all = S.events;
  const E = all.filter((e) => e.s === S.session);
  const visit = S.visits[S.session];
  const prevVisits = S.visits.slice(0, -1);
  const away = S.prevLastSeen ? visit.start - S.prevLastSeen : null;
  const here = t - S.sessionStart;
  const opens = E.filter((e) => e.type === "proc");
  const nOpen = opens.length;
  const prevOpen = nOpen >= 2 ? opens[nOpen - 2] : null;
  const C = []; // candidates: [priority, sentence]
  const add = (p, s) => s && C.push([p, s]);

  if (S.cleared && E.length <= 1) return ["Cleared. As far as this page knows, you just arrived."];

  // --- arrivals ---------------------------------------------------------
  if (visit.nav === "reload" && away != null && away < 30 * 60 * 1000) {
    const prevProc = all.filter((e) => e.s === S.session - 1 && e.type === "proc").pop();
    add(nOpen <= 1 ? 96 : 60,
      prevProc
        ? `You reloaded the page ${dur(visit.start - prevProc.t)} after last looking at this — probably to see if I'd remember. I do (only in your browser).`
        : `You reloaded the page. Checking whether anything changes on a fresh load?`);
  } else if (prevVisits.length && away != null) {
    const prevE = all.filter((e) => e.s === S.session - 1);
    const fav = top(dwellByKey(prevE));
    if (away >= 30 * 60 * 1000) {
      add(92, `Welcome back — it's been ${dur(away)} since you were last here (visit ${prevVisits.length + 1}).`);
      if (fav) add(70, `Last time you spent the longest on ${name(fav)}.`);
    } else if (visit.nav === "back_forward") {
      add(84, `You came back with the back button ${dur(away)} after leaving.`);
    } else {
      add(84, `You left and came back ${dur(away)} later.`);
    }
  }
  if (visit.ref && nOpen <= 1) add(40, `You arrived from ${visit.ref}.`);

  // --- the card itself --------------------------------------------------
  if (nOpen === 1 && visit.nav !== "reload" && E.indexOf(opens[0]) === E.findIndex((e) => e.type !== "select" && e.type !== "copytext") && opens[0].t - S.sessionStart < 12000)
    add(88, `You opened this ${dur(opens[0].t - S.sessionStart)} after arriving, before anything else — you came for the idea.`);
  if (prevOpen) {
    const since = E.filter((e) => e.t > prevOpen.t && e.type !== "proc");
    const looked = Object.entries(dwellByKey(since)).sort((a, b) => b[1] - a[1]);
    const did = [];
    if (looked.length) did.push("looked at " + list(looked.slice(0, 3).map(([k, d]) => `${name(k)} (${dur(d).replace(/ seconds?/, "s")})`)));
    const opened = since.filter((e) => e.type === "open").map((e) => name(e.k));
    if (opened.length) did.push("opened " + list([...new Set(opened)]));
    const clicked = since.filter((e) => e.type === "click").map((e) => name(e.k));
    if (clicked.length) did.push("went to " + list([...new Set(clicked)]));
    if (since.some((e) => e.type === "email")) did.push("copied my email");
    const gap = dur(t - prevOpen.t);
    if (nOpen === 2)
      add(100, did.length
        ? `You came back to this ${gap} later — probably to see if it changed. It did: since then you ${list(did)}.`
        : `You came back ${gap} later to see if it changed. Nothing new yet — try looking around, then come back.`);
    else
      add(99, `That's the ${ord(nOpen)} time you've opened this. You're testing whether it's real — fair.${did.length ? ` Since last time you ${list(did)}.` : ""}`);
  }

  // --- the timeline ------------------------------------------------------
  const hovers = E.filter((e) => e.type === "hover");
  const dwell = dwellByKey(hovers);
  const seen = TIMELINE.filter((k) => dwell[k]);
  const totalDwell = seen.reduce((a, k) => a + dwell[k], 0);
  if (seen.length === TIMELINE.length && totalDwell < 7000) add(74, `You skimmed every item on the timeline in ${dur(totalDwell)} — scanning, not reading.`);
  else if (seen.length === TIMELINE.length) add(66, "You've looked at everything on the timeline at least once. Thorough.");
  const fav = top(dwell);
  if (fav && dwell[fav] >= 4000) add(68, `You lingered on ${name(fav)} (${dur(dwell[fav])}) longer than anything else.`);
  const revisit = Object.keys(dwell).find((k) => hovers.filter((e) => e.k === k).length >= 3);
  if (revisit) add(62, `You keep going back to ${name(revisit)}.`);

  // --- opening things ------------------------------------------------------
  const closes = E.filter((e) => e.type === "close");
  const quick = closes.find((e) => e.d < 2500);
  if (quick) add(76, `You opened ${name(quick.k)} and closed it within ${dur(quick.d)} — not what you expected?`);
  const longest = closes.reduce((a, e) => (!a || e.d > a.d ? e : a), null);
  if (longest && longest.d >= 8000) add(72, `You spent ${dur(longest.d)} inside ${name(longest.k)}.`);

  // --- leaving and coming back --------------------------------------------
  const aways = E.filter((e) => e.type === "away");
  const viaLink = [...aways].reverse().find((e) => e.k);
  if (viaLink) add(82, `You went to ${SITE[viaLink.k] || name(viaLink.k)} for ${dur(viaLink.d)}, then came back.`);
  else if (aways.length) {
    const last = aways[aways.length - 1];
    add(58, `You switched to another tab for ${dur(last.d)}, then came back here.`);
  }
  const clicks = E.filter((e) => e.type === "click");
  if (clicks.length && clicks[0].k === "cv") add(64, "You went for my CV first — evaluating, it seems.");

  // --- small signals --------------------------------------------------------
  if (E.some((e) => e.type === "email")) add(90, "You copied my email. Say hi.");
  const sel = [...E].reverse().find((e) => e.type === "select");
  if (sel) add(75, `You highlighted “${sel.text}”.`);
  const idle = E.filter((e) => e.type === "idle").pop();
  if (idle) add(55, `You went still for ${dur(idle.d)} — reading, or thinking.`);
  if (visit.touch && nOpen <= 1) add(30, "You tapped instead of hovering — you're on a phone.");
  if (visit.hour >= 0 && visit.hour < 5) add(36, "Up late.");
  if (prevVisits.length >= 3 && away != null && away >= 30 * 60 * 1000) add(50, `This is visit ${prevVisits.length + 1}. You keep coming back.`);

  // --- fallback --------------------------------------------------------------
  if (!C.length) {
    if (!hovers.length) add(10, `You've been here ${dur(here)}. You read the intro and came straight here.`);
    else add(10, `You've been here ${dur(here)} and looked at ${list(seen.map(name))}.`);
  }

  C.sort((a, b) => b[0] - a[0]);
  const out = [];
  for (const [, s] of C) if (!out.includes(s) && out.length < 3) out.push(s);
  return out.map(cap);
}
