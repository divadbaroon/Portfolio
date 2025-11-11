"use client";

import { usePathname } from "next/navigation";

import View from "@/app/ui/dashboard/View/page";
import Left from "@/app/dashboard/Left/page";
import Theming from "@/components/providers/Theme";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isProjectPage = pathname.includes('/dashboard/') && pathname !== '/dashboard';

  return (
    <html lang="en">
      <body className="">
        <Theming>
          <div className={`mx-auto ${isProjectPage ? 'max-w-7xl' : 'max-w-5xl'}`}>
            <div className="gap-4 flex md:mt-5 flex-col md:flex-row">
              <Left />
              {children}
              <View />
            </div>
          </div>
        </Theming>
      </body>
    </html>
  );
}