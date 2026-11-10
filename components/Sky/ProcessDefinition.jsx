// Dictionary popover for the word "processes" in the intro: one sense, plus why it matters.
// Rendered with spans so it can live inside the intro paragraph.
export default function ProcessDefinition({ id }) {
  return (
    <span className="sky-define" role="tooltip" id={id}>
      <span className="head">
        <span className="word">pro·cess</span>
        <span className="pron">/ˈprä-ˌses/</span>
        <i className="pos">noun</i>
      </span>
      <span className="sense">
        The path someone takes to an answer: the attempts, errors, questions, and revisions along the way.
      </span>
      <span className="why">
        <i>In learning:</i> the honest evidence of it. Outputs can be copied; the process can’t.
      </span>
    </span>
  );
}
