"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative w-full overflow-hidden py-24 sm:py-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />

      {/* Animated orb decorations - GPU accelerated */}
      <motion.div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl will-change-transform"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl will-change-transform"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Headline */}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Ready to get things{" "}
            <span className="text-primary">done</span>?
          </h2>

          {/* Value Proposition */}
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of productive people who have transformed their
            workflow with Petal GTD. Start organizing your life today.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="#signup"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
            >
              Get Started Free
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </motion.div>

          {/* Secondary Text */}
          <motion.div
            className="mt-4 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-primary" />
              No credit card required
            </span>
            <span className="hidden text-border sm:inline">•</span>
            <span className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-primary" />
              Free forever plan available
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
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

function CheckCircleIcon({ className }: { className?: string }) {
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
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
