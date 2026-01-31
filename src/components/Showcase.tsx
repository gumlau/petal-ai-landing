"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const views = [
  {
    id: "today",
    label: "Today",
    icon: TodayIcon,
    content: TodayView,
  },
  {
    id: "inbox",
    label: "Inbox",
    icon: InboxIcon,
    content: InboxView,
  },
  {
    id: "project",
    label: "Project",
    icon: ProjectIcon,
    content: ProjectView,
  },
];

export function Showcase() {
  const [activeView, setActiveView] = useState("today");

  const ActiveContent =
    views.find((v) => v.id === activeView)?.content ?? TodayView;

  return (
    <section id="showcase" className="relative w-full bg-background py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-8 text-center sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            A GTD experience you&apos;ll{" "}
            <span className="text-primary">love</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Clean, intuitive, and designed to help you focus on what matters
            most. See how Petal GTD transforms your productivity workflow.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-1 rounded-xl border border-border bg-secondary/30 p-1 sm:p-1.5 backdrop-blur-sm">
            {views.map((view) => {
              const Icon = view.icon;
              return (
                <button
                  key={view.id}
                  onClick={() => setActiveView(view.id)}
                  className={cn(
                    "flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 sm:px-4",
                    activeView === view.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground active:bg-secondary/80"
                  )}
                >
                  <Icon className="h-5 w-5 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">{view.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Browser Frame Mockup */}
        <motion.div
          className="relative mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Shadow and depth effects */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-b from-primary/5 to-transparent blur-2xl" />

          {/* Browser frame */}
          <div className="overflow-hidden rounded-2xl border border-border bg-secondary/20 shadow-2xl shadow-black/10 backdrop-blur-sm">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="ml-4 flex-1 rounded-md bg-background/50 px-3 py-1.5 text-xs text-muted-foreground">
                <span className="hidden sm:inline">https://</span>
                app.petalgtd.com
              </div>
            </div>

            {/* App content */}
            <div className="bg-background">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeView}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <ActiveContent />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom decorative shadow */}
          <div className="absolute -bottom-8 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-black/5 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

// View Components
function TodayView() {
  const tasks = [
    { text: "Morning standup with team", time: "9:00 AM", done: true },
    { text: "Review quarterly goals", time: "10:30 AM", done: true },
    { text: "Design review session", time: "2:00 PM", done: false },
    { text: "Update project roadmap", time: "4:00 PM", done: false },
    { text: "Weekly team retro", time: "5:00 PM", done: false },
  ];

  return (
    <div className="flex min-h-[320px] gap-0 sm:min-h-[400px] md:min-h-[500px]">
      {/* Sidebar */}
      <Sidebar activeItem="today" />

      {/* Main content */}
      <div className="flex-1 p-3 sm:p-4 md:p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
              Today
            </h3>
            <p className="text-sm text-muted-foreground">Friday, January 31</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary sm:h-10 sm:w-10">
            {tasks.filter((t) => !t.done).length}
          </div>
        </div>

        <div className="space-y-3">
          {tasks.map((task, i) => (
            <TaskItem key={i} task={task} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function InboxView() {
  const tasks = [
    { text: "Research new productivity frameworks", tag: "Research" },
    { text: "Call with potential client", tag: "Sales" },
    { text: "Book flight for conference", tag: "Travel" },
    { text: "Review team performance", tag: "Management" },
    { text: "Update portfolio website", tag: "Personal" },
    { text: "Prepare quarterly presentation", tag: "Work" },
  ];

  return (
    <div className="flex min-h-[320px] gap-0 sm:min-h-[400px] md:min-h-[500px]">
      {/* Sidebar */}
      <Sidebar activeItem="inbox" />

      {/* Main content */}
      <div className="flex-1 p-3 sm:p-4 md:p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
              Inbox
            </h3>
            <p className="text-sm text-muted-foreground">
              Capture everything, organize later
            </p>
          </div>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90 sm:h-10 sm:w-10">
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-3">
          {tasks.map((task, i) => (
            <motion.div
              key={i}
              className="group flex items-center gap-3 rounded-lg border border-border bg-background p-3 transition-all hover:border-primary/30 hover:shadow-sm sm:p-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-muted-foreground transition-colors group-hover:border-primary" />
              <span className="flex-1 text-sm text-foreground sm:text-base">
                {task.text}
              </span>
              <span className="rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                {task.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectView() {
  const tasks = [
    { text: "Define project scope and objectives", done: true },
    { text: "Create wireframes and mockups", done: true },
    { text: "Set up development environment", done: true },
    { text: "Implement core features", done: false, subtasks: 3 },
    { text: "Write unit tests", done: false, subtasks: 5 },
    { text: "Deploy to staging", done: false },
    { text: "User acceptance testing", done: false },
    { text: "Launch to production", done: false },
  ];

  const progress = Math.round(
    (tasks.filter((t) => t.done).length / tasks.length) * 100
  );

  return (
    <div className="flex min-h-[320px] gap-0 sm:min-h-[400px] md:min-h-[500px]">
      {/* Sidebar */}
      <Sidebar activeItem="project" />

      {/* Main content */}
      <div className="flex-1 p-3 sm:p-4 md:p-6">
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">🚀</span>
            <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
              Website Redesign
            </h3>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Complete overhaul of company website
          </p>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium text-primary">{progress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {tasks.map((task, i) => (
            <motion.div
              key={i}
              className={cn(
                "group flex items-center gap-3 rounded-lg border border-border bg-background p-3 transition-all hover:border-primary/30",
                task.done && "opacity-60"
              )}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: task.done ? 0.6 : 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
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
                  "flex-1 text-sm",
                  task.done
                    ? "text-muted-foreground line-through"
                    : "text-foreground"
                )}
              >
                {task.text}
              </span>
              {task.subtasks && (
                <span className="text-xs text-muted-foreground">
                  {task.subtasks} subtasks
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Shared Components
function Sidebar({ activeItem }: { activeItem: string }) {
  const items = [
    { id: "inbox", icon: InboxIcon, label: "Inbox", count: 6 },
    { id: "today", icon: TodayIcon, label: "Today", count: 3 },
    { id: "upcoming", icon: CalendarIcon, label: "Upcoming" },
    { id: "someday", icon: ArchiveIcon, label: "Someday" },
  ];

  const projects = [
    { id: "project", emoji: "🚀", label: "Website Redesign" },
    { id: "marketing", emoji: "📢", label: "Marketing Campaign" },
    { id: "mobile", emoji: "📱", label: "Mobile App" },
  ];

  return (
    <div className="hidden w-56 border-r border-border bg-secondary/20 p-4 md:block">
      <div className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={cn(
                "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                activeItem === item.id
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-muted-foreground hover:bg-secondary"
              )}
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </div>
              {item.count && (
                <span className="text-xs text-muted-foreground">
                  {item.count}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="my-4 border-t border-border" />

      <div className="space-y-1">
        <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Projects
        </p>
        {projects.map((project) => (
          <div
            key={project.id}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
              activeItem === project.id
                ? "bg-primary/10 font-medium text-primary"
                : "text-muted-foreground hover:bg-secondary"
            )}
          >
            <span>{project.emoji}</span>
            <span className="truncate">{project.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TaskItem({
  task,
  index,
}: {
  task: { text: string; time: string; done: boolean };
  index: number;
}) {
  return (
    <motion.div
      className={cn(
        "group flex items-center gap-3 rounded-lg border border-border bg-background p-3 transition-all hover:border-primary/30 hover:shadow-sm sm:p-4",
        task.done && "opacity-60"
      )}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: task.done ? 0.6 : 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <div
        className={cn(
          "flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors",
          task.done
            ? "border-primary bg-primary"
            : "border-muted-foreground group-hover:border-primary"
        )}
      >
        {task.done && (
          <CheckIcon className="h-3 w-3 text-primary-foreground" />
        )}
      </div>
      <span
        className={cn(
          "flex-1 text-sm sm:text-base",
          task.done ? "text-muted-foreground line-through" : "text-foreground"
        )}
      >
        {task.text}
      </span>
      <span className="text-xs text-muted-foreground sm:text-sm">
        {task.time}
      </span>
    </motion.div>
  );
}

// Icon Components
function TodayIcon({ className }: { className?: string }) {
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
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

function InboxIcon({ className }: { className?: string }) {
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
        d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-17.5 0V6.75a2.25 2.25 0 012.25-2.25h13.5a2.25 2.25 0 012.25 2.25v6.75m-17.5 0h17.5m-17.5 0v3a2.25 2.25 0 002.25 2.25h13.5a2.25 2.25 0 002.25-2.25v-3"
      />
    </svg>
  );
}

function ProjectIcon({ className }: { className?: string }) {
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
        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
      />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
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
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    </svg>
  );
}

function ArchiveIcon({ className }: { className?: string }) {
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
        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
      />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
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
        d="M12 4.5v15m7.5-7.5h-15"
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
