import React from "react";
import { Container } from "../container";
import { Heading } from "../heading";
import { Subheading } from "../subheading";
import { Card, CardContent, CardCTA, CardSkeleton, CardTitle } from "./card";
import { IconPlus } from "@tabler/icons-react";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonTwo } from "./skeletons/second";

export const Features = () => {
  return (
    <Container id="features" className="py-10 md:py-20 lg:py-32">
      <div className="flex xl:flex-row flex-col xl:items-baseline-last justify-between gap-10">
        <Heading className="text-center lg:text-left">
          Everything You Need <br /> to Stay Productive.
        </Heading>
        <Subheading className="text-center lg:text-left mx-auto lg:mx-0">
          Built around the GTD methodology. Capture thoughts instantly, process
          them into actionable tasks, and execute with clarity. Your complete
          productivity system in one beautiful app.
        </Subheading>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 md:my-20">
        <Card className="rounded-tl-3xl rounded-bl-3xl">
          <CardSkeleton>
            <SkeletonOne />
          </CardSkeleton>
          <CardContent>
            <CardTitle>Inbox: Capture Everything Instantly</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
        <Card>
          <CardSkeleton>
            <SkeletonTwo />
          </CardSkeleton>
          <CardContent>
            <CardTitle>Today View: Focus on What Matters</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
        <Card className="rounded-tr-3xl rounded-br-3xl">
          <CardSkeleton>
            <SkeletonThree />
          </CardSkeleton>
          <CardContent>
            <CardTitle>Projects & Areas: Organize Your Life</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};
