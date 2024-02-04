import { create } from "zustand";

type coverImageStore = {
    isOpen: boolean;
    setIsOpen: () => void;
    onClose: () => void;
}

export const useCoverImage = create<coverImageStore>((set)=>{
    return {
        isOpen: false,
        setIsOpen: () => set({ isOpen: true }),
        onClose: () => set({ isOpen: false }),
    }
})