import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const JunoBlogContent = () => {
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
        Welcome to Juno
      </motion.h1>
      <p className="text-center text-xl mt-2 mb-4">
        The all-in-one platform for streamlined AI customization and interaction.
      </p>
      <div className="flex items-center gap-x-2 justify-center my-4 font-RubikRegular">
        <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px]">
          NextJS
        </p>
        <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px]">
          React
        </p>
        <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px]">
          TypeScript
        </p>
        <div className="w-1 h-1 rounded-full bg-neutral-400" />
        <span className="text-xs">May 15, 2024</span>
      </div>

      <div className="my-11 font-RubikMedium">
        <h2 className="text-2xl font-RubikExtraBold mt-4">
          What is Juno?
        </h2>
        <p className="my-4">
          Juno allows users to easily customize, create, and interact with tailor made AI. Interaction occurs within the user's web browser via the Juno Chrome Extension. It's a comprehensive platform designed to streamline AI customization and interaction, making advanced AI technology accessible and user-friendly.
        </p>

        <h2 className="text-2xl font-RubikExtraBold my-5">
          Modularizing AI
        </h2>
        <p className="my-4">
          Juno modularizes the creation of AI by seperating the creation process into 4 key components, the large language model, the pompt used to query the large langauge model, the AI's voice (using Elevenlabs text-to-speech), and 
          extensions which give the profile external capabilities that are not inherit to the large language model. <br />{" "} <br />{" "}

          This approach allows users to mix-and-match different components to truly create a fully cusomtizable and tailord AI experience.
        </p>

        <h2 className="text-2xl font-RubikExtraBold my-5">
          Getting Started
        </h2>

        <div className="my-0">
          <Image
            width={1000}
            height={1000}
            className="rounded-lg h-200 w-full object-cover"
            src="/juno-quickstart.png"
            alt="Juno Web App Interface"
          />
        </div>

        <p className="my-4">
          Juno's Quick Start guide provides a simple 3-step tutorial to walk users through selecting and integrating their own personalized AI in minutes.  <br />{" "} <br />{" "}

          This process entails the user selecting a profle from the library, installing the Juno Chrome Extension, and then interacting with Juno by pressing their assigned shortcut within the Juno Chrome Extension.
        </p>

        <h2 className="text-2xl font-RubikExtraBold my-5">
          The lab
        </h2>

        <div className="my-0">
          <Image
            width={1000}
            height={1000}
            className="rounded-lg h-200 w-full object-cover"
            src="/juno-lab.png"
            alt="Juno Web App Interface"
          />
        </div>

        <p className="my-4">
          The lab is used to create AI components from the ground up, allowing users to fully tailor their AI experience to their liking. 
        </p>

        <h2 className="text-2xl font-RubikExtraBold my-5">
          The Library
        </h2>

        <div className="my-0">
          <Image
            width={1000}
            height={1000}
            className="rounded-lg h-200 w-full object-cover"
            src="/juno-library.png"
            alt="Juno Web App Interface"
          />
        </div>

        <p className="my-4">
          The library offers a vast collection of AI profiles, large language models, prompts, voices, and extensions.
        </p>

        <h2 className="text-2xl font-RubikExtraBold my-5">
          Seamless Interaction
        </h2>
        <p className="my-4">
          Use the Juno Chrome Extension to seamlessly interact with your personalized AI using a simple keybind. This feature allows you to access your AI assistant quickly and effortlessly, integrating AI capabilities directly into your browsing experience. <br />{" "} <br />{" "} 

          Data, such as profile selection, automatically syncs between Juno and the Juno chrome extension, allowing for a seamless transition between both platforms
        </p>
        
      </div>
    </div>
  );
};

export default JunoBlogContent;