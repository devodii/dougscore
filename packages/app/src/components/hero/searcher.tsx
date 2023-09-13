"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useModal } from "../context/modal.context";
import { BsChevronDown } from "react-icons/bs";
import { Loader } from "../ui";

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
    closeModal,
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

  const [redirecting, setRedirecting] = useState(false);

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
          redirectState={setRedirecting}
        />
      );
    }

    return null; // Handle other cases here
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center max-w-3xl mx-auto gap-1 lg:gap-2">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 mx-auto md:divide-x md:divide-gray-900 flex-1 border-[1.5px] rounded-full p-4">
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
        {redirecting && <Loader />}
      </div>

      <div className="absolute w-full px-4 ">{renderModal()}</div>
    </div>
  );
};

export default Searcher;
