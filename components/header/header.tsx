import Image from "next/image";
import React from "react";
import Logo from "../ui/logo/Logo";
import ContentWrapper from "../ui/content-wrapper/ContentWrapper";
import { Montserrat } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Avatar from "../ui/avatar/Avatar";

const montserrat = Montserrat({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className="py-3 relative z-10 bg-primary-blue w-full flex items-center shadow-[rgba(0,_0,_0,_0.30)_0px_3px_8px]">
      <ContentWrapper className="flex justify-between">
        <div className="flex flex-col items-center mt-2">
          <Logo />
          <h1
            className={twMerge(
              "font-bold mt-1 mb-0 text-white text-sm",
              montserrat.className
            )}
          >
            Nomadic Travel
          </h1>
        </div>
        <Avatar image="/images/profile-placeholder.jpeg" />
      </ContentWrapper>
    </header>
  );
};

export default Header;
