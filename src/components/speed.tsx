import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { LandingImages } from "./landing-images";
import { GradientDivider } from "./gradient-divider";

export const Speed = () => {
  return (
    <section
      id="showcase"
      className="pt-10 md:pt-20 lg:pt-10 relative overflow-hidden"
    >
      <Container>
        <Heading>
          Upcoming Calendar <br />
          Plan Your Week
        </Heading>

        <Subheading className="py-8">
          See all your scheduled tasks at a glance. The Upcoming view shows your
          tasks organized by day, helping you plan ahead and never miss a
          deadline.
        </Subheading>

        <LandingImages
          firstImageSrc={"https://assets.aceternity.com/screenshots/3.jpg"}
          secondImageSrc={"https://assets.aceternity.com/screenshots/4.jpg"}
        />
      </Container>
      <GradientDivider />
    </section>
  );
};
