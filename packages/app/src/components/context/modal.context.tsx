"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

const ModalContext = createContext<any>({
  isOpen: false,
  modalContent: null,
  selectedMake: null,
  selectedModel: null,
  selectedYear: null,
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [modalContent, setModalContent] = useState<any | null>(null);
  const [selectedMake, setSelectedMake] = useState<any | null>(null);
  const [selectedModel, setSelectedModel] = useState<any | null>(null);
  const [selectedYear, setSelectedYear] = useState<any | null>(null);

  const openModal = useCallback((content: any) => {
    setIsOpen(true);
    setModalContent(content);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(true);
    setModalContent(null);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        modalContent,

        // ? Default values for selection
        selectedMake,
        selectedModel,
        selectedYear,

        // ? Mutator fn's
        setSelectedMake,
        setSelectedModel,
        setSelectedYear,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
