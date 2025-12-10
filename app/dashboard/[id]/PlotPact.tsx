import React from "react";
import Image from "next/image";

const PlotPact = () => {
  return (
    <div className="mt-9 w-full p-5 border border-neutral-700 rounded-2xl h-full bg-[#1C1C1C] text-[#f7f8f8]">
      {/* Hero Section */}
      <header className="pt-10 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <p className="text-[#8a8f98] text-[13px] tracking-[-0.01em] mb-6" style={{ lineHeight: 1.5 }}>
            <span className="hover:text-[#f7f8f8] cursor-pointer transition-colors">Projects</span>
            <span className="mx-2 text-[#62666d]">/</span>
            <span className="hover:text-[#f7f8f8] cursor-pointer transition-colors">Creative Tools</span>
          </p>

          {/* Title */}
          <h1 
            className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-semibold tracking-[-0.022em] mb-6"
            style={{ lineHeight: 1.1 }}
          >
            PlotPact: AI-Powered
            <br />
            Creative Constraints
          </h1>

          {/* Hero Image */}
          <div className="mt-10 mb-8">
            <Image
              width={1200}
              height={700}
              className="rounded-lg w-full border border-[#23252a]"
              src="/plotpact-thumb.png"
              alt="PlotPact Platform Interface"
            />
          </div>

          {/* Author & Date */}
          <p className="text-[#8a8f98] text-[13px] mt-8" style={{ lineHeight: 1.5 }}>
            David Barron
            <span className="mx-2 text-[#62666d]">·</span>
            2024
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
            PlotPact is an AI-powered interactive storytelling platform that enhances 
            creativity through AI-generated constraints. Rather than generating content, 
            AI acts as an editor—guiding users&apos; creativity by providing strategic 
            constraints that inspire and focus their writing.
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
            What is PlotPact?
          </h3>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            PlotPact is an AI-powered interactive storytelling platform that enhances creativity through 
            AI-generated constraints. Rather than using AI to generate content for users, PlotPact positions 
            AI as an editor that guides users&apos; creativity by providing strategic constraints that inspire 
            and focus their creative writing.
          </p>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            In the advent of AI, there have been growing concerns about over-reliance on these systems and 
            the diminishing creativity of their users. PlotPact addresses these concerns by bringing autonomy 
            back to the user while using AI-generated constraints to exercise user creativity and problem-solving ability.
          </p>

          <h3 
            className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
            style={{ lineHeight: 1.33 }}
          >
            The Power of Constraints
          </h3>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            Constraints provide users guidance in their creative thinking, offering focused and relevant 
            direction. Without constraints, users often face challenges such as struggling to start, getting 
            lost in endless options, and producing generic ideas.
          </p>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            Research consistently shows that moderate constraints significantly enhance creative thinking. 
            Well-designed constraints inspire and push creators to problem-solve and explore new paths in 
            their writing.
          </p>

          {/* Quote block */}
          <blockquote className="my-8 bg-[#1c1c1f] rounded-lg p-6 border-l-2 border-[#34343a]">
            <p 
              className="text-[#d0d6e0] italic mb-4"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              &quot;Constraint-based strategies can lead to more consistent and higher quality creative output.&quot;
            </p>
            <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase font-medium">
              Patricia Stokes · Creativity from Constraints
            </p>
          </blockquote>

          <h3 
            className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
            style={{ lineHeight: 1.33 }}
          >
            Three Types of Constraints
          </h3>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            PlotPact implements three different types of constraints to guide creative writing, 
            each serving a distinct purpose in the creative process.
          </p>

          <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#1c1c1f] rounded-lg p-6">
            <div className="border-l-2 border-[#34343a] pl-4">
              <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase mb-2 font-medium">
                Function
              </p>
              <p 
                className="text-[#8a8f98] text-[13px]"
                style={{ lineHeight: 1.5 }}
              >
                Determines what to emphasize versus avoid in your story.
              </p>
            </div>

            <div className="border-l-2 border-[#34343a] pl-4">
              <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase mb-2 font-medium">
                Type
              </p>
              <p 
                className="text-[#8a8f98] text-[13px]"
                style={{ lineHeight: 1.5 }}
              >
                Offers directional guidance versus specific requirements.
              </p>
            </div>

            <div className="border-l-2 border-[#34343a] pl-4">
              <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase mb-2 font-medium">
                Flexibility
              </p>
              <p 
                className="text-[#8a8f98] text-[13px]"
                style={{ lineHeight: 1.5 }}
              >
                Balances rigid rules with open-ended exploration.
              </p>
            </div>
          </div>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            This structured approach allows the platform to tailor constraints to specific creative purposes, 
            adapting to each user&apos;s story and writing style.
          </p>

          <h3 
            className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
            style={{ lineHeight: 1.33 }}
          >
            How It Works
          </h3>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            Using PlotPact, users can define and create their own stories from scratch. Users write their own 
            title and plot for the story to be based upon. Upon creation, the system automatically generates 
            constraints to get the user started.
          </p>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            When a user adds content to their story and saves, the system automatically checks this content 
            against the constraints and highlights any violations. The user can then adjust their writing to 
            address these violations, helping them progress their creative writing while adhering to the 
            established constraints.
          </p>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            This real-time feedback loop ensures that writers stay engaged with their creative goals while 
            maintaining the autonomy to make their own creative decisions.
          </p>

          <h3 
            className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
            style={{ lineHeight: 1.33 }}
          >
            AI as Editor, Not Author
          </h3>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            The key philosophy behind PlotPact is positioning AI as an editor rather than an author. Instead 
            of generating content that users might simply accept, PlotPact uses AI to create thoughtful 
            constraints that challenge and inspire users to write better content themselves.
          </p>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            This approach preserves the user&apos;s creative agency while leveraging AI&apos;s capabilities to 
            provide meaningful guidance. The result is a collaborative relationship between human creativity 
            and AI assistance, where the human remains firmly in control of the creative process.
          </p>

          <h3 
            className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
            style={{ lineHeight: 1.33 }}
          >
            Impact on Creativity
          </h3>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            By implementing research-backed constraint frameworks, PlotPact helps users overcome common creative 
            blocks and produce more consistent, higher-quality creative output. The platform demonstrates that 
            AI can enhance rather than replace human creativity when designed with the right principles.
          </p>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            PlotPact brings autonomy back to the user while using AI-generated constraints to exercise user 
            creativity and problem-solving ability, showing a path forward for AI-assisted creative tools that 
            empower rather than diminish human creativity.
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
              Built with Next.js and React for a responsive, real-time writing experience. 
              The AI constraint engine analyzes story content and generates contextually 
              relevant creative constraints.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "AI/ML", "Real-time Analysis"].map((tech) => (
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
            Personal Project · 2024
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

export default PlotPact;