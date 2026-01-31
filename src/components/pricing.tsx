import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { LoopIcon, UsersIcon, LockIcon } from "@/icons";
import { Button } from "./ui/button";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import Link from "next/link";

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-10 md:py-20 lg:py-32 relative overflow-hidden"
    >
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4">
          <Subheading className="mt-2">
            Ready to get things done?
          </Subheading>
          <Heading>
            Simple pricing. <br />
            Start free forever.
          </Heading>
          <Subheading className="mt-4">
            Get started for free with all core features. Upgrade when you need
            more power, collaboration, or advanced features for your
            productivity workflow.
          </Subheading>
          <ul className="list-none *:flex *:items-center *:gap-2 *:font-medium mt-4 flex flex-col gap-2">
            <li>
              <LockIcon />
              <p>Secure OAuth Login</p>
            </li>
            <li>
              <UsersIcon />
              <p>Cross-device Sync</p>
            </li>
            <li>
              <LoopIcon />
              <p>GTD Methodology Built-in</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <PricingCard
            price="0"
            description="Perfect for individuals getting started with GTD."
            ctaLink="#"
            ctaText="Get Started Free"
            steps={[
              "Unlimited Tasks",
              "Inbox, Today & Upcoming",
              "Projects & Areas",
              "Tags & Filtering",
            ]}
          />
          <PricingCard
            price="9"
            description="For power users who want the complete experience."
            ctaLink="#"
            ctaText="Upgrade to Pro"
            steps={[
              "Everything in Free",
              "Unlimited Projects",
              "Advanced Search",
              "Priority Support",
              "Dark Mode",
            ]}
          />
        </div>
      </Container>
    </section>
  );
};

const PricingCard = ({
  price,
  description,
  ctaLink,
  ctaText,
  steps,
}: {
  price: string;
  description: string;
  ctaLink: string;
  ctaText: string;
  steps: string[];
}) => {
  return (
    <div className="p-4 md:p-8 rounded-2xl bg-neutral-100 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <Heading>
          ${price}
          <span className="text-neutral-400 text-sm md:text-xl lg:text-3xl">
            /mo
          </span>
        </Heading>
        <Subheading className="mt-4">{description}</Subheading>
        <Button asChild className="mt-4">
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
      <ul className="list-none *:flex *:items-center *:gap-2 *:font-medium mt-4 flex flex-col gap-2">
        {steps.map((step, index) => (
          <Step key={step + index} title={step} />
        ))}
      </ul>
    </div>
  );
};

const Step = ({ title }: { title: string }) => {
  return (
    <li>
      <IconCircleCheckFilled className="size-5 text-emerald-500" />
      <p className="text-sm md:text-base">{title}</p>
    </li>
  );
};
