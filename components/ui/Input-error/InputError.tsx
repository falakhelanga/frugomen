import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputErrorProps = { className?: string } & ComponentProps<"span">;

const InputError = ({ className, ...rest }: InputErrorProps) => {
  return (
    <span
      className={twMerge(` text-red-600 text-sm  bg-opacity-10`, className)}
      {...rest}
    />
  );
};

export default InputError;
