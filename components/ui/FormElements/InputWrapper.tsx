import React from "react";
import { twMerge } from "tailwind-merge";

interface InputWrapperProps {
  className?: string;
  children: React.ReactNode;
  labelClassName?: string;
  label: string;
  name: string;
}

const InputWrapper = ({
  className,
  children,
  name,
  label,
  labelClassName,
}: InputWrapperProps) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <label
        htmlFor={name}
        className={twMerge("font-semibold mb-1", labelClassName)}
      >
        {label}
      </label>
      <div className="w-full border border-grayish-blue px-2 rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default InputWrapper;
