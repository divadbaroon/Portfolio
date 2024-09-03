"use client";
import Link from "next/link";
import React from "react";
import { PiCodeThin } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

function Homepage() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.6,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="w-full lg:w-fit "
    >
      <div className="  bg-[#1C1C1C] lg:bg-transparent rounded-2xl ">
        <div>
          <div className="flex gap-x-6 p-4">
            <PiCodeThin className="text-6xl text-neutral-50" />

            <div>
              <h1 className="text-2xl font-RubikMedium text-neutral-300">
                Semicolon,{" "}
                <span className="text-sm text-neutral-400">A Dev Blog</span>
              </h1>
              <p className="max-w-sm text-neutral-400 text-sm">
                I love to design and code ideas that interest me, and <br />{" "}
                occasionally i write about them
              </p>
            </div>
          </div>

          <div className="border border-neutral-700 my-5" />

           {/* without image */}

           <div className="mt-6  bg-[#1C1C1C] rounded-lg text-neutral-400">
           <Link href={"/dashboard/juno-chrome-extension"}>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">Aug 15, 2024</span>
                  <h2 className="text-sm font-RubikMedium">
                    Juno Chrome Extension
                  </h2>
                </div>
              </div>
            </div>
            </Link>
            <Link href={"/dashboard/juno"}>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">May 15, 2024</span>
                  <h2 className="text-sm font-RubikMedium">
                    Juno
                  </h2>
                </div>
              </div>
            </div>
            </Link>
            <Link href={"/dashboard/limo-track"}>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">Apr 29, 2024</span>
                  <h2 className="text-sm font-RubikMedium">
                    LimoTrack
                  </h2>
                </div>
              </div>
            </div>
            </Link>
            <Link href={"/dashboard/juno-v1"}>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">Dec 15, 2023</span>
                  <h2 className="text-sm font-RubikMedium">
                    Junov.1
                  </h2>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Homepage;