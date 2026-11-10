export const metadata = {
  title: "The Illusion of Learning — David Barron",
  description: "AI rewards requests, not effort. We are creating a generation of learners who do not know they are not learning.",
};

export default function Essay() {
  return (
    <div className="essay-page">
      <header className="essay-top">
        <a href="/" target="_top">
          David Barron
        </a>
      </header>

      <article className="essay">
        <h1>The Illusion of Learning</h1>
        <p className="essay-sub">
          AI rewards requests, not effort. We are creating a generation of learners who do not know they are not
          learning.
        </p>

        <div className="essay-byline">
          <img src="/headshot.png" alt="" width="40" height="40" />
          <div>
            <div className="name">David Barron</div>
            <div className="date">Aug 17, 2026 · 5 min read</div>
          </div>
        </div>

        <div className="essay-body">
          <p>
            Struggle is the forcing function of learning. Without struggle, knowledge gain is temporary and fails to
            transfer. Human tutors know this intuitively. They watch a student’s effort, persistence, and frustration,
            and decide when and how to step in.
          </p>
          <p>
            Bloom envisioned a tutor for every learner four decades ago. Large language models are the first
            technology capable of delivering it, and they have arrived pointed in the opposite direction.
          </p>

          <h2>Tutors reward effort. AI rewards requests.</h2>
          <p>
            Asking an AI costs nothing, so learners find themselves in environments that not only fail to reward
            effort but are blind to it. The model gives the same response to a student who has tried everything and
            one who has tried nothing.
          </p>
          <p>
            Even more troubling, it creates a facade of understanding. Students who lean on AI report high
            understanding while failing to transfer what they learned to similar problems. We are creating a
            generation of learners who do not know they are not learning.
          </p>

          <h2>Same code, different story</h2>
          <p>
            Across eight introductory programming courses, I recorded what students did before they asked the AI for
            help. Two of them arrived at their first question with exactly the same code:
          </p>
          <pre>
            <code>{`grade_book = [[88,92,75],[70,85,90],[95,88,82]]
grade_book.append([78,84,91])`}</code>
          </pre>
          <p>
            The first got there in 90 seconds, with 23 edits and a single run, then asked for the “command for
            changing a value in a list.” The second spent over seven minutes: 97 edits, 70 characters deleted, three
            runs. Then they asked how to “update the first student’s third score to 80 if it is a list within a list.”
          </p>
          <p>
            To the model, these two students look identical. Same code, a similar question. Only their behavior shows
            that one struggled and the other did not.
          </p>
          <p>
            The pattern held at scale. Across 664 students and 882,467 recorded events, about a third of the questions
            sent to the AI came after no attempt at all. And when we asked students afterward how well they understood
            the material, those who put in no effort rated themselves the same as those who struggled the most: 3.82
            versus 3.75 out of 5.
          </p>

          <h2>Guardrails are not enough</h2>
          <p>
            The usual fix is a guardrail in the prompt, a tutor that asks Socratic questions instead of handing over
            answers. It helps. But a learner who wants the solution will answer each Socratic question with shorter,
            lower-effort queries until they get it.
          </p>
          <p>
            More importantly, guardrails still cannot see the learner. It is as if a human tutor only opened their eyes
            after the student asked their question.
          </p>

          <h2>Systems with their eyes open</h2>
          <p>
            Growth is a byproduct of remaining in the conditions that make its arrival inevitable. Those conditions
            show up in behavior, and behavior can be observed: the edits, runs, errors, pauses, and questions that tell
            the story of how a learner got to where they are. A system that sees that story can respond the way a good
            tutor does, and produce growth as a byproduct rather than as an explicit goal.
          </p>
          <p>
            It changes how we assess, too. We can no longer assess students only on what they produce, but on how they
            arrived at it, and whether they can reproduce it without help. The old way of assessing students by what
            they produce is dead. The only way forward is by what they did.
          </p>
          <p>
            This is not a call to take AI out of classrooms. It is a call to build systems whose eyes are open:
            watching how understanding is built, not merely what is produced.
          </p>
        </div>

        <footer className="essay-foot">
          Adapted from my paper <em>The Illusion of Learning: Toward Growth-Centered AI</em>, which received the 2nd
          Best Paper award at FutureHCI ’26.{" "}
          <a href="/papers/illusion-of-learning.pdf" target="_blank" rel="noopener noreferrer">
            Read the paper
          </a>{" "}
          ·{" "}
          <a
            href="https://www.youtube.com/watch?v=KBjp7t9403c&list=PLGh2XVbXlSVI&index=11&t=318s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch the talk
          </a>
        </footer>
      </article>
    </div>
  );
}
