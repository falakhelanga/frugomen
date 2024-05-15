import React, { ComponentProps } from "react";
import { Montserrat } from "next/font/google";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/tailwindMerger";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});
const titleStyles = cva(["font-semibold", montserrat.className], {
  variants: {
    size: {
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-3xl",
    },
  },

  defaultVariants: {
    size: "md",
  },
});

type TitleProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
} & ComponentProps<"h1"> &
  VariantProps<typeof titleStyles>;

const Title = ({ className, size, ...rest }: TitleProps) => {
  return <h1 className={cn(titleStyles({ size, className }))} {...rest} />;
};

export default Title;
