import "./globals.css";
import { GeistSans } from "geist/font/sans";
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import Theming from "@/components/providers/Theme";

export const metadata = {
  title: "David Barron - Portfolio",
  description: "PhD student at Virginia Tech researching AI and education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-[#171717]">
        <Theming>
          {children}
        </Theming>
      </body>
    </html>
  );
}