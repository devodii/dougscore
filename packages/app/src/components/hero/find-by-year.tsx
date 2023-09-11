import React from "react";
import Modal from "@/ui/modal";
import { useModal } from "../context";
import { useRouter } from "next/navigation";
import { logger, removeDuplicates } from "@/lib";

interface Props {
  allYear: {
    year: number;
    make?: string;
    model?: string;
  }[];
  handleSelect: (value: number) => void;
}

const FindByYear = ({ allYear, handleSelect }: Props) => {
  const router = useRouter();
  const { selectedMake, selectedModel, selectedYear } = useModal();
  const url = `/car/${selectedMake}/${selectedModel}/${selectedYear || 1994}`;

  // remove duplicates from array.
  const uniqueYear = Array.from(
    new Set(
      allYear.filter(
        ({ make, model, year }) =>
          make === selectedMake && model === selectedModel
      )
    )
  );

  logger.log({ uniqueYear });

  return (
    <Modal
      className="border p-4 mt-4 border-black max-w-xs ml-[60%] flex flex-col gap-1"
      as={"div"}
    >
      {/* TODO: Loop through the array and display them dynamically! */}
      <li
        key={uniqueYear[0]?.make}
        onClick={() => {
          handleSelect(uniqueYear[0]?.year);
          setTimeout(() => {
            router.push(url.replace(/ /g, "-"));
          }, 1000);
        }}
        className="w-full md:w-2/3 px-4 py-2 hover:bg-[#f7f7f7] cursor-pointer list-none"
      >
        {uniqueYear[0]?.year}
      </li>
    </Modal>
  );
};

export default FindByYear;
