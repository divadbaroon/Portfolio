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

        <div className="flex items-center gap-x-2 justify-center my-4 font-RubikRegular">
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px]">
            Next.js
          </p>
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px]">
            React
          </p>
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px]">
            TypeScript
          </p>
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px]">
            AI/ML
          </p>
          <div className="w-1 h-1 rounded-full bg-neutral-400" />
          <span className="text-xs">Oct 2024 - Present</span>
        </div>

        <div className="my-11 font-RubikMedium">
          <h2 className="text-2xl font-RubikExtraBold mt-4">
            What is Sophia?
          </h2>

          <p className="my-4">
            Sophia is a multimodal AI tutoring system that helps students identify and remediate 
            conceptual misunderstandings in data structures and algorithms. Deployed in a junior-level 
            data structures course at Virginia Tech, Sophia achieved a satisfaction rating of 3.95/5.0 
            across 70+ students while addressing fundamental challenges in computer science education.
          </p>

          <p className="my-4">
            Unlike traditional LLM-based tutoring systems that often provide direct answers, Sophia 
            uses dynamic concept mapping to understand each student&apos;s knowledge state and guides 
            them toward self-discovery of their misconceptions through targeted pedagogical interventions.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Dynamic Concept Mapping
          </h2>

          <p className="my-4">
            At its foundation, Sophia generates and refines a dynamic concept map based on all available 
            student context, including the student&apos;s current task, code submissions, terminal output, 
            IDE interactions, and conversation history. This concept map represents each student&apos;s 
            current knowledge state, tracking their understanding level, the system&apos;s confidence in 
            its assessment, evidence-based reasoning, and timestamps.
          </p>

          <p className="my-4">
            The knowledge states that comprise the student&apos;s mental model are maintained and refined 
            over time—the more the student uses the system, the more accurate and personalized the 
            system&apos;s understanding of their mental model becomes. This continuous contextual awareness 
            allows Sophia to precisely target areas of uncertainty through appropriate remediation tools.
          </p>
                    
          <h2 className="text-2xl font-RubikExtraBold my-5">
            Multi-Agent Architecture
          </h2>

          <p className="my-4">
            Sophia uses a sophisticated multi-agent architecture where different hierarchical levels focus 
            on key roles in identifying and remediating student misconceptions. The architecture consists 
            of three main agents:
          </p>

          <p className="my-4">
            <strong>Concept Agents</strong> are responsible for updating the student&apos;s knowledge state 
            for each applicable concept to the task the student is solving.
          </p>

          <p className="my-4">
            <strong>Pivot Agent</strong> utilizes the student&apos;s concept map to precisely pivot the 
            focus of the conversation toward areas of misconception.
          </p>

          <p className="my-4">
            <strong>Orchestrator Agent</strong> deploys the appropriate tooling for remediation, including 
            visualizations, sketching interactions, and code highlighting.
          </p>

          <p className="my-4">
            This separation of cognitive tasks into dedicated agents improves transparency throughout the 
            diagnostic process and provides better reasoning and documentation along the workflow.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Multimodal Interaction Capabilities
          </h2>

          <p className="my-4">
            Sophia supports multiple interaction modalities to accommodate diverse learning styles. Students 
            can engage through voice-based natural language interaction, which frees cognitive resources 
            and allows them to focus on supporting materials like visualizations. The platform also supports 
            sketch-based input, enabling students to express their understanding through drawings and diagrams.
          </p>

          <p className="my-4">
            Research shows that expressing thoughts through speech has a much smaller gap than between 
            thought and writing, potentially promoting better identification of student misconceptions through 
            their spoken thought processes. The sketching capability allows students to externalize their 
            mental models in ways that text alone cannot capture.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Pedagogical Approach
          </h2>

          <p className="my-4">
            Sophia&apos;s system prompt emphasizes guiding users toward self-discovery while remaining 
            empathetic and conversational. Rather than providing direct solutions, the system leverages 
            its understanding of student knowledge states to provide precise, targeted remediation using 
            visualizations and interactive tools.
          </p>

          <p className="my-4">
            This approach addresses a critical limitation of traditional LLM-based tools, which often 
            provide excessive hints or reveal significant portions of the solution, diminishing learners&apos; 
            motivation to engage in independent problem-solving and reducing critical thinking capabilities.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Comprehensive Assessment Reports
          </h2>

          <p className="my-4">
            At the end of each lesson, Sophia visualizes the newly refined concept map for students via 
            a radar chart, allowing them to intuitively understand their current conceptual strengths and 
            weaknesses. The report includes a written overview outlining what the student should focus on 
            next, as well as a detailed table presenting the knowledge state for each concept.
          </p>

          <p className="my-4">
            Students particularly valued these non-intrusive assessment reports, with one explaining: 
            &quot;I can tailor my approach... it tells you what you&apos;re good at which is encouraging.&quot; 
            The reports provide actionable feedback that students can use to guide their continued learning 
            without feeling like the AI is intruding on their self-directed learning process.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Real-World Deployment and Impact
          </h2>

          <p className="my-4">
            Deployed in an authentic classroom environment, Sophia was used by 37 participants who completed 
            40 lessons across three core concepts: Binary Search Trees, sorting algorithms, and linked lists. 
            Despite minimal direct AI interaction (only 13.5% of students actively used the &quot;Ask Sophia&quot; 
            feature), students achieved high satisfaction ratings primarily through self-directed learning 
            and comprehensive assessment reports.
          </p>

          <p className="my-4">
            Follow-up interviews revealed that students valued maintaining control over when and how they 
            received assistance, preferring manual control over automatic AI intervention. The research 
            provides valuable insights into barriers to AI adoption in educational settings, including 
            learning philosophies, academic integrity concerns, and environmental factors.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Technical Implementation
          </h2>

          <p className="my-4">
            Sophia operates within a standard IDE-based editor integrated with an &quot;Ask Sophia&quot; 
            button that students can activate when they naturally encounter difficulty. The system is built 
            with Next.js and React, using TypeScript for type safety and maintainability. Students maintain 
            complete control over their learning experience, with the ability to close the interaction at 
            any time.
          </p>

          <p className="my-4">
            The platform integrates seamlessly into existing educational workflows, requiring minimal setup 
            while providing maximum value through its intelligent assessment and remediation capabilities.
          </p>
        </div>
      </div>
  );
};

export default Sophia;