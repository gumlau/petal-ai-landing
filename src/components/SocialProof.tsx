"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stats = [
  { value: "10,000+", label: "Productive People" },
  { value: "500,000+", label: "Tasks Completed" },
  { value: "4.9/5", label: "Average Rating" },
];

const logos = [
  { name: "Vercel", icon: VercelIcon },
  { name: "Linear", icon: LinearIcon },
  { name: "Notion", icon: NotionIcon },
  { name: "Slack", icon: SlackIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "GitHub", icon: GitHubIcon },
];

const testimonial = {
  quote:
    "Petal GTD transformed how I manage my work. It's the perfect blend of simplicity and power—exactly what I needed to stay focused.",
  author: "Sarah Chen",
  role: "Product Designer at Figma",
  avatar: null,
};

export function SocialProof() {
  return (
    <section className="relative w-full bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust Counter */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Trusted by productive people worldwide
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Join <span className="text-primary">10,000+</span> users getting
            things done
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                className="text-4xl font-bold text-primary sm:text-5xl"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Logo Cloud */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="mb-8 text-center text-sm text-muted-foreground">
            Teams from these companies use Petal GTD
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {logos.map((logo, index) => {
              const Icon = logo.icon;
              return (
                <motion.div
                  key={logo.name}
                  className="flex items-center gap-2 text-muted-foreground/60 transition-colors hover:text-muted-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-sm font-medium">{logo.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          className={cn(
            "mx-auto max-w-3xl rounded-2xl border border-border bg-background/50 p-8 backdrop-blur-sm",
            "sm:p-10"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <QuoteIcon className="mb-4 h-8 w-8 text-primary/30" />
          <blockquote className="mb-6 text-lg leading-relaxed text-foreground sm:text-xl">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <UserIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                {testimonial.author}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Icon Components
function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
}

// Company Logo Icons (simplified versions)
function VercelIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M12 2L2 19.5h20L12 2z" />
    </svg>
  );
}

function LinearIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M3.272 3.272a.75.75 0 011.06 0l16.396 16.396a.75.75 0 11-1.06 1.06L3.272 4.332a.75.75 0 010-1.06z" />
      <path d="M12 4.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0z" />
    </svg>
  );
}

function NotionIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 2.091c-.42-.327-.98-.7-2.054-.607l-12.8.98c-.466.093-.56.28-.373.466l1.826 1.278zM5.205 7.39v13.32c0 .7.374 1.026 1.12.98l14.523-.84c.747-.046.84-.513.84-1.073V6.783c0-.56-.233-.84-.747-.793l-15.176.887c-.514.047-.56.327-.56.513zM18.64 8.383c.093.373 0 .747-.373.793l-.7.14v9.876c-.607.326-1.166.513-1.633.513-.746 0-.933-.234-1.493-.934l-4.573-7.17v6.936l1.446.327s0 .746-1.026.746l-2.847.187c-.093-.187 0-.653.327-.747l.84-.233V9.177l-1.166-.093c-.093-.373.14-.887.793-.933l3.066-.187 4.76 7.263v-6.423l-1.213-.14c-.093-.466.233-.793.653-.84l3.14-.233zM3.413 1.618L16.306.564c1.586-.14 1.96-.046 2.94.653l4.013 2.8c.653.466.84.56.84 1.073v16.09c0 1.026-.373 1.633-1.68 1.726l-15.457.934c-.98.046-1.446-.093-1.96-.747l-3.127-4.06c-.56-.746-.793-1.306-.793-1.96V3.297c0-.84.373-1.539 1.33-1.679z" />
    </svg>
  );
}

function SlackIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.163 0a2.528 2.528 0 012.523 2.522v6.312zM15.163 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.163 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 01-2.52-2.523 2.526 2.526 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.163a2.528 2.528 0 01-2.522 2.523h-6.315z" />
    </svg>
  );
}

function FigmaIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zM8.148 24c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.588 4.539zm-.001-7.509a3.023 3.023 0 00-3.019 3.019c0 1.665 1.365 3.019 3.019 3.019 1.705 0 3.117-1.404 3.117-3.068v-2.97H8.147zM8.148 15.02H3.659C1.183 15.02.83 13.006.83 10.53s2.014-4.49 4.49-4.49h4.588v4.44c0 2.503-.658 4.54-1.76 4.54zm-.001-7.51a3.023 3.023 0 00-3.019 3.02c0 1.664 1.354 3.019 3.019 3.019h1.288V7.51H8.147zM15.852 15.02h-4.588V6.04h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-3.117-1.471h3.117c1.665 0 3.019-1.354 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117v6.038z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
