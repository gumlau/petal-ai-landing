import React from "react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonFour } from "./skeletons/four";

export const FeaturesTertiary = () => {
  return (
    <section className="pt-10 md:pt-20 lg:py-32 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 divide-neutral-200">
          <div className="md:border-r border-b border-neutral-200">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800">
                Responsive Design
              </h2>
              <CardDescription>
                Works beautifully on desktop and mobile. Manage your tasks
                wherever you are, with an interface optimized for every screen
                size.
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div className="border-b border-neutral-200">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800">
                OAuth Authentication
              </h2>
              <CardDescription>
                Sign in securely with Google or GitHub. Your data is protected
                with industry-standard security practices.
              </CardDescription>
            </CardContent>
            <CardSkeleton className="mask-radial-from-20%">
              <SkeletonTwo />
            </CardSkeleton>
          </div>
          <div className="md:border-r border-neutral-200">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800">
                Keyboard Shortcuts
              </h2>
              <CardDescription>
                Power users love our keyboard shortcuts. Navigate, create, and
                complete tasks without lifting your hands from the keyboard.
              </CardDescription>
            </CardContent>
            <CardSkeleton className="mask-radial-from-20% mask-r-from-50%">
              <SkeletonThree />
            </CardSkeleton>
          </div>
          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800">
                Weekly Review
              </h2>
              <CardDescription>
                Built-in support for the GTD weekly review. Reflect on what
                you&apos;ve done and plan what comes next.
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonFour />
            </CardSkeleton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 md:p-8">{children}</div>;
};

export const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p className="text-neutral-600 mt-2 max-w-md text-balance">{children}</p>
  );
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative h-80 sm:h-60 flex flex-col md:h-80 overflow-hidden perspective-distant",
        className
      )}
    >
      {children}
    </div>
  );
};
