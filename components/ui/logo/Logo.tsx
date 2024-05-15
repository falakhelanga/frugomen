import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src="/images/fragomen-logo.svg"
        width={150}
        height={150}
        alt="fragomen logo"
      />
    </div>
  );
};

export default Logo;
