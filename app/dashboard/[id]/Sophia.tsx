import React from "react";
import Image from "next/image";

const Sophia = () => {
  return (
   
      <div className="mt-9 w-full p-5 border border-neutral-700 rounded-2xl h-full bg-[#1C1C1C] text-[#f7f8f8]">
        {/* Hero Section */}
        <header className="pt-10 pb-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <p className="text-[#8a8f98] text-[13px] tracking-[-0.01em] mb-6" style={{ lineHeight: 1.5 }}>
              <span className="hover:text-[#f7f8f8] cursor-pointer transition-colors">Projects</span>
              <span className="mx-2 text-[#62666d]">/</span>
              <span className="hover:text-[#f7f8f8] cursor-pointer transition-colors">Research</span>
            </p>

            {/* Title */}
            <h1 
              className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-semibold tracking-[-0.022em] mb-6"
              style={{ lineHeight: 1.1 }}
            >
              Sophia: Multimodal AI
              <br />
              Tutoring System
            </h1>

            {/* Hero Image */}
            <div className="mt-10 mb-8">
              <Image
                width={1200}
                height={700}
                className="rounded-lg w-full border border-[#23252a]"
                src="/sophia-thumb.png"
                alt="Sophia AI Tutoring Interface"
              />
            </div>

            {/* Author & Date */}
            <p className="text-[#8a8f98] text-[13px] mt-8" style={{ lineHeight: 1.5 }}>
              David Barron
              <span className="mx-2 text-[#62666d]">·</span>
              October 2024
            </p>
          </div>
        </header>

        {/* Intro paragraph */}
        <section className="px-6 pb-16">
          <div className="max-w-[624px] mx-auto">
            <p 
              className="text-[1.0625rem] md:text-[1.125rem] text-[#d0d6e0]"
              style={{ lineHeight: 1.6 }}
            >
              Sophia is a multimodal AI tutoring system designed to help students 
              identify and remediate conceptual misunderstandings in data structures 
              and algorithms. Deployed in a junior-level course at Virginia Tech, 
              it achieved a 3.95/5.0 satisfaction rating across 70+ students.
            </p>
          </div>
        </section>

        {/* Main content */}
        <article className="px-6">
          <div className="max-w-[624px] mx-auto">
          
            <h3 
              className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
              style={{ lineHeight: 1.33 }}
            >
              What is Sophia?
            </h3>

            <p 
              className="text-[#8a8f98] tracking-[-0.011em] mb-6"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              Sophia is a multimodal AI tutoring system that helps students identify and remediate 
              conceptual misunderstandings in data structures and algorithms. Deployed in a junior-level 
              data structures course at Virginia Tech, Sophia achieved a satisfaction rating of 3.95/5.0 
              across 70+ students while addressing fundamental challenges in computer science education.
            </p>

            <p 
              className="text-[#8a8f98] tracking-[-0.011em] mb-6"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              Unlike traditional LLM-based tutoring systems that often provide direct answers, Sophia 
              uses dynamic concept mapping to understand each student&apos;s knowledge state and guides 
              them toward self-discovery of their misconceptions through targeted pedagogical interventions.
            </p>

            <h3 
              className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
              style={{ lineHeight: 1.33 }}
            >
              Dynamic Concept Mapping
            </h3>

            <p 
              className="text-[#8a8f98] tracking-[-0.011em] mb-6"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              At its foundation, Sophia generates and refines a dynamic concept map based on all available 
              student context, including the student&apos;s current task, code submissions, terminal output, 
              IDE interactions, and conversation history. This concept map represents each student&apos;s 
              current knowledge state, tracking their understanding level, the system&apos;s confidence in 
              its assessment, evidence-based reasoning, and timestamps.
            </p>

            <p 
              className="text-[#8a8f98] tracking-[-0.011em] mb-6"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              The knowledge states that comprise the student&apos;s mental model are maintained and refined 
              over time—the more the student uses the system, the more accurate and personalized the 
              system&apos;s understanding of their mental model becomes. This continuous contextual awareness 
              allows Sophia to precisely target areas of uncertainty through appropriate remediation tools.
            </p>
                      
            <h3 
              className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
              style={{ lineHeight: 1.33 }}
            >
              Multi-Agent Architecture
            </h3>

            <p 
              className="text-[#8a8f98] tracking-[-0.011em] mb-6"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              Sophia uses a sophisticated multi-agent architecture where different hierarchical levels focus 
              on key roles in identifying and remediating student misconceptions.
            </p>

            <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#1c1c1f] rounded-lg p-6">
              <div className="border-l-2 border-[#34343a] pl-4">
                <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase mb-2 font-medium">
                  Concept Agents
                </p>
                <p 
                  className="text-[#8a8f98] text-[13px]"
                  style={{ lineHeight: 1.5 }}
                >
                  Updating the student&apos;s knowledge state for each applicable concept.
                </p>
              </div>

              <div className="border-l-2 border-[#34343a] pl-4">
                <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase mb-2 font-medium">
                  Pivot Agent
                </p>
                <p 
                  className="text-[#8a8f98] text-[13px]"
                  style={{ lineHeight: 1.5 }}
                >
                  Pivoting conversation focus toward areas of misconception.
                </p>
              </div>

              <div className="border-l-2 border-[#34343a] pl-4">
                <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase mb-2 font-medium">
                  Orchestrator
                </p>
                <p 
                  className="text-[#8a8f98] text-[13px]"
                  style={{ lineHeight: 1.5 }}
                >
                  Deploying visualizations, sketching, and code highlighting.
                </p>
              </div>
            </div>

            <p 
              className="text-[#8a8f98] tracking-[-0.011em] mb-6"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              This separation of cognitive tasks into dedicated agents improves transparency throughout the 
              diagnostic process and provides better reasoning and documentation along the workflow.
            </p>

            <h3 
              className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
              style={{ lineHeight: 1.33 }}
            >
              Multimodal Interaction Capabilities
            </h3>

            <p 
              className="text-[#8a8f98] tracking-[-0.011em] mb-6"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              Sophia supports multiple interaction modalities to accommodate diverse learning styles. Students 
              can engage through voice-based natural language interaction, which frees cognitive resources 
              and allows them to focus on supporting materials like visualizations. The platform also supports 
              sketch-based input, enabling students to express their understanding through drawings and diagrams.
            </p>

            <p 
              className="text-[#8a8f98] tracking-[-0.011em] mb-6"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              Research shows that expressing thoughts through speech has a much smaller gap than between 
              thought and writing, potentially promoting better identification of student misconceptions through 
              their spoken thought processes. The sketching capability allows students to externalize their 
              mental models in ways that text alone cannot capture.
            </p>

            <h3 
              className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
              style={{ lineHeight: 1.33 }}
            >
              Pedagogical Approach
            </h3>

            <p 
              className="text-[#8a8f98] tracking-[-0.011em] mb-6"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              Sophia&apos;s system prompt emphasizes guiding users toward self-discovery while remaining 
              empathetic and conversational. Rather than providing direct solutions, the system leverages 
              its understanding of student knowledge states to provide precise, targeted remediation using 
              visualizations and interactive tools.
            </p>

            <p 
              className="text-[#8a8f98] tracking-[-0.011em] mb-6"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              This approach addresses a critical limitation of traditional LLM-based tools, which often 
              provide excessive hints or reveal significant portions of the solution, diminishing learners&apos; 
              motivation to engage in independent problem-solving and reducing critical thinking capabilities.
            </p>

            <h3 
              className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
              style={{ lineHeight: 1.33 }}
            >
              Comprehensive Assessment Reports
            </h3>

            <p 
              className="text-[#8a8f98] tracking-[-0.011em] mb-6"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              At the end of each lesson, Sophia visualizes the newly refined concept map for students via 
              a radar chart, allowing them to intuitively understand their current conceptual strengths and 
              weaknesses. The report includes a written overview outlining what the student should focus on 
              next, as well as a detailed table presenting the knowledge state for each concept.
            </p>

            {/* Quote block */}
            <blockquote className="my-8 bg-[#1c1c1f] rounded-lg p-6 border-l-2 border-[#34343a]">
              <p 
                className="text-[#d0d6e0] italic mb-4"
                style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
              >
                "I can tailor my approach... it tells you what you&apos;re good at 
                which is encouraging."
              </p>
              <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase font-medium">
                Study Participant
              </p>
            </blockquote>

            <p 
              className="text-[#8a8f98] tracking-[-0.011em] mb-6"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              Students valued these non-intrusive assessment reports, which provide 
              actionable feedback without feeling like the AI is intruding on their 
              self-directed learning process.
            </p>

            <h3 
              className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
              style={{ lineHeight: 1.33 }}
            >
              Deployment & Results
            </h3>

            <p 
              className="text-[#8a8f98] tracking-[-0.011em] mb-6"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              Deployed in an authentic classroom environment, Sophia was used by 
              37 participants who completed 40 lessons across three core concepts: 
              Binary Search Trees, sorting algorithms, and linked lists.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-8 my-8 py-8 px-6 bg-[#1c1c1f] rounded-lg">
              <div>
                <p className="text-[2rem] font-semibold text-[#f7f8f8] mb-2 tracking-[-0.022em]">3.95</p>
                <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase font-medium">
                  Satisfaction
                  <br />
                  Rating /5.0
                </p>
              </div>
              <div>
                <p className="text-[2rem] font-semibold text-[#f7f8f8] mb-2 tracking-[-0.022em]">70+</p>
                <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase font-medium">
                  Students
                  <br />
                  Enrolled
                </p>
              </div>
              <div>
                <p className="text-[2rem] font-semibold text-[#f7f8f8] mb-2 tracking-[-0.022em]">40</p>
                <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase font-medium">
                  Lessons
                  <br />
                  Completed
                </p>
              </div>
            </div>

            <p 
              className="text-[#8a8f98] tracking-[-0.011em] mb-6"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              Follow-up interviews revealed that students valued maintaining control over when and how they 
              received assistance, preferring manual control over automatic AI intervention. The research 
              provides valuable insights into barriers to AI adoption in educational settings.
            </p>

            {/* Section: Technical Stack */}
            <section className="mb-6">
              <h3 
                className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
                style={{ lineHeight: 1.33 }}
              >
                Technical Implementation
              </h3>
              <p 
                className="text-[#8a8f98] tracking-[-0.011em] mb-6"
                style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
              >
                Sophia operates within a standard IDE-based editor integrated with 
                an "Ask Sophia" button that students can activate when they naturally 
                encounter difficulty. Students maintain complete control over their 
                learning experience.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "AI/ML", "WebSocket", "PostgreSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[13px] text-[#8a8f98] border border-[#34343a] rounded-md px-3 py-1.5"
                    style={{ lineHeight: 1.5 }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

          </div>
        </article>

        {/* Footer */}
        <footer className="border-t border-[#23252a] py-6 px-6">
          <div className="max-w-[624px] mx-auto flex justify-between items-center">
            <p className="text-[#62666d] text-[13px]">
              Virginia Tech · 2024
            </p>
            <a 
              href="#" 
              className="text-[#8a8f98] text-[13px] hover:text-[#f7f8f8] transition-colors"
            >
              View on GitHub →
            </a>
          </div>
        </footer>
      </div>
  );
};

export default Sophia;