"use client";

import React from "react";
import { useModal } from "../context/modal.context";
import { BsChevronDown } from "react-icons/bs";

import FindByMake from "./find-by-make";
import FindByModel from "./find-by-model";
import FindByYear from "./find-by-year";

const Searcher = () => {
  const { openModal, modalContent } = useModal();
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto divide-x divide-gray-900 max-w-3xl flex-1 border-[1.5px] rounded-full p-4">
        <button
          className="flex items-center justify-around"
          onClick={() => openModal(<FindByMake />)}
        >
          <span className="text-gray-700 text-[18px]"> Select Make</span>
          <BsChevronDown className="font-semibold text-xl lg:text-[21px]" />
        </button>
        <button
          className="flex items-center justify-around"
          onClick={() => openModal(<FindByModel />)}
        >
          <span className="text-gray-700 text-[18px]"> Select Model</span>
          <BsChevronDown className="font-semibold text-xl lg:text-[21px]" />
        </button>
        <button
          className="flex items-center justify-around"
          onClick={() => openModal(<FindByYear />)}
        >
          <span className="text-gray-700 text-[18px]">Year</span>
          <BsChevronDown className="font-semibold text-xl lg:text-[21px]" />
        </button>
      </div>
      {modalContent}
    </div>
  );
};

export default Searcher;
