import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";
import { SocialProof } from "@/components/SocialProof";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-background">
        <Hero />
        <Features />
        <Showcase />
        <SocialProof />
        <CTA />

        {/* Placeholder sections for navigation targets */}
        <section id="pricing" className="min-h-[50vh] w-full pt-16" />
      </main>
      <Footer />
    </>
  );
}
