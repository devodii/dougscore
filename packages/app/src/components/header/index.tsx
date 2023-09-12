"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./super-text"));

const Logo = () => {
  return (
    <div className="text-2xl lg:text-3xl font-bold tracking-normal text-[#40ae4d]" aria-label="Dougscore finder">
      Dougscore Finder
    </div>
  );
};

export const Header = (props: any) => {
  const [showSuperText, setShowSuperText] = useState<boolean>(true);
  return (
    <header>
      {showSuperText && <DynamicComponent />}
      <div className="flex flex-1 gap-8 flex-wrap items-center  bg-[#1b1b1b] py-4 px-8 lg:px-16">
        <Logo />
      </div>
    </header>
  );
};

export {};
