import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Introduction } from "@/components/sections/Introduction";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Introduction />
      <About />
      <Contact />
    </div>
  )
}