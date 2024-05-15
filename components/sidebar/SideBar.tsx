import React from "react";
import MenuItem from "./MenuItem";

const menuItems: MenuItemType[] = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "plus-circle",
    link: "/new-order",
  },
  {
    name: "file",
    link: "/check",
  },
  {
    name: "map-marker",
    link: "/track",
  },
  {
    name: "check",
    link: "/docks",
  },
  {
    name: "profile",
    link: "/profile",
  },
  {
    name: "ellipsis",
    link: "/menu",
  },
];

const SideBar = () => {
  return (
    <nav className="bg-primary-blue w-full h-full pt-3">
      {menuItems.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </nav>
  );
};

export default SideBar;
