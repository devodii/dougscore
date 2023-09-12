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

const Searcher: React.FC<Props> = ({ allModel, allMake, allYear }) => {
  const {
    openModal,
    modalContent,
    setSelectedMake,
    setSelectedModel,
    setSelectedYear,
    selectedMake,
    selectedModel,
    selectedYear,
  } = useModal();

  const handleMakeSelection = (make: string) => {
    setSelectedMake(make);
    setSelectedModel(null);
    setSelectedYear(null);
    // Set the modal content type to "model"
    openModal("model");
  };

  const handleModelSelection = (model: string) => {
    setSelectedModel(model);
    setSelectedYear(null);
    // Set the modal content type to "year"
    openModal("year");
  };

  const handleYearSelection = (year: number) => {
    setSelectedYear(year);
  };

  // Render the appropriate modal based on modalContent
  const renderModal = () => {
    if (modalContent === "make") {
      return (
        <FindByMake allMake={allMake} handleSelect={handleMakeSelection} />
      );
    }

    if (modalContent === "model") {
      return (
        <FindByModel allModel={allModel} handleSelect={handleModelSelection} />
      );
    }

    if (modalContent === "year") {
      return (
        <FindByYear
          allYear={allYear}
          handleSelect={handleYearSelection}
          redirectState={() => {}}
        />
      );
    }

    return null; // Handle other cases here
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto divide-x divide-gray-900 max-w-3xl flex-1 border-[1.5px] rounded-full p-4">
        <button
          className="flex items-center justify-around"
          onClick={() => openModal("make")}
        >
          <span className="text-black text-[18px]">
            {selectedMake === null ? "Select Make" : selectedMake}
          </span>
          <BsChevronDown className="font-semibold text-xl lg:text-[21px]" />
        </button>
        <button
          className="flex items-center justify-around"
          disabled={!selectedMake}
          onClick={() => openModal("model")}
        >
          <span
            className={` ${
              selectedMake ? "text-black" : "text-gray-600"
            } text-[18px]`}
          >
            {selectedModel === null ? "Select Model" : selectedModel}
          </span>
          <BsChevronDown className="font-semibold text-xl lg:text-[21px]" />
        </button>
        <button
          className="flex items-center justify-around"
          disabled={!selectedMake && !selectedModel}
          onClick={() => openModal("year")}
        >
          <span
            className={` ${
              selectedMake && selectedModel ? "text-black" : "text-gray-600"
            } text-[18px]`}
          >
            {selectedYear === null ? "Select Year" : selectedYear}
          </span>
          <BsChevronDown className="font-semibold text-xl lg:text-[21px]" />
        </button>
      </div>

      <div className="absolute w-full">{renderModal()}</div>

      {/* <div className="my-4">
        <p>Selected Make: {selectedMake || "None"}</p>
        <p>Selected Model: {selectedModel || "None"}</p>
        <p>Selected Year: {selectedYear || "None"}</p>
      </div> */}
    </div>
  );
};

export default Searcher;
