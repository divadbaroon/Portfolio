"use client";

import Link from "next/link";
import { PiArrowLeftThin } from "react-icons/pi";
import { useParams } from 'next/navigation';

import Sophia from "./Sophia";
import PlotPact from "./PlotPact";
import Dynamite from "./Dynamite";
import JunoChromeExtensionBlogContent from "./JunoChromeExtensionBlog";

function Page() {
  const params = useParams();
  const id = params.id;

  const renderContent = () => {
    switch(id) {
      case 'sophia':
        return <Sophia />;
      case 'plotpact':
        return <PlotPact />;
      case 'dynamite':
        return <Dynamite />;
      case 'juno':
        return <JunoChromeExtensionBlogContent />;
      default:
        return <div>Blog post not found</div>;
    }
  };

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
      {renderContent()}
    </div>
  );
}

export default Page;