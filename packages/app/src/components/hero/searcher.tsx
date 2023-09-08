"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useModal } from "../context/modal.context";
import { BsChevronDown } from "react-icons/bs";

const FindByMake = dynamic(() => import("./find-by-make"));
const FindByModel = dynamic(() => import("./find-by-model"));
const FindByYear = dynamic(() => import("./find-by-year"));

interface Props {
  allModel: {
    model: string;
  }[];

  allMake: {
    make: string;
  }[];

  allYear: {
    year: number;
  }[];
}

const Searcher = ({ allModel, allMake, allYear }: Props) => {

  const {
    openModal,
    modalContent,

    // default values for option

    selectedMake,
    selectedModel,
    selectedYear,

    // setters for the option
    setSelectedMake,
    setSelectedModel,
    setSelectedYear,
  } = useModal();

  const handleMakeSelection = (make: string) => {
    setSelectedMake(make);
    setSelectedModel(null);
    setSelectedYear(null);
  };

  const handleModelSelection = (model: string) => {
    setSelectedModel(model);
    setSelectedYear(null);
  };

  const handleYearSelection = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto divide-x divide-gray-900 max-w-3xl flex-1 border-[1.5px] rounded-full p-4">
        <button
          className="flex items-center justify-around"
          onClick={() =>
            openModal(
              <FindByMake
                allMake={allMake}
                handleSelect={handleMakeSelection}
              />
            )
          }
        >
          <span className="text-black text-[18px]">
            {selectedMake === null ? "Select Make" : selectedMake}
          </span>
          <BsChevronDown className="font-semibold text-xl lg:text-[21px]" />
        </button>
        <button
          className="flex items-center justify-around"
          disabled={selectedMake === null}
          onClick={() =>
            openModal(
              <FindByModel
                allModel={allModel}
                handleSelect={handleModelSelection}
              />
            )
          }
        >
          <span
            className={` ${
              selectedMake === null ? "text-gray-600" : "text-black"
            } text-[18px]`}
          >
            {selectedModel === null ? "Select Model" : selectedModel}
          </span>
          <BsChevronDown className="font-semibold text-xl lg:text-[21px]" />
        </button>
        <button
          className="flex items-center justify-around"
          disabled={
            (selectedMake === null && selectedModel === null) ||
            (selectedMake !== null && selectedModel === null)
          }
          onClick={() => {
            openModal(
              <FindByYear
                allYear={allYear}
                handleSelect={handleYearSelection}
              />

            );
          }}
        >
          <span
            className={` ${
              (selectedMake === null && selectedModel === null) ||
              (selectedMake !== null && selectedModel === null)
                ? "text-gray-600"
                : "text-black"
            } text-[18px]`}
          >
            {selectedYear === null ? "Select Year" : selectedYear}
          </span>
          <BsChevronDown className="font-semibold text-xl lg:text-[21px]" />
        </button>
      </div>

      <div className="absolute w-full">{modalContent}</div>

      {/* <div className="my-4">
        <p>Selected Make: {selectedMake || "None"}</p>
        <p>Selected Model: {selectedModel || "None"}</p>
        <p>Selected Year: {selectedYear || "None"}</p>
      </div> */}
    </div>
  );
};

export default Searcher;
