import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LimoTrackBlogContent = () => {
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
          LimoTrack
        </motion.h1>
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
          <span className="text-xs">Apr 29, 2024</span>
        </div>

        <div className="my-11 font-RubikMedium">
          <h2 className="text-2xl font-RubikExtraBold mt-4">
            What is the limoTrack?
          </h2>

          <p className="my-4">
            Limotrack is a website designed for TNT Company, a local car company, to showcase their vehicles and streamline their reservation process. The platform aims to enhance the company's online presence and improve customer experience by providing a convenient way to view available vehicles and make reservations.
          </p>

          <p className="my-4">
            This project was created for my senior year project managment course, in which I was the lead programmer.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-">
            User Interface
          </h2>

          <div className="my-9">
            <Image
              width={1000}
              height={1000}
              className="rounded-lg h-200 w-full object-cover"
              src="/limoTrack.png"
              alt=""
            />
          </div>

          <div className="my-9">
            <Image
              width={1000}
              height={1000}
              className="rounded-lg h-200 w-full object-cover"
              src="/limoTrack-fleet.png"
              alt=""
            />
          </div>

          <p>
            LimoTrack was intended to provide a clean and simple platform for user's to view TNT Limousine's fleet of vehicles. <br />{" "} <br />{" "}

            As well as quickly see important information about the vehicle such as price/ hour, vehicle type, transmission type, passenger capacity, 
            and fuel tank capacity
          </p>
                    
          <h2 className="text-2xl font-RubikExtraBold my-5">
            Displaying vehicle information
          </h2>

          <div className="my-9">
            <Image
              width={1000}
              height={1000}
              className="rounded-lg h-200 w-full object-cover"
              src="/limoTrack-vehicleInformation.png"
              alt=""
            />
          </div>

          <p>
            upon clicking "More Information" the use can see a detailed description of the vehicle as well as the ability to reserve it.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">Conclusion</h2>

          <p>
           Overall, TNT Limousine was very pleased with the website.
          </p>
          
        </div>
      </div>
  );
};

export default LimoTrackBlogContent;