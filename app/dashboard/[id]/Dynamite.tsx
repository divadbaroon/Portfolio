import React from "react";
import Image from "next/image";

const Dynamite = () => {
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
            Dynamite: Real-Time
            <br />
            Discussion Platform
          </h1>

          {/* Hero Image */}
          <div className="mt-10 mb-8">
            <Image
              width={1200}
              height={700}
              className="rounded-lg w-full border border-[#23252a]"
              src="/dynamite-thumb.png"
              alt="Dynamite Platform Interface"
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
            Dynamite is a real-time discussion platform that automatically generates 
            bullet-point summaries from live student conversations. Deployed to facilitate 
            class discussions for over 100 students, it enhances collaborative learning 
            through instant, AI-generated summaries.
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
            What is Dynamite?
          </h3>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            Dynamite is a real-time discussion platform that automatically generates bullet-point summaries from 
            live student conversations. Deployed to facilitate class discussions for over 100 students, Dynamite 
            enhances collaborative learning by providing instant, AI-generated summaries of ongoing discussions.
          </p>

          <h3 
            className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
            style={{ lineHeight: 1.33 }}
          >
            Real-Time AI-Enhanced Summarization
          </h3>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            The core innovation of Dynamite lies in its ability to process live student conversations and generate 
            coherent, structured summaries in real-time. Using advanced natural language processing, the system 
            captures key discussion points, organizes them into bullet points, and presents them to both students 
            and instructors as the conversation unfolds.
          </p>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            This immediate feedback loop helps students stay on track, ensures important points aren&apos;t lost, 
            and allows instructors to quickly assess the quality and direction of group discussions without having 
            to monitor every conversation simultaneously.
          </p>

          <h3 
            className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
            style={{ lineHeight: 1.33 }}
          >
            Multimodal Interaction
          </h3>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            Dynamite supports multimodal interaction, allowing students to engage with the platform through multiple 
            channels. This flexibility ensures that diverse learning styles and preferences are accommodated, making 
            the discussion experience more inclusive and effective.
          </p>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            The platform seamlessly integrates voice, text, and visual elements to create a rich, interactive 
            environment where students can express their ideas in the way that feels most natural to them.
          </p>

          <h3 
            className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
            style={{ lineHeight: 1.33 }}
          >
            Classroom Integration
          </h3>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            Deployed in active classroom settings, Dynamite has been used by over 100 students to facilitate 
            meaningful discussions. The platform integrates smoothly into existing educational workflows, requiring 
            minimal setup while providing maximum value.
          </p>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            Instructors can easily monitor multiple group discussions simultaneously through the generated summaries, 
            identify groups that may need assistance, and gather insights about student understanding and engagement 
            patterns across the entire class.
          </p>

          <h3 
            className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
            style={{ lineHeight: 1.33 }}
          >
            Research Impact
          </h3>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            This work resulted in a published research paper demonstrating how AI can be effectively 
            leveraged to support collaborative learning environments without replacing human interaction.
          </p>

          {/* Publication callout */}
          <blockquote className="my-8 bg-[#1c1c1f] rounded-lg p-6 border-l-2 border-[#34343a]">
            <p 
              className="text-[#d0d6e0] italic mb-4"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              &quot;Dynamite: Real-Time Debriefing Slide Authoring through AI-Enhanced Multimodal Interaction&quot;
            </p>
            <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase font-medium">
              Keelawat, Barron et al. · arXiv 2025
            </p>
          </blockquote>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            By automatically capturing and organizing discussion content, Dynamite frees both students and instructors 
            to focus on the quality of ideas and collaborative problem-solving rather than note-taking logistics.
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
            Dynamite was deployed in active classroom settings at Virginia Tech, 
            facilitating real-time discussions across multiple class sessions.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-8 my-8 py-8 px-6 bg-[#1c1c1f] rounded-lg">
            <div>
              <p className="text-[2rem] font-semibold text-[#f7f8f8] mb-2 tracking-[-0.022em]">100+</p>
              <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase font-medium">
                Students
                <br />
                Reached
              </p>
            </div>
            <div>
              <p className="text-[2rem] font-semibold text-[#f7f8f8] mb-2 tracking-[-0.022em]">Real-time</p>
              <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase font-medium">
                Summary
                <br />
                Generation
              </p>
            </div>
            <div>
              <p className="text-[2rem] font-semibold text-[#f7f8f8] mb-2 tracking-[-0.022em]">1</p>
              <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase font-medium">
                Published
                <br />
                Paper
              </p>
            </div>
          </div>

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
              Built with Next.js and React, Dynamite leverages modern web technologies to deliver a responsive, 
              real-time experience. The AI summarization engine processes conversational data in real-time, 
              applying natural language understanding to identify key themes and discussion flow.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "AI/ML", "WebSocket", "Real-time"].map((tech) => (
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
            View Paper →
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Dynamite;