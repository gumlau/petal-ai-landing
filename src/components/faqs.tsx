"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { UserChatIcon } from "@/illustrations/general";
import { Heading } from "./heading";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FAQs = () => {
  const questions = [
    {
      question: "What is Petal GTD?",
      answer:
        "Petal GTD is a modern web-based task management application inspired by Things 3. It implements the Getting Things Done (GTD) methodology with a beautiful, clean interface that helps you capture, organize, and execute your tasks effectively.",
    },
    {
      question: "What is the GTD methodology?",
      answer:
        "GTD (Getting Things Done) is a productivity system created by David Allen. It involves capturing all your tasks and ideas, processing them into actionable items, organizing them into projects and contexts, reviewing regularly, and then executing with focus. Petal GTD provides the perfect digital environment for this workflow.",
    },
    {
      question: "How does Petal GTD differ from other task managers?",
      answer:
        "Petal GTD combines the elegant design philosophy of Things 3 with modern web technologies. It features a distraction-free interface, powerful organization with Projects and Areas, flexible scheduling with Today, Upcoming, Anytime, and Someday views, and seamless tag-based filtering.",
    },
    {
      question: "Is there a free plan available?",
      answer:
        "Yes! Petal GTD offers a generous free plan that includes unlimited tasks, all core views (Inbox, Today, Upcoming), Projects & Areas organization, and tag filtering. No credit card required to get started.",
    },
    {
      question: "Can I access Petal GTD on mobile?",
      answer:
        "Petal GTD is built with responsive design, so it works beautifully on any device - desktop, tablet, or mobile. Access your tasks from anywhere with a web browser.",
    },
  ];
  return (
    <section className="py-10 md:py-20 lg:py-32 relative overflow-hidden">
      <Container>
        <UserChatIcon />
        <Heading className="my-10 md:my-20">Frequently Asked Questions</Heading>

        <div className="flex flex-col gap-4">
          {questions.map((question, index) => (
            <Question
              key={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full rounded-3xl overflow-hidden bg-neutral-100 p-4 md:p-8 text-left"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg md:text-2xl font-bold font-display">
          {question}
        </h3>
        <div className="size-6 rounded-full relative bg-black flex items-center justify-center flex-shrink-0 ml-4">
          <IconMinus
            className={cn(
              "size-6 text-white absolute inset-0 transition-all duration-200",
              open && "scale-0 rotate-90"
            )}
          />
          <IconPlus
            className={cn(
              "size-6 text-white absolute inset-0 scale-0 -rotate-90 transition-all duration-200",
              open && "scale-100 rotate-0"
            )}
          />
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        exit={{
          height: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="overflow-hidden"
      >
        <motion.p
          key={String(open)}
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
          className="text-left mt-4 text-neutral-600"
        >
          {answer}
        </motion.p>
      </motion.div>
    </button>
  );
};
