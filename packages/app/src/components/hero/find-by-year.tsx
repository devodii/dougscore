import { Dispatch, SetStateAction, useRef, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useModal } from "../context";
import Modal from "@/ui/modal";
import { logger } from "@/lib";
import { useClickOutside } from "@/hooks";

interface Props {
  allYear: {
    year: number;
    make?: string;
    model?: string;
  }[];
  handleSelect: (value: number) => void;
  redirectState: Dispatch<SetStateAction<boolean>>;
}

const FindByYear = ({ allYear, handleSelect, redirectState }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
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

  // logger.log({ uniqueYear });

  // add a ref to handle outer clicks.
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref);

  return (
    <Modal
      className="border p-4 mt-4 border-black md:max-w-[260px] md:ml-[60%] flex flex-col gap-1"
      ref={ref}
    >
      {/* TODO: Loop through the array and display them dynamically! */}
      <li
        key={uniqueYear[0]?.make}
        onClick={() => {
          handleSelect(uniqueYear[0]?.year);
          redirectState(isPending);
          startTransition(() => {
            router.push(url.replace(/ /g, ""));
          });
        }}
        className="w-full  px-4 py-2 hover:bg-[#f7f7f7] cursor-pointer list-none"
      >
        {uniqueYear[0]?.year}
      </li>
    </Modal>
  );
};

export default FindByYear;
