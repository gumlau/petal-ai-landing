"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background pt-16">
      {/* Animated Grid Background */}
      <GridBackground />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          {/* Text Content */}
          <motion.div
            className="max-w-2xl lg:max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="mb-6 inline-flex items-center rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary" />
              Inspired by Things 3
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Get Things Done,{" "}
              <span className="text-primary">Beautifully</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              A beautiful, intuitive GTD app that helps you capture, organize,
              and complete your tasks with ease. Experience productivity the way
              it was meant to be.
            </p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
              >
                Start for Free
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <PlayIcon className="mr-2 h-4 w-4" />
                Watch Demo
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image/Mockup */}
          <motion.div
            className="mt-12 w-full max-w-lg lg:mt-0 lg:max-w-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <AppMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
            linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      {/* Animated floating orbs */}
      <motion.div
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

function AppMockup() {
  return (
    <div className="relative">
      {/* Browser frame */}
      <div className="overflow-hidden rounded-xl border border-border bg-secondary/30 shadow-2xl backdrop-blur-sm">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="ml-4 flex-1 rounded-md bg-background/50 px-3 py-1 text-xs text-muted-foreground">
            app.petalgtd.com
          </div>
        </div>

        {/* App content placeholder */}
        <div className="bg-background p-4">
          {/* Sidebar + Main content layout */}
          <div className="flex gap-4">
            {/* Sidebar */}
            <div className="hidden w-48 space-y-2 sm:block">
              <div className="rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
                <span className="mr-2">📥</span> Inbox
              </div>
              <div className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary">
                <span className="mr-2">⭐</span> Today
              </div>
              <div className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary">
                <span className="mr-2">📅</span> Upcoming
              </div>
              <div className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary">
                <span className="mr-2">📁</span> Projects
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Inbox</h3>
              {/* Task items */}
              {[
                { text: "Review project proposal", done: true },
                { text: "Schedule team meeting", done: false },
                { text: "Update documentation", done: false },
                { text: "Send weekly report", done: false },
              ].map((task, i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border border-border bg-background p-3",
                    task.done && "opacity-60"
                  )}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: task.done ? 0.6 : 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div
                    className={cn(
                      "flex h-5 w-5 items-center justify-center rounded-full border-2",
                      task.done
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    )}
                  >
                    {task.done && (
                      <CheckIcon className="h-3 w-3 text-primary-foreground" />
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-sm",
                      task.done
                        ? "text-muted-foreground line-through"
                        : "text-foreground"
                    )}
                  >
                    {task.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-4 -left-4 -right-4 h-8 rounded-b-xl bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
