"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
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
      <div className="bg-[#1C1C1C] lg:bg-transparent rounded-2xl">
        <div>
          <div className="p-4">
            <div>
              <h1 className="text-2xl font-RubikMedium text-neutral-300">
                Hi, I&apos;m David!
              </h1>
              <p className="max-w-sm text-neutral-400 text-sm mt-2">
                I love building AI-powered projects that provide personalized <br />
                and proactive learning experiences for students, and <br />
                occasionally I write about them
              </p>
            </div>
          </div>

          <div className="border border-neutral-700 my-5" />

          <div className="mt-6 bg-[#1C1C1C] rounded-lg text-neutral-400">
            <Link href={"/dashboard/sophia"}>
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <Image
                    src="/sophia-thumb.png"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                    alt="Sophia AI Tutoring System"
                  />
                  <div>
                    <span className="text-sm">Oct 2024</span>
                    <h2 className="text-sm font-RubikMedium">
                      Sophia
                    </h2>
                    <p className="text-xs text-neutral-500 mt-1">
                      Multimodal AI tutoring system using concept mapping
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={"/dashboard/dynamite"}>
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <Image
                    src="/dynamite-thumb.png"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                    alt="Dynamite Discussion Platform"
                  />
                  <div>
                    <span className="text-sm">Oct 2024</span>
                    <h2 className="text-sm font-RubikMedium">
                      Dynamite
                    </h2>
                    <p className="text-xs text-neutral-500 mt-1">
                      Real-time discussion platform with AI-generated summaries
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={"/dashboard/juno"}>
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <Image
                    src="/juno-library.png"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                    alt="Juno Chrome Extension"
                  />
                  <div>
                    <span className="text-sm">May 2024</span>
                    <h2 className="text-sm font-RubikMedium">
                      Juno
                    </h2>
                    <p className="text-xs text-neutral-500 mt-1">
                      Chrome extension with configurable LLM agents
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={"/dashboard/plotpact"}>
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <Image
                    src="/plotpact-thumb.png"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                    alt="PlotPact"
                  />
                  <div>
                    <span className="text-sm">2024</span>
                    <h2 className="text-sm font-RubikMedium">
                      PlotPact
                    </h2>
                    <p className="text-xs text-neutral-500 mt-1">
                      AI-powered interactive storytelling platform
                    </p>
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