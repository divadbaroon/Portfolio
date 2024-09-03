import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Junov1BlogContent = () => {
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
        Juno v1: CLI-Based AI Interaction
      </motion.h1>
      <p className="text-center text-xl mt-2 mb-4">
        A modular platform for customizing and interacting with AI via command-line interface.
      </p>
      <div className="flex items-center gap-x-2 justify-center my-4 font-RubikRegular">
        <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px]">
          Python
        </p>
        <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px]">
          Azure
        </p>
        <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px]">
          OpenAI
        </p>
        <div className="w-1 h-1 rounded-full bg-neutral-400" />
        <span className="text-xs">December 15, 2023</span>
      </div>

      <div className="my-11 font-RubikMedium">
        <h2 className="text-2xl font-RubikExtraBold mt-4">
          What is Juno v1?
        </h2>
        <p className="my-4">
          Juno v1 is the initial implementation of a customizable AI interaction platform. It allows users to create, customize, and interact with AI entities through a command-line interface. This version lays the foundation for modular AI development, integrating cutting-edge technologies for speech recognition, intent recognition, and natural language processing.
        </p>

        <h2 className="text-2xl font-RubikExtraBold my-5">
          Key Features
        </h2>
        <ul className="list-disc list-inside my-4 space-y-2">
          <li>Azure Speech Services for speech recognition</li>
          <li>Azure CLU for intent recognition</li>
          <li>OpenAI&apos;s GPT-3.5-Turbo for dynamic, human-like interactions</li>
          <li>Elevenlabs for realistic text-to-speech conversion</li>
          <li>Customizable packages and profiles for tailored AI behavior</li>
          <li>CLI-based interaction for developers and power users</li>
        </ul>

        <h2 className="text-2xl font-RubikExtraBold my-5">
          Modular AI Architecture
        </h2>
        <p className="my-4">
          Juno v1 introduces a modular approach to AI creation, separating the process into four key components:
        </p>
        <ol className="list-decimal list-inside my-4 space-y-2">
          <li>Language Model: Utilizing GPT-3.5-Turbo for natural language understanding and generation</li>
          <li>Prompts: Customizable instructions to guide the AI&apos;s responses</li>
          <li>Voice: Integration with Elevenlabs for lifelike text-to-speech</li>
          <li>Extensions: Additional capabilities beyond the core language model functionality</li>
        </ol>

        <h2 className="text-2xl font-RubikExtraBold my-5">
          Getting Started with Juno v1
        </h2>
        <p className="my-4">
          To use Juno v1, users need to follow these steps:
        </p>
        <ol className="list-decimal list-inside my-4 space-y-2">
          <li>Install required packages using pip</li>
          <li>Configure Azure services and API keys</li>
          <li>Set up profiles and packages as needed</li>
          <li>Run the main Python script to start interacting with the AI</li>
        </ol>

        <h2 className="text-2xl font-RubikExtraBold my-5">
          Customization Options
        </h2>
        <p className="my-4">
          Juno v1 offers extensive customization through:
        </p>
        <ul className="list-disc list-inside my-4 space-y-2">
          <li>Profiles: Define AI personality, role, and interaction style</li>
          <li>Packages: Add specialized commands and functionalities</li>
          <li>Custom Voices: Create unique voices using Elevenlabs</li>
          <li>GPT Fine-tuning: Tailor the language model to specific use cases</li>
        </ul>

        <h2 className="text-2xl font-RubikExtraBold my-5">
          Future Developments
        </h2>
        <p className="my-4">
          While Juno v1 lays a solid foundation for AI interaction through CLI, future versions aim to introduce:
        </p>
        <ul className="list-disc list-inside my-4 space-y-2">
          <li>A user-friendly graphical interface</li>
          <li>Web-based access and interaction</li>
          <li>Integration with more AI services and tools</li>
          <li>Enhanced customization and deployment options</li>
        </ul>
        
        <p className="mt-8 text-center">
          Juno v1 represents the first step towards a fully modular and customizable AI interaction platform, setting the stage for more advanced and user-friendly versions to come.
        </p>
      </div>
    </div>
  );
};

export default Junov1BlogContent;