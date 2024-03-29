"use client";

import { useEffect, useState } from "react";
import { SettingsModal } from "../modals/settings-Modal";
import { CoverImageModal } from "../modals/CoverImage-Modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <SettingsModal />
      <CoverImageModal/>
    </>
  );
};
