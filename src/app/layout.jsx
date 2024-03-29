import { PT_Mono } from "next/font/google";
import "./globals.css";
import CompleteHeader from "./component/CompleteHeader";

const inter = PT_Mono({ subsets: ["latin"], weight:['400'] });

export const metadata = {
  title: "Gmail clone",
  description: "Generated by create next app",
  keyword: "HTML,CSS, JS, REACT, GIT"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-[1fr_3fr] gap-6">

        <CompleteHeader/>
        {children}
        </div>
        </body>
    </html>
  );
}
