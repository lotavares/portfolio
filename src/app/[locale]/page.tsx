import { About } from "@/components/sections/About";
import { Introduction } from "@/components/sections/Introduction";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Introduction />
      <About />
    </div>
  )
}