"use client";
import React from "react";
import Icon from "../ui/icon/Icon";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MenuItem = ({ name, link }: MenuItemType) => {
  const pathname = usePathname();

  return (
    <Link href={link}>
      <div
        className={`w-full p-5 ${
          pathname.trim() === link.trim()
            ? "bg-white"
            : "bg-transparent hover:bg-white group"
        }`}
      >
        <Icon
          className={
            pathname.trim() !== link.trim()
              ? "fill-white group-hover:fill-primary-blue"
              : null
          }
          name={name}
        />
      </div>
    </Link>
  );
};

export default MenuItem;
