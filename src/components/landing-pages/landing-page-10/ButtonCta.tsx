// This component is used as a reusable call-to-action button across different parts of the website.
// It can be configured with different labels and actions, making it versatile for various user interactions.
// The component accepts props such as `label` (to display button text) and `onClick` (to handle button clicks).

import Link from "next/link";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { buttonVariants } from "@/components/ui/button";

interface ButtonCtaProps {
  className?: string;
}

const ButtonCta: FC<ButtonCtaProps> = async ({ className }) => {
  return (
    <Link
      href="/"
      className={cn(
        buttonVariants({ variant: "default" }),
        "rounded-lg border border-[#51DCA3] green-btn-gradient",
        className
      )}
    >
      Login
    </Link>
  );
};

export default ButtonCta;
