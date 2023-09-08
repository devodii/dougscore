import React from "react";
import Modal from "@/ui/modal";
import { logger, removeDuplicates, sortByAlphabets } from "@/lib";

interface Props {
  allMake: {
    make: string;
  }[];
  handleSelect: (make: string) => void;
}

const FindByMake = ({ allMake, handleSelect }: Props) => {
  /**
   * loops through the makes, removes any (duplicate) data and sort.
   * sortByAlphabets(['Tesla', 'Chervolet', 'Toyota']) => ['Chervolet', 'Tesla', 'Toyota']
   */
  const uniqueMakes = sortByAlphabets(
    removeDuplicates(allMake.map((item) => item.make))
  );
  logger.log(uniqueMakes);

  return (
    <Modal
      className="animate-pop-out border p-4 mt-4 border-black max-w-4xl mx-auto flex flex-col gap-1"
      as={"ul"}
    >
      {uniqueMakes.map((make) => (
        <li
          key={`${make}-${Math.random() * 2}`}
          onClick={() => handleSelect(make)}
          className="w-full md:w-1/3 px-4 py-2 hover:bg-[#f7f7f7] cursor-pointer"
        >
          {make}
        </li>
      ))}
    </Modal>
  );
};

export default FindByMake;
