import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-background">
        <Hero />
        <Features />
        <Showcase />

        {/* Placeholder sections for navigation targets */}
        <section id="pricing" className="min-h-screen w-full pt-16" />
      </main>
    </>
  );
}
