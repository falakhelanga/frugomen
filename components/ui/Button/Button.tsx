import { ButtonVariant } from "@/types/button-variants";
import React, { ComponentProps, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/tailwindMerger";

const buttonStyles = cva(
  [
    "w-full",
    "flex",
    "justify-center",
    "items-center",
    "py-4",
    "rounded-full",
    "font-bold",
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary-blue hover:bg-secondary-blue/75 text-white",
        outline:
          "border border-2 border-secondary-blue hover:bg-secondary-blue",
      },
      size: {
        sm: "px-4 py-4 text-sm",
        md: "px-4 py-4 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },

    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({
  className,
  variant,
  size,
  ref,
  ...rest
}: ButtonProps) {
  return (
    <button
      ref={ref}
      className={cn(buttonStyles({ variant, size, className }))}
      {...rest}
    />
  );
});

export default Button;
