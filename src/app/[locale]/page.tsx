import { ScrollSnap } from "@/components/ScrollSnap";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Introduction } from "@/components/sections/Introduction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lorena Tavares | Portfolio",
  description: "Software Developer",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollSnap />
      <Introduction />
      <About />
      <Contact />
    </div>
  )
}