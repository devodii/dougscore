"use client";

import {
  ComponentType,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

const ModalContext = createContext<any>({ isOpen: false, modalContent: null });

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [modalContent, setModalContent] = useState<any>(null);

  const openModal = useCallback((content: any) => {
    setIsOpen(true);
    setModalContent(content);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(true);
    setModalContent(null);
  }, []);

    // I dont need isOpen now. Maybe keep for later!
  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, isOpen, modalContent }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
