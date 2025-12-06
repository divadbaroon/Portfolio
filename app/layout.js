import "./globals.css";
import Theming from "@/components/providers/Theme";

export const metadata = {
  title: "David Barron - Portfolio",
  description: "Masters student at Virginia Tech researching AI and education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#171717]">
        <Theming>
          {children}
        </Theming>
      </body>
    </html>
  );
}