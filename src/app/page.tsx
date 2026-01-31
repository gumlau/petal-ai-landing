import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-background pt-16">
        <h1 className="text-4xl font-bold text-foreground">Petal GTD</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Beautiful task management is coming soon.
        </p>

        {/* Placeholder sections for navigation targets */}
        <section id="features" className="min-h-screen w-full pt-16" />
        <section id="showcase" className="min-h-screen w-full pt-16" />
        <section id="pricing" className="min-h-screen w-full pt-16" />
      </main>
    </>
  );
}
