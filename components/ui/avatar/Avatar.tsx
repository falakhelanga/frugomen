import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface AvatarProps {
  image: string;
  className?: string;
}

const Avatar = ({ image, className }: AvatarProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={twMerge(
        "h-12 w-12 rounded-full object-contain bg-cover bg-no-repeat bg-top",
        className
      )}
    ></div>
  );
};

export default Avatar;
