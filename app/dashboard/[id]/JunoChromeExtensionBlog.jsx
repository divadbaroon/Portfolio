import React from "react";
import Image from "next/image";

const JunoChromeExtensionBlogContent = () => {
  return (
   
      <div className="mt-9 w-full p-5 border border-neutral-700 rounded-2xl h-full bg-[#1C1C1C]">
        <h1 className="text-3xl font-RubikExtraBold text-center">
          Intelligence at your fingertips
        </h1>
        <div className="flex items-center gap-x-2 justify-center my-4 font-RubikRegular">
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px]">
            Vite
          </p>
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px]">
            React
          </p>
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px]">
            TypeScript
          </p>
          <div className="w-1 h-1 rounded-full bg-neutral-400" />
          <span className="text-xs">Aug 15, 2024</span>
        </div>

        <div className="my-11 font-RubikMedium">
          <h2 className="text-2xl font-RubikExtraBold mt-4">
            What is the Juno chrome extension?
          </h2>

          <p className="my-4">
            The Juno chrome extension was created to allow users to seamlessly interact with profiles they 
            have either selected or created in Juno. The Juno chrome extension automatically syncs
            with Juno allowing for a smooth transition between both platforms.
          </p>

          <p className="my-4">
            Interaction is conducted using a assigned shortcut. To interact the user holds down the shortcut, which
            starts speech recognition within the browser. To end a session the user can click the assigned shortcut once.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Speech Recognition
          </h2>

          <p>
            Once the shortcut is held, speech recognition begins. Speech recognition entails audio recording via Web Audio API
            via microphone input. The recorded data is then sent to Google Cloud Speech-to-Text API, in which the user&apos;s speech
            is returned as a string.
          </p>
                    
          <h2 className="text-2xl font-RubikExtraBold my-5">
            Intent Recognition
          </h2>

          <p>
            The user&apos;s intent is deteced using Azure&apos;s Conversational language understanding service
            which takes a query in the form of text (in our case the user&apos;s speech) and returning the top intent, top entity, and 
            confidence level.  <br />{" "} <br />{" "}

            For example, given the user&apos;s speech: &quot;Open Google&quot; <br />{" "} <br />{" "}

            The top intent would be: &quot;Open Webpage&quot; <br />{" "}
            The top entity would be: &quot;Google&quot; <br />{" "}
            The confidence level would be: .9 (in which 1 indicates 100% confidence)  <br />{" "}
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Large language model interaction
          </h2>

          <p>
            After the user&apos;s speech has been retrieved, the user&apos;s speech is used to query the large language model.
            As well, the user&apos;s selected prompt via their selected profile is used to provide the foundational context 
            and background information to the large language model. Specifcally the prompt specifies the large language model&apos;s
            personality, context, interaction guidelines, background, and temperature (variability in responses)
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Text-to-Speech using Elevenlabs
          </h2>

          <p>
            After the large language model&apos;s response is retrieved, Elevenlabs text-to-speech is performed on it using 
            the user&apos;s selected voice in their profile.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">User Interface</h2>

          <p>
           The user interface was intended to be clean and minamilsitic in design. Shadcn was used for 
           many of the components such as the combo box, breadcrumb, and card display. From the main page the user
           can easily browser through and select their profile, as well as assign their shortcut. Which are the two main
            functionalities intended for the chrome extension.
          </p>
          <div className="my-9">
            <Image
              width={1000}
              height={1000}
              className="rounded-lg h-200 w-full object-cover"
              src="/juno-chrome-extension.png"
              alt=""
            />
          </div>
        </div>
      </div>
  );
};

export default JunoChromeExtensionBlogContent;