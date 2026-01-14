import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background selection:bg-primary/20">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}
