import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/ui";

type SectionProps = HTMLAttributes<HTMLDivElement>;

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("w-full px-8 md:px-16 py-16", className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
