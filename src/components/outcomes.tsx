import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { LandingImages } from "./landing-images";
import { GradientDivider } from "./gradient-divider";

export const Outcomes = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden">
      <Container>
        <Heading>
          A GTD Experience <br />
          You&apos;ll Love
        </Heading>

        <Subheading className="py-8">
          Designed with the elegance and simplicity of Things 3. Every
          interaction feels natural, every view is purposeful, and your focus
          stays where it belongs: on getting things done.
        </Subheading>

        <LandingImages
          firstImageSrc={"https://assets.aceternity.com/screenshots/5.jpg"}
          secondImageSrc={"https://assets.aceternity.com/screenshots/6.jpg"}
        />
      </Container>
      <GradientDivider />
    </section>
  );
};
