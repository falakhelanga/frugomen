import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContentWrapProps {
  children: ReactNode;
  className?: string;
  [x: string]: any;
}

const ContentWrapper = ({
  children,
  className = "",
  ...rest
}: ContentWrapProps) => {
  return (
    <div {...rest} className={twMerge("mx-auto w-full  px-4", className)}>
      {children}
    </div>
  );
};

export default ContentWrapper;
