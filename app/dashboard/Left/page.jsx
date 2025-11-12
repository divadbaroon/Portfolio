"use client";

import React, { useState, useEffect } from "react";

import {
  PiMagicWandThin,
  PiShapesThin,
  PiGithubLogoLight,
  PiLinkedinLogo,
} from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { SiPearson } from "react-icons/si";
import { BiHealth } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Leftpage() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isDashboard = pathname.includes('/dashboard/');

  useEffect(() => {
    setIsVisible(true);
  }, []);

    return (
      <div 
        className={`w-full lg:w-fit ${!isDashboard ? `transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}` : 'opacity-100'}`}
        style={!isDashboard ? { transitionDelay: '100ms' } : undefined}
      >
        <div className="hidden md:block bg-[#1C1C1C] w-full md:w-80 h-fit sticky top-5">
          <div className="md:w-80 w-full p-3 border border-neutral-800 rounded-2xl h-full bg-[#1C1C1C]">
            <div className="flex">
              <div className="w-full relative">
                <Image
                  width={1000}
                  height={1000}
                  className="w-28 h-28 rounded-full object-cover"
                  src="/headshot.png"
                  alt=""
                />
                <div />
                <h1 className="font-RubikExtraBold text-xl text-neutral-300 mt-3">
                  David Barron
                </h1>
                <p className="text-xs font-RubikMedium text-neutral-300 mt-2">
                  dbarron410@vt.edu 📧
                </p>
  
                <div className="flex w-full">
                  <div className="flex gap-x-1 text-xs my-4">
                    <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                      NextJS
                    </p>
                    <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                      React
                    </p>
                    <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                      TypeScript
                    </p>
                    <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold shrink-0">
                      Supabase
                    </p>
                    <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-RubikBold">
                      Git
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="flex gap-x-1.5 absolute top-2.5 right-2">
                <Link 
                  href="https://github.com/divadbaroon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                >
                  <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center hover:bg-neutral-700/70 transition-colors">
                    <PiGithubLogoLight className="text-neutral-100" />
                  </div>
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/david-barron-8248a11aa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                >
                  <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center hover:bg-neutral-700/70 transition-colors">
                    <PiLinkedinLogo className="text-neutral-100" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="border border-[#282828] text-neutral-300 my-1" />
  
            <div className="w-full text-neutral-300">
              <h2 className="font-RubikBold my-4">Bio</h2>
              <p className="text-[12px] font-RubikRegular my-3 -mt-2">
                Masters student at Virginia Tech conducting research <br /> 
                on the intersection of AI and education under the <br /> 
                supervision of{" "}
                <a 
                  href="https://chensivan.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-neutral-100 underline transition-colors"
                >
                  Dr. Chen
                </a>
                .{" "}
              </p>
  
              <div className="mt-6 flex justify-between text-sm">
                <div className="flex items-center gap-x-1">
                  <PiShapesThin />
                  <span className="text-xs font-RubikRegular">
                    3+ Years Coding Experience
                  </span>
                </div>
                <div className="flex items-center gap-x-1">
                  <PiMagicWandThin />
                  <span className="text-xs font-RubikRegular">4 Projects</span>
                </div>
              </div>
  
              <div className="border border-[#282828] text-neutral-300 my-6" />
  
              <div className="my-4 -mt-1">
                <h1 className="font-RubikRegular">Work History</h1>
                <div className="mt-7 flex justify-between">
                  <div className="flex gap-x-3">
                    <FaUniversity className="text-xl" />
                    <div className="-mt-1">
                      <h3 className="text-sm font-RubikMedium">Research Assistant</h3>
                      <p className="text-[9px]">Virginia Tech</p>
                    </div>
                  </div>
                  <small className="text-[9px] text-neutral-300">
                    Oct 2024 - Present
                  </small>
                </div>
                <div className="my-3 flex justify-between">
                  <div className="flex gap-x-3">
                    <SiPearson className="text-xl" />
                    <div className="-mt-1">
                      <h3 className="text-sm font-RubikMedium">Cloud Engineer Intern</h3>
                      <p className="text-[9px]">Pearson</p>
                    </div>
                  </div>
                  <small className="text-[9px] text-neutral-300">
                    May 2023 - Aug 2023
                  </small>
                </div>
                <div className="my-3 flex justify-between">
                  <div className="flex gap-x-3">
                    <BiHealth className="text-xl" />
                    <div className="-mt-1">
                      <h3 className="text-sm font-RubikMedium">
                        Information Security Intern
                      </h3>
                      <p className="text-[9px]">Premier Inc</p>
                    </div>
                  </div>
                  <small className="text-[9px] text-neutral-300">
                    May 2022 - Sep 2022
                  </small>
                </div>
                <div className="my-3 flex justify-between">
                  <div className="flex gap-x-3">
                    <MdOutlineSecurity className="text-xl" />
                    <div className="-mt-1">
                      <h3 className="text-sm font-RubikMedium">
                        Cyber Security Intern
                      </h3>
                      <p className="text-[9px]">Truple Point Security</p>
                    </div>
                  </div>
                  <small className="text-[9px] text-neutral-300">
                    Feb 2022 - May 2022
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Leftpage;