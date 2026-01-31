import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-background">
        <Hero />

        {/* Placeholder sections for navigation targets */}
        <section id="features" className="min-h-screen w-full pt-16" />
        <section id="showcase" className="min-h-screen w-full pt-16" />
        <section id="pricing" className="min-h-screen w-full pt-16" />
      </main>
    </>
  );
}
