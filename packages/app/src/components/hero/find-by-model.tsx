import React from "react";
import Modal from "@/ui/modal";
import { useModal } from "../context";
import { logger, removeDuplicates, sortByAlphabets } from "@/lib";

interface Props {
  allModel: {
    model: string;
    make?: string;
  }[];
  handleSelect: (model: string) => void;
}

const FindByModel = ({ allModel, handleSelect }: Props) => {
  const { selectedMake } = useModal();
  const uniqueModel = sortByAlphabets(
    removeDuplicates(
      allModel
        .filter(({ make }) => make == selectedMake) //sort by make
        .map((item) => item.model)
    )
  );
  // logger.log(uniqueModel);

  return (
    <Modal className="border p-4 mt-4 border-black max-w-4xl mx-auto flex flex-col gap-1">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {uniqueModel.map((model) => (
          <li
            key={model}
            onClick={() => handleSelect(model)}
            className="w-full px-4 py-2 hover:bg-[#f7f7f7] cursor-pointer"
          >
            {model}
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default FindByModel;
