import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-background">
        <Hero />
        <Features />

        {/* Placeholder sections for navigation targets */}
        <section id="showcase" className="min-h-screen w-full pt-16" />
        <section id="pricing" className="min-h-screen w-full pt-16" />
      </main>
    </>
  );
}
