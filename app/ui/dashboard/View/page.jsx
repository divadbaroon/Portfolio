"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { HiOutlineDocumentText } from "react-icons/hi";

import TestimonialTooltip from "@/app/TestimonialTooltip/page";
import { motion } from "framer-motion";
import Link from 'next/link';

function page() {
  const pathname = usePathname();
  const isProjectPage = pathname.includes('/dashboard/');

  const Wrapper = isProjectPage ? 'div' : motion.div;
  const wrapperProps = isProjectPage 
    ? {} 
    : {
        initial: { y: 10, opacity: 0 },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.9,
            type: "spring",
            stiffness: 200,
          },
        }
      };

  return (
    <Wrapper
      {...wrapperProps}
      className="lg:block w-ful lg:w-fit hidden max-xl:hidden"
    >
      <div className="md:w-60 w-full rounded-2xl h-fit sticky top-5">
        <div>
          <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 h-fit">
            <h2 className="font-RubikBold text-neutral-200">
              Resume
            </h2>
            <p className="text-xs my-3 text-neutral-400 font-RubikRegular">
              Feel free to preview my resume!
            </p>
            <Link 
              href="/david_barron_resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-RubikMedium text-neutral-50 ">
                Preview
              </button>
            </Link>

            <div className="border border-neutral-700 my-5" />

            <div className="text-neutral-400">
              <h1 className="font-RubikMedium text-neutral-200">Publications</h1>
              <div className="mt-6">
                <Link 
                  href="https://arxiv.org/abs/2507.20137" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:bg-neutral-800 p-2 rounded-md block"
                >
                  <div className="flex gap-x-3">
                    <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                      <HiOutlineDocumentText className="text-lg" />
                    </div>
                    <div>
                     <h3 className="text-xs font-RubikMedium text-neutral-200">
                      Dynamite: Real-Time Debriefing Slide Authoring
                    </h3>
                    <p className="text-[10px] text-neutral-500 mt-1">
                      P. Keelawat, D. Barron et al.
                    </p>
                    <p className="text-[10px] text-neutral-500">
                      arXiv 2025
                    </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="border border-neutral-700 my-5" />

              <div className="flex items-center justify-center gap-x-2">
                <TestimonialTooltip />
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </Wrapper>
  );
}

export default page;