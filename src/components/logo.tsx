import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <LogoIcon />
      <span className="text-sm font-semibold text-neutral-800">
        Petal GTD
      </span>
    </Link>
  );
};

export const LogoIcon = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="#10b981" />
      <path
        d="M8 12.5L10.5 15L16 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
