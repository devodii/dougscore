import { useEffect, useState } from "react";

type InputType = string;

export const useDebounce = (input: string, delay: number) => {
  const [debounceValue, setDebouncedValue] = useState<InputType>('');

  useEffect(() => {
    const debonceTimer = setTimeout(() => {
      setDebouncedValue(input);
    }, delay);

    return () => clearTimeout(debonceTimer);
  }, [delay, input]);

  return debounceValue;
};

export {};
