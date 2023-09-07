import React from "react";
import Modal from "@/ui/modal";
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
  return (
    <Modal
      className="animate-pop-out border p-4 mt-4 border-black max-w-4xl mx-auto flex flex-col gap-1"
      as={"ul"}
    >
      {allModel
        .filter(({ make }) => make == selectedMake) //sort by make
        .map(({ model }: any) => (
          <li
            key={model}
            onClick={() => handleSelect(model)}
            className="w-full md:w-1/3 px-4 py-2 hover:bg-[#f7f7f7] cursor-pointer"
          >
            {model}
          </li>
        ))}
    </Modal>
  );
};

export default FindByModel;
