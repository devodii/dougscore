import React, { useRef, useState, useTransition } from "react";
import Modal from "@/ui/modal";
import { Loader } from "@/ui/loader";
import { logger, removeDuplicates, sortByAlphabets } from "@/lib";
import { AiOutlineSearch } from "react-icons/ai";
import { useClickOutside, useDebounce } from "@/hooks";

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
    removeDuplicates(allMake.map((item: any) => item.make))
  );
  // logger.log({uniqueMakes});

  const [searchState, setSearchState] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const debounce = useDebounce(searchState, 100) as string;

  const filterBySearch = uniqueMakes.filter((item) =>
    item.toLowerCase().includes(debounce.toLowerCase())
  );

  const handleSearch = (value: any) => {
    // set loading to true when the search starts
    setIsLoading(true);

    // Simulate a delay 0.5s
    setTimeout(() => {
      // After the delay, set loading to false to indicate that the search is complete
      setIsLoading(false);
    }, 500);

    setSearchState(value);
  };

  // logger.log({ filterBySearch });

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref);

  return (
    <Modal
      className="animate-pop-out border p-4 pt-0 mt-4 border-black max-w-4xl mx-auto flex flex-col gap-1 max-h-[410px] overflow-y-auto"
      ref={ref}
    >
      <div className="w-full bg-white flex justify-center sticky top-0 z-10 py-4 ">
        <div className="flex flex-1 max-w-lg mx-auto p-2 border items-center gap-2 rounded-lg">
          <AiOutlineSearch className="text-xl" />
          <input
            className="flex-1 mx-auto border-none focus:outline-none "
            placeholder="Search"
            onChange={(e: any) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      <div>
        {isLoading ? (
          <Loader />
        ) : filterBySearch.length === 0 ? (
          <p className="text-center">No make found for that search</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {debounce === ""
              ? uniqueMakes.map((make) => (
                  <div
                    key={`${make}-${Math.random() * 2}`}
                    onClick={() => handleSelect(make)}
                    className="w-full px-4 py-3 hover:bg-[#f7f7f7] cursor-pointer"
                  >
                    <div> {make}</div>
                  </div>
                ))
              : filterBySearch.map((make) => (
                  <div
                    key={`${make}-${Math.random() * 2}`}
                    onClick={() => handleSelect(make)}
                    className="w-full px-4 py-3 hover:bg-[#f7f7f7] cursor-pointer"
                  >
                    <div>{make}</div>
                  </div>
                ))}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default FindByMake;
