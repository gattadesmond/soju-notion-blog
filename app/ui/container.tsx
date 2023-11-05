"use client";
import { twMerge } from "tailwind-merge";

interface IContainer {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: IContainer) {
  return (
    <section
      className={twMerge(
        " relative max-w-4xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5",
        className
      )}
    >
      {children}
    </section>
  );
}
