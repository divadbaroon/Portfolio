import React from "react";
import Image from "next/image";

const Juno = () => {
  return (
    <div className="mt-9 w-full p-5 border border-neutral-700 rounded-2xl h-full bg-[#1C1C1C] text-[#f7f8f8]">
      {/* Hero Section */}
      <header className="pt-10 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <p className="text-[#8a8f98] text-[13px] tracking-[-0.01em] mb-6" style={{ lineHeight: 1.5 }}>
            <span className="hover:text-[#f7f8f8] cursor-pointer transition-colors">Projects</span>
            <span className="mx-2 text-[#62666d]">/</span>
            <span className="hover:text-[#f7f8f8] cursor-pointer transition-colors">Tools</span>
          </p>

          {/* Title */}
          <h1 
            className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-semibold tracking-[-0.022em] mb-6"
            style={{ lineHeight: 1.1 }}
          >
            Juno: Intelligence at
            <br />
            Your Fingertips
          </h1>

          {/* Hero Image */}
          <div className="mt-10 mb-8">
            <Image
              width={1200}
              height={700}
              className="rounded-lg w-full border border-[#23252a]"
              src="/juno-chrome-extension.png"
              alt="Juno Chrome Extension Interface"
            />
          </div>

          {/* Author & Date */}
          <p className="text-[#8a8f98] text-[13px] mt-8" style={{ lineHeight: 1.5 }}>
            David Barron
            <span className="mx-2 text-[#62666d]">·</span>
            August 2024
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
            Juno is a Chrome extension that brings voice-powered AI interaction 
            to your browser. Hold a shortcut to speak, and Juno processes your 
            intent, queries an LLM with your custom profile, and responds with 
            natural text-to-speech.
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
            What is Juno?
          </h3>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            The Juno Chrome extension was created to allow users to seamlessly interact with profiles they 
            have either selected or created in Juno. The extension automatically syncs with Juno, allowing 
            for a smooth transition between both platforms.
          </p>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            Interaction is conducted using an assigned shortcut. To interact, the user holds down the shortcut, 
            which starts speech recognition within the browser. To end a session, the user can click the 
            assigned shortcut once.
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
            Juno combines multiple AI services into a seamless voice interaction pipeline, 
            from speech recognition through intent detection to natural response generation.
          </p>

          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#1c1c1f] rounded-lg p-6">
            <div className="border-l-2 border-[#34343a] pl-4">
              <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase mb-2 font-medium">
                Speech Recognition
              </p>
              <p 
                className="text-[#8a8f98] text-[13px]"
                style={{ lineHeight: 1.5 }}
              >
                Web Audio API captures microphone input, sent to Google Cloud Speech-to-Text.
              </p>
            </div>

            <div className="border-l-2 border-[#34343a] pl-4">
              <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase mb-2 font-medium">
                Intent Detection
              </p>
              <p 
                className="text-[#8a8f98] text-[13px]"
                style={{ lineHeight: 1.5 }}
              >
                Azure CLU returns top intent, entity, and confidence level from speech.
              </p>
            </div>

            <div className="border-l-2 border-[#34343a] pl-4">
              <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase mb-2 font-medium">
                LLM Interaction
              </p>
              <p 
                className="text-[#8a8f98] text-[13px]"
                style={{ lineHeight: 1.5 }}
              >
                User&apos;s profile provides personality, context, and guidelines to the model.
              </p>
            </div>

            <div className="border-l-2 border-[#34343a] pl-4">
              <p className="text-[11px] tracking-[0.02em] text-[#62666d] uppercase mb-2 font-medium">
                Text-to-Speech
              </p>
              <p 
                className="text-[#8a8f98] text-[13px]"
                style={{ lineHeight: 1.5 }}
              >
                ElevenLabs generates natural speech using the user&apos;s selected voice.
              </p>
            </div>
          </div>

          <h3 
            className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
            style={{ lineHeight: 1.33 }}
          >
            Intent Recognition
          </h3>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            The user&apos;s intent is detected using Azure&apos;s Conversational Language Understanding service, 
            which takes a query in the form of text and returns the top intent, top entity, and confidence level.
          </p>

          {/* Example callout */}
          <blockquote className="my-8 bg-[#1c1c1f] rounded-lg p-6 border-l-2 border-[#34343a]">
            <p 
              className="text-[#d0d6e0] mb-4"
              style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
            >
              Given the speech: <span className="italic">&quot;Open Google&quot;</span>
            </p>
            <div className="text-[13px] text-[#8a8f98] space-y-1">
              <p>Top intent: <span className="text-[#f7f8f8]">Open Webpage</span></p>
              <p>Top entity: <span className="text-[#f7f8f8]">Google</span></p>
              <p>Confidence: <span className="text-[#f7f8f8]">0.9</span></p>
            </div>
          </blockquote>

          <h3 
            className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
            style={{ lineHeight: 1.33 }}
          >
            Profile-Based Personalization
          </h3>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            After the user&apos;s speech has been retrieved, it&apos;s used to query the large language model. 
            The user&apos;s selected prompt via their profile provides foundational context and background 
            information, including personality, context, interaction guidelines, background, and temperature 
            (variability in responses).
          </p>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            Once the LLM response is retrieved, ElevenLabs text-to-speech generates audio using 
            the user&apos;s selected voice from their profile, creating a fully personalized interaction.
          </p>

          <h3 
            className="text-[1.25rem] font-semibold tracking-[-0.012em] mb-6 text-[#f7f8f8]"
            style={{ lineHeight: 1.33 }}
          >
            User Interface
          </h3>

          <p 
            className="text-[#8a8f98] tracking-[-0.011em] mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            The user interface was designed to be clean and minimalistic. Shadcn was used for 
            many components including the combo box, breadcrumb, and card display. From the main page, 
            users can easily browse and select their profile, as well as assign their shortcut—the two 
            main functionalities of the extension.
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
              Built with Vite and React for fast development and optimal performance. 
              The extension integrates multiple cloud services to deliver a seamless 
              voice-to-voice AI experience.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Vite", "React", "TypeScript", "Google Cloud", "Azure CLU", "ElevenLabs", "Shadcn"].map((tech) => (
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

export default Juno;