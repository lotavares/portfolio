import { ScrollSnap } from "@/components/ScrollSnap";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Introduction } from "@/components/sections/Introduction";
import StructuredData from "@/components/StructuredData";
import { generateMetadata } from "./metadata";

export { generateMetadata };

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen">
        <ScrollSnap />
        <Introduction />
        <About />
        <Contact />
      </div>
    </>
  )
}