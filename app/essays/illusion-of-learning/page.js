export const metadata = {
  title: "The Illusion of Learning — David Barron",
  description: "Why I care about how people get to an answer, not just the answer.",
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
        <p className="essay-sub">Why I care about how people get to an answer, not just the answer.</p>

        <div className="essay-byline">
          <img src="/headshot.png" alt="" width="40" height="40" />
          <div>
            <div className="name">David Barron</div>
            <div className="date">Aug 17, 2026 · 1 min read</div>
          </div>
        </div>

        <div className="essay-body">
          <p>
            Struggle is the forcing function of learning. Good tutors know this. They watch how hard a student is
            trying and decide when to step in.
          </p>
          <p>AI doesn’t. It gives the same answer to a student who has tried everything and one who has tried nothing.</p>
          <p>
            In one of our classroom deployments, two students reached the exact same code. One took 90 seconds. The
            other spent seven minutes writing, deleting, and rerunning. To the AI, they looked identical. And students
            who put in no effort rated their understanding just as high as those who struggled the most.
          </p>
          <p>
            So I build systems that see the process: the edits, the errors, the questions. Not just the final answer,
            because that’s where the learning actually happens.
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
