import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Dynamite = () => {
  return (
   
      <div className="mt-9 w-full p-5 border border-neutral-700 rounded-2xl h-full bg-[#1C1C1C]">
        <motion.h1
          initial={{ x: 100, opacity: 0, filter: "blur(4px)" }}
          animate={{
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration: 0.8,
              delay: 0.9,
              type: "spring",
              stiffness: 200,
            },
          }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-RubikExtraBold text-center"
        >
          Dynamite: Real-Time Discussion Platform
        </motion.h1>
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
            What is Dynamite?
          </h2>

          <p className="my-4">
            Dynamite is a real-time discussion platform that automatically generates bullet-point summaries from 
            live student conversations. Deployed to facilitate class discussions for over 100 students, Dynamite 
            enhances collaborative learning by providing instant, AI-generated summaries of ongoing discussions.
          </p>

          <div className="my-9">
            <Image
              width={1000}
              height={1000}
              className="rounded-lg h-200 w-full object-cover"
              src="/dynamite-thumb.png"
              alt="Dynamite Platform Interface"
            />
          </div>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Real-Time AI-Enhanced Summarization
          </h2>

          <p className="my-4">
            The core innovation of Dynamite lies in its ability to process live student conversations and generate 
            coherent, structured summaries in real-time. Using advanced natural language processing, the system 
            captures key discussion points, organizes them into bullet points, and presents them to both students 
            and instructors as the conversation unfolds.
          </p>

          <p className="my-4">
            This immediate feedback loop helps students stay on track, ensures important points aren&apos;t lost, 
            and allows instructors to quickly assess the quality and direction of group discussions without having 
            to monitor every conversation simultaneously.
          </p>
                    
          <h2 className="text-2xl font-RubikExtraBold my-5">
            Multimodal Interaction
          </h2>

          <p className="my-4">
            Dynamite supports multimodal interaction, allowing students to engage with the platform through multiple 
            channels. This flexibility ensures that diverse learning styles and preferences are accommodated, making 
            the discussion experience more inclusive and effective.
          </p>

          <p className="my-4">
            The platform seamlessly integrates voice, text, and visual elements to create a rich, interactive 
            environment where students can express their ideas in the way that feels most natural to them.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Classroom Integration
          </h2>

          <p className="my-4">
            Deployed in active classroom settings, Dynamite has been used by over 100 students to facilitate 
            meaningful discussions. The platform integrates smoothly into existing educational workflows, requiring 
            minimal setup while providing maximum value.
          </p>

          <p className="my-4">
            Instructors can easily monitor multiple group discussions simultaneously through the generated summaries, 
            identify groups that may need assistance, and gather insights about student understanding and engagement 
            patterns across the entire class.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Research Impact
          </h2>

          <p className="my-4">
            This work resulted in a published research paper: &quot;Dynamite: Real-Time Debriefing Slide Authoring 
            through AI-Enhanced Multimodal Interaction&quot; (Keelawat et al., arXiv 2025). The research demonstrates 
            how AI can be effectively leveraged to support collaborative learning environments without replacing 
            human interaction.
          </p>

          <p className="my-4">
            By automatically capturing and organizing discussion content, Dynamite frees both students and instructors 
            to focus on the quality of ideas and collaborative problem-solving rather than note-taking logistics.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Technical Architecture
          </h2>

          <p className="my-4">
            Built with Next.js and React, Dynamite leverages modern web technologies to deliver a responsive, 
            real-time experience. The platform uses TypeScript for type safety and maintainability, ensuring 
            robust performance even with multiple concurrent discussions.
          </p>

          <p className="my-4">
            The AI summarization engine processes conversational data in real-time, applying natural language 
            understanding techniques to identify key themes, important statements, and overall discussion flow, 
            then presenting this information in an easily digestible format.
          </p>
        </div>
      </div>
  );
};

export default Dynamite;