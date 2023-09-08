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
  const uniqueYear = removeDuplicates(
    allYear.filter(
      ({ make, model, year }) =>
        make === selectedMake && model === selectedModel
    )
  );

  logger.log(uniqueYear);

  return (
    <Modal
      className="animate-pop-out border p-4 mt-4 border-black max-w-xs ml-[60%] flex flex-col gap-1"
      as={"ul"}
    >
      {/* {uniqueYear.map((item) => ( */}
      <li
        key={uniqueYear[0]?.id}
        onClick={() => {
          handleSelect(uniqueYear[0]);
          console.log(selectedYear);
          setTimeout(() => {
            router.push(url.replace(/ /g, "-"));
          }, 1000);
        }}
        className="w-full md:w-2/3 px-4 py-2 hover:bg-[#f7f7f7] cursor-pointer"
      >
        {uniqueYear[0]?.year}
      </li>
      {/* ))} */}
    </Modal>
  );
};

export default FindByYear;
