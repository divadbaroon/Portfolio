import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PlotPact = () => {
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
          PlotPact: AI-Powered Creative Constraints
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
          <span className="text-xs">2024</span>
        </div>

        <div className="my-11 font-RubikMedium">
          <h2 className="text-2xl font-RubikExtraBold mt-4">
            What is PlotPact?
          </h2>

          <p className="my-4">
            PlotPact is an AI-powered interactive storytelling platform that enhances creativity through 
            AI-generated constraints. Rather than using AI to generate content for users, PlotPact positions 
            AI as an editor that guides users&apos; creativity by providing strategic constraints that inspire 
            and focus their creative writing.
          </p>

          <p className="my-4">
            In the advent of AI, there have been growing concerns about over-reliance on these systems and 
            the diminishing creativity of their users. PlotPact addresses these concerns by bringing autonomy 
            back to the user while using AI-generated constraints to exercise user creativity and problem-solving ability.
          </p>

          <div className="my-9">
            <Image
              width={1000}
              height={1000}
              className="rounded-lg h-200 w-full object-cover"
              src="/plotpact-thumb.png"
              alt="PlotPact Platform Interface"
            />
          </div>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            The Power of Constraints
          </h2>

          <p className="my-4">
            Constraints provide users guidance in their creative thinking, offering focused and relevant 
            direction. Without constraints, users often face challenges such as struggling to start, getting 
            lost in endless options, and producing generic ideas.
          </p>

          <p className="my-4">
            Research consistently shows that moderate constraints significantly enhance creative thinking. 
            Well-designed constraints inspire and push creators to problem-solve and explore new paths in 
            their writing. Patricia Stokes, author of &quot;Creativity from Constraints: The Psychology of 
            Breakthrough,&quot; states that constraint-based strategies can lead to more consistent and 
            higher quality creative output.
          </p>

          <p className="my-4">
            Additional research confirms these findings, showing that constraints can enhance creativity by 
            focusing attention, providing productive limitations, and offering a framework that guides without 
            restricting.
          </p>
                    
          <h2 className="text-2xl font-RubikExtraBold my-5">
            Three Types of Constraints
          </h2>

          <p className="my-4">
            PlotPact implements three different types of constraints to guide creative writing:
          </p>

          <p className="my-4">
            <strong>Function</strong> determines what to emphasize versus avoid, helping writers focus on 
            specific elements or themes in their story.
          </p>

          <p className="my-4">
            <strong>Type</strong> offers directional guidance versus specific requirements, providing structure 
            while maintaining creative freedom.
          </p>

          <p className="my-4">
            <strong>Flexibility</strong> balances rigid rules with open-ended exploration, ensuring constraints 
            inspire rather than restrict.
          </p>

          <p className="my-4">
            This structured approach allows the platform to tailor constraints to specific creative purposes, 
            adapting to each user&apos;s story and writing style.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            How It Works
          </h2>

          <p className="my-4">
            Using PlotPact, users can define and create their own stories from scratch. Users write their own 
            title and plot for the story to be based upon. Upon creation, the system automatically generates 
            constraints to get the user started.
          </p>

          <p className="my-4">
            When a user adds content to their story and saves, the system automatically checks this content 
            against the constraints and highlights any violations. The user can then adjust their writing to 
            address these violations, helping them progress their creative writing while adhering to the 
            established constraints.
          </p>

          <p className="my-4">
            This real-time feedback loop ensures that writers stay engaged with their creative goals while 
            maintaining the autonomy to make their own creative decisions.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            AI as Editor, Not Author
          </h2>

          <p className="my-4">
            The key philosophy behind PlotPact is positioning AI as an editor rather than an author. Instead 
            of generating content that users might simply accept, PlotPact uses AI to create thoughtful 
            constraints that challenge and inspire users to write better content themselves.
          </p>

          <p className="my-4">
            This approach preserves the user&apos;s creative agency while leveraging AI&apos;s capabilities to 
            provide meaningful guidance. The result is a collaborative relationship between human creativity 
            and AI assistance, where the human remains firmly in control of the creative process.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Impact on Creativity
          </h2>

          <p className="my-4">
            By implementing research-backed constraint frameworks, PlotPact helps users overcome common creative 
            blocks and produce more consistent, higher-quality creative output. The platform demonstrates that 
            AI can enhance rather than replace human creativity when designed with the right principles.
          </p>

          <p className="my-4">
            PlotPact brings autonomy back to the user while using AI-generated constraints to exercise user 
            creativity and problem-solving ability, showing a path forward for AI-assisted creative tools that 
            empower rather than diminish human creativity.
          </p>
        </div>
      </div>
  );
};

export default PlotPact;