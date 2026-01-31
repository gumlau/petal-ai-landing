import React from "react";
import { Logo } from "./logo";
import { Container } from "./container";
import { Subheading } from "./subheading";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconSend,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const features = [
    {
      title: "Inbox",
      href: "#features",
    },
    {
      title: "Today View",
      href: "#features",
    },
    {
      title: "Upcoming",
      href: "#showcase",
    },
    {
      title: "Projects & Areas",
      href: "#features",
    },
    {
      title: "Tags",
      href: "#features",
    },
    {
      title: "Logbook",
      href: "#features",
    },
  ];

  const company = [
    {
      title: "About",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#pricing",
    },
    {
      title: "Contact",
      href: "#",
    },
    {
      title: "Blog",
      href: "#",
    },
  ];

  return (
    <footer className="border-t perspective-distant overflow-hidden border-neutral-200 py-10 md:py-20 lg:py-32 relative">
      <Container className="grid grid-cols-1 lg:grid-cols-5 gap-10 relative z-20">
        <div className="lg:col-span-2 flex flex-col gap-4 items-start">
          <Logo />
          <Subheading>Beautiful task management inspired by Things 3</Subheading>
          <Button className="shadow-brand">Get Started Free</Button>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Features</h4>
          <ul className="list-none flex flex-col gap-2">
            {features.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-neutral-600 text-sm hover:text-black transition duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Company</h4>
          <ul className="list-none flex flex-col gap-2">
            {company.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-neutral-600 text-sm hover:text-black transition duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Newsletter</h4>
          <div className="border relative border-neutral-200 flex items-center justify-center bg-neutral-100 rounded-md">
            <input
              className="bg-transparent outline-none py-2 pl-2 pr-12 placeholder-neutral-400 text-neutral-600 text-sm"
              type="email"
              placeholder="Your email"
            />
            <button className="cursor-pointer px-4 py-2 rounded-[7px] bg-black inset-y-0 right-0 absolute">
              <IconSend className="text-white size-4" />
            </button>
          </div>
          <Subheading className="text-sm md:text-sm lg:text-sm">
            Get productivity tips and product updates.
          </Subheading>
        </div>
      </Container>

      <Container className="flex flex-col sm:flex-row justify-between mt-10 relative z-20 gap-4 md:gap-0">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Petal GTD. All rights reserved.
        </p>

        <div className="flex md:items-end items-start flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 *:text-sm *:text-neutral-500 *:hover:text-neutral-900 *:transition-colors">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-neutral-500 hover:text-neutral-900 transition-colors">
              <IconBrandTwitter className="size-4" />
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-neutral-900 transition-colors">
              <IconBrandGithub className="size-4" />
            </Link>
          </div>
        </div>
      </Container>

      <div
        className={cn(
          "flex items-center justify-center gap-20 h-[200%]",
          "absolute -inset-x-[150%] -inset-y-40",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--color-neutral-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100)_1px,transparent_1px)]",
          "mask-radial-from-50%"
        )}
        style={{
          transform: " rotateX(60deg) ",
        }}
      />
    </footer>
  );
};
