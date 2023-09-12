import React, { useRef } from "react";
import Modal from "@/ui/modal";
import { logger, removeDuplicates, sortByAlphabets } from "@/lib";
import { useClickOutside } from "@/hooks";
import { useModal } from "../context";

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
        .filter(({ make }) => make == selectedMake) //filter by make
        .map((item) => item.model)
    )
  );
  // logger.log(uniqueModel);

  // add a ref to handle outer clicks.
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref);

  return (
    <Modal
      className="border p-4 mt-4 border-black max-w-4xl mx-auto flex flex-col gap-1"
      ref={ref}
    >
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
