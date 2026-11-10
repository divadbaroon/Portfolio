"use client";

import { useEffect, useRef } from "react";

// TODO before launch: /sky/cloud.png is Reese Chong's sprite (reesechong.com), used as a
// placeholder. Swap in our own sprite or get his permission before this goes live.
const SPRITE = "/sky/cloud.png";

// Four depth bands of one cloud sprite: small, faint, slow, screen-blended puffs up high;
// big, near-opaque, faster puffs low down. Each loops across the full width on its own timer.
function buildField() {
  let s = 21;
  const rnd = () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
  const bands = [
    { n: 8, top: [0, 10], w: [140, 230], a: [0.26, 0.3], d: [145, 175], screen: true },
    { n: 9, top: [9, 21], w: [210, 335], a: [0.34, 0.4], d: [110, 145], screen: true },
    { n: 13, top: [20, 46], w: [300, 460], a: [0.67, 0.74], d: [88, 114], screen: false },
    { n: 22, top: [45, 96], w: [410, 840], a: [0.82, 1.0], d: [40, 82], screen: false },
  ];
  const r = (lo, hi) => lo + rnd() * (hi - lo);
  const f = [];
  for (const b of bands)
    for (let i = 0; i < b.n; i++) {
      const dur = r(b.d[0], b.d[1]);
      f.push({
        top: r(b.top[0], b.top[1]) / 100,
        w: r(b.w[0], b.w[1]),
        a: r(b.a[0], b.a[1]),
        dur,
        phase: rnd(),
        flip: rnd() < 0.5,
        screen: b.screen,
      });
    }
  return f.sort((p, q) => p.top - q.top);
}

function blurred(img) {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const x = c.getContext("2d");
  x.filter = "blur(10px)";
  x.drawImage(img, 0, 0, 256, 256);
  return c;
}

function fade(ctx, h, stops) {
  const g = ctx.createLinearGradient(0, 0, 0, h);
  for (const [p, a] of stops) g.addColorStop(p, "rgba(0,0,0," + a + ")");
  return g;
}

function drawLayer(ctx, field, w, h, t, speed, img) {
  for (const p of field) {
    const frac = (((p.phase + (t * speed) / p.dur) % 1) + 1) % 1;
    const x = -p.w + frac * (w + p.w);
    const y = p.top * h;
    ctx.globalAlpha = Math.min(1, p.a);
    ctx.globalCompositeOperation = p.screen ? "screen" : "source-over";
    if (p.flip) {
      ctx.save();
      ctx.translate(x + p.w, y);
      ctx.scale(-1, 1);
      ctx.drawImage(img, 0, 0, p.w, p.w);
      ctx.restore();
    } else ctx.drawImage(img, x, y, p.w, p.w);
  }
  ctx.globalAlpha = 1;
}

export default function Clouds({ speed = 1 }) {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const field = buildField();
    const buf = document.createElement("canvas");
    let sprite = null;
    let soft = null;
    let raf = 0;
    const t0 = performance.now();
    const img = new Image();
    img.onload = () => {
      sprite = img;
      soft = blurred(img);
    };
    img.src = SPRITE;

    const fieldMask = [[0, 0], [0.16, 0.01], [0.26, 0.05], [0.36, 0.16], [0.46, 0.45], [0.55, 1], [1, 1]];
    const mul = (stops, m) => stops.map(([p, a]) => [p, +(a * m(p)).toFixed(3)]);
    const hazeMask = mul(fieldMask, (p) => (p < 0.18 ? p / 0.18 : p <= 0.38 ? 1 : Math.max(0, 1 - (p - 0.38) / 0.22)));
    const sharpMask = mul(fieldMask, (p) => Math.max(0, Math.min(1, (p - 0.18) / 0.4)));

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!sprite) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const w = cv.clientWidth;
      const h = cv.clientHeight;
      if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(h * dpr)) {
        cv.width = buf.width = Math.round(w * dpr);
        cv.height = buf.height = Math.round(h * dpr);
      }
      const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const sp = reduce ? 0 : speed;
      const t = (performance.now() - t0) / 1000;
      const ctx = cv.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const b = buf.getContext("2d");
      // soft haze layer
      b.setTransform(dpr, 0, 0, dpr, 0, 0);
      b.globalCompositeOperation = "source-over";
      b.clearRect(0, 0, w, h);
      drawLayer(b, field, w, h, t, sp, soft);
      b.globalCompositeOperation = "destination-in";
      b.fillStyle = fade(b, h, hazeMask);
      b.fillRect(0, 0, w, h);
      ctx.globalAlpha = 0.45;
      ctx.drawImage(buf, 0, 0, w, h);
      ctx.globalAlpha = 1;
      // sharp layer
      b.globalCompositeOperation = "source-over";
      b.clearRect(0, 0, w, h);
      drawLayer(b, field, w, h, t, sp, sprite);
      b.globalCompositeOperation = "destination-in";
      b.fillStyle = fade(b, h, sharpMask);
      b.fillRect(0, 0, w, h);
      ctx.drawImage(buf, 0, 0, w, h);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  return <canvas aria-hidden="true" ref={ref} className="sky-clouds" />;
}
