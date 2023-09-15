"use client";

import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

export const BackButton = () => {
  const { back } = useRouter();
  return (
    <button
      onClick={() => back()}
      className="bg-[#f7f7f7] rounded-full p-2 max-w-max"
      title="Back"
    >
      <BiArrowBack className="text-xl lg:text-2xl" />
    </button>
  );
};
