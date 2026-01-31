import React from "react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { HumanIcon, IntegrationIcon, WorkflowIcon } from "@/icons";

export const FeaturesSecondary = () => {
  return (
    <section className="pt-10 md:pt-20 lg:py-32 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800">
                Tags & Filtering
              </h2>
              <CardDescription>
                Add tags to your tasks for powerful filtering. Find exactly what
                you need with smart search and filtering options across all your
                views.
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800">
                Logbook: Your Achievement History
              </h2>
              <CardDescription>
                Every completed task is saved in your Logbook. Review your
                accomplishments, track progress over time, and celebrate what
                you&apos;ve achieved.
              </CardDescription>
            </CardContent>
            <CardSkeleton className="mask-radial-from-50% mask-t-from-50%">
              <SkeletonTwo />
            </CardSkeleton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-20">
          <div>
            <div className="flex items-center gap-2">
              <WorkflowIcon />
              <h3 className="font-bold text-lg text-neutral-600">
                Quick Add
              </h3>
            </div>

            <p className="text-neutral-500 text-base mt-2">
              Capture tasks in under 3 seconds with keyboard shortcuts and quick
              entry. Never lose a thought again.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <IntegrationIcon />
              <h3 className="font-bold text-lg text-neutral-600">
                Someday & Anytime
              </h3>
            </div>

            <p className="text-neutral-500 text-base mt-2">
              Park ideas for later in Someday or keep flexible tasks in Anytime.
              Perfect for long-term planning without cluttering your Today.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <HumanIcon />
              <h3 className="font-bold text-lg text-neutral-600">
                Dark & Light Mode
              </h3>
            </div>

            <p className="text-neutral-500 text-base mt-2">
              Work comfortably day or night. Choose your preferred theme or let
              it follow your system settings.
            </p>
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
