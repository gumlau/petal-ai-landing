import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./ui/button";
import Link from "next/link";
import { LandingImages } from "./landing-images";
import { GradientDivider } from "./gradient-divider";

export const Hero = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden">
      <Container>
        <Heading as="h1">
          Get Things Done, <br /> Beautifully.
        </Heading>

        <Subheading className="py-8">
          A modern GTD productivity app inspired by Things 3. Capture ideas in
          your Inbox, plan your Today, organize with Projects and Areas, and
          achieve more with a clean, focused interface.
        </Subheading>
        <div className="flex items-center gap-6">
          <Button className="shadow-brand">Start for Free</Button>
          <Button asChild variant="outline">
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
        <LandingImages />
      </Container>
      <GradientDivider />
    </section>
  );
};
