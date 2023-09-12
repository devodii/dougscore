import { useModal } from "@/components/context";
import { useEffect, RefObject } from "react";

type RefType = RefObject<any>;

export const useClickOutside = (ref: RefType) => {
  const { closeModal } = useModal();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        closeModal(); // Call the onClose function
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, closeModal]);
};
