"use client";

import Link from "next/link";
import React from "react";
import { PiArrowLeftThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { useParams } from 'next/navigation';
import JunoChromeExtensionBlogContent from "./JunoChromeExtensionBlog";
import JunoBlogContent from "./JunoBlog";
import LimoTrackBlogContent from "./limoTrack";
import Junov1BlogContent from "./Junov1Blog";

function Page() {
  const params = useParams();
  const id = params.id;

  const renderContent = () => {
    switch(id) {
      case 'juno-chrome-extension':
        return <JunoChromeExtensionBlogContent />;
      case 'juno':
        return <JunoBlogContent />;
      case 'limo-track':
        return <LimoTrackBlogContent />;
      case 'juno-v1':
        return <Junov1BlogContent />;
      default:
        return <div>Blog post not found</div>;
    }
  };

  return (
    <motion.div
      className="text-neutral-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
    >
      <div className="sticky top-5">
        <div>
          <div className="-mt-6">
            <div className="bg-neutral-700/25 backdrop-blur-md h-10 w-full rounded-xl flex items-center gap-x-7">
              <Link href="/">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center ml-3">
                  <div className="bg-neutral-300 rounded-full h-5 w-5 flex items-center justify-center">
                    <PiArrowLeftThin className="text-black text-lg" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
        {renderContent()}
    </motion.div>
  );
}

export default Page;