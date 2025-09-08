import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Introduction } from "@/components/sections/Introduction";
import { ScrollSnap } from "@/components/ScrollSnap";

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