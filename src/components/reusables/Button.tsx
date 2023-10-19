import React, { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/tailwindFunction";
import { motion, MotionProps } from "framer-motion";

import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primaryHover",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-white hover:bg-secondary/90",
        muted: "bg-slate-600 text-white hover:bg-slate-700",
        ghost: "bg-transparent text-black",
      },
      size: {
        default: "px-4 py-2",
        sm: "rounded-md pl-3 pr-2 py-1",
        lg: "rounded-md px-5 py-4 font-semibold tracking-wide hover:shadow-lg text-base",
        icon: "h-8 w-8 bg-primary text-white hover:bg-primaryHover rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps &
  VariantProps<typeof buttonVariants> & {
    scale?: number;
  };

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  scale = 0.9,
  ...props
}) => {
  return (
    <motion.button
      whileTap={{ scale }}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export default Button;
