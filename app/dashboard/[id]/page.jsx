"use client";

import { useEffect, useState, useRef } from "react";

import Link from "next/link";
import { useParams } from "next/navigation";

import { PiArrowLeftThin } from "react-icons/pi";

import Sophia from "./Sophia";
import PlotPact from "./PlotPact";
import Dynamite from "./Dynamite";
import Juno from "./Juno";

function Page() {
  const params = useParams();
  const id = params.id;
  const [fade, setFade] = useState(1);
  const scrollRef = useRef(null);

  const renderContent = () => {
    switch(id) {
      case 'sophia':
        return <Sophia />;
      case 'plotpact':
        return <PlotPact />;
      case 'dynamite':
        return <Dynamite />;
      case 'juno':
        return <Juno />;
      default:
        return <div>Blog post not found</div>;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollTop = scrollRef.current.scrollTop;
        const opacity = Math.max(0, 1 - scrollTop / 120);
        setFade(opacity);
      }
    };
    const el = scrollRef.current;
    el?.addEventListener("scroll", handleScroll);
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-neutral-50">
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

      <div
        ref={scrollRef}
        className="custom-scroll"
        style={{
          WebkitMaskImage: `linear-gradient(to bottom, rgba(0,0,0,${fade}) 0%, black 10%, black 100%)`,
          maskImage: `linear-gradient(to bottom, rgba(0,0,0,${fade}) 0%, black 10%, black 100%)`,
          transition: "mask-image 0.2s ease-out, -webkit-mask-image 0.2s ease-out",
          overflowY: "auto",
          maxHeight: "calc(100vh - 3rem)",
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
}

export default Page;
