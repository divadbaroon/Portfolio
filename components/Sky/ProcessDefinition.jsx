// The "processes" card: a dictionary entry for the word, and why it matters.
export default function ProcessDefinition() {
  return (
    <div className="sky-def">
      <div className="head">
        <span className="word">pro·cess</span>
        <span className="pron">/ˈprä-ˌses/</span>
        <span className="pos">noun</span>
      </div>
      <p className="sense">
        The path someone takes to an answer: the attempts, errors, questions, and revisions along the way.
      </p>
      <div className="why">
        <div className="why-label">Why it matters</div>
        <p>
          Two people can reach the same answer, and only one of them learned. Outputs can be copied. The process
          can’t, which makes it the honest evidence of learning.
        </p>
      </div>
    </div>
  );
}
