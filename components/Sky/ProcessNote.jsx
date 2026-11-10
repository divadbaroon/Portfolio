// The "processes" card: two students reach the same correct answer by very different routes.
// The paths draw in each time the card appears (skipped under reduced motion).
export default function ProcessNote({ on }) {
  return (
    <div className={"sky-proc" + (on ? " is-on" : "")}>
      <div className="label">Processes</div>
      <svg viewBox="0 0 480 172" role="img" aria-label="Two students reach the same correct answer: one pastes it in two minutes, the other gets there in 45 minutes through errors, questions and revisions.">
        <text x="452" y="14" className="col">Final answer</text>

        {/* Student A: straight to the answer */}
        <text x="16" y="34" className="who">Student A</text>
        <text x="96" y="34" className="meta">pasted the answer · 2 min</text>
        <line x1="22" y1="52" x2="430" y2="52" className="a" />
        <circle cx="22" cy="52" r="5" className="start" />
        
        {/* Student B: errors, questions, revisions */}
        <text x="16" y="110" className="who">Student B</text>
        <path d="M22 140 C 50 112, 78 166, 112 140 S 176 112, 212 140 S 286 168, 322 136 S 392 136, 430 140" className="b" />
        <circle cx="22" cy="140" r="5" className="start" />
        <g className="nodes">
          <circle cx="112" cy="140" r="4.5" style={{ transitionDelay: ".35s" }} />
          <text x="112" y="166" style={{ transitionDelay: ".35s" }}>error</text>
          <circle cx="212" cy="140" r="4.5" style={{ transitionDelay: ".6s" }} />
          <text x="212" y="166" style={{ transitionDelay: ".6s" }}>asked</text>
          <circle cx="322" cy="136" r="4.5" style={{ transitionDelay: ".85s" }} />
          <text x="322" y="166" style={{ transitionDelay: ".85s" }}>revised</text>
        </g>
        <text x="96" y="110" className="meta">worked through it · 45 min</text>

        {/* same result */}
        <g className="done">
          <circle cx="446" cy="52" r="11" />
          <path d="M440.5 52.5 l4 4 l7 -8" />
          <circle cx="446" cy="140" r="11" />
          <path d="M440.5 140.5 l4 4 l7 -8" />
        </g>
      </svg>
      <p className="line">Same final answer. Only the process shows who learned.</p>
    </div>
  );
}
