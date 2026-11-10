// The "processes" card: the first page of the essay behind the word, fading out at the bottom.
// Clicking the card opens the full paper (see PREVIEWS.processes.live).
export default function EssayNote() {
  return (
    <div className="sky-essay">
      <div className="meta">
        Essay · FutureHCI ’26 · <span className="award">2nd Best Paper</span>
      </div>
      <h3>The Illusion of Learning</h3>
      <div className="sub">Toward Growth-Centered AI</div>
      <div className="byline">David Barron</div>
      <p>
        Struggle is the forcing function of learning. Without struggle, knowledge gain is temporary and fails to
        transfer. Human tutors know this intuitively, reorienting when and how they intervene based on their
        students’ observable effort, persistence, and frustration. Bloom envisioned a tutor for every learner four
        decades ago, and while Large Language Models are the first technology capable of delivering it, they have
        arrived pointed in the opposite direction.
      </p>
      <div className="more">Read the essay →</div>
    </div>
  );
}
