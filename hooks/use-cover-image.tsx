import { create } from "zustand";

type coverImageStore = {
    url?: string;
    isOpen: boolean;
    setIsOpen: () => void;
    onClose: () => void;
    onReplace: (url: string) => void;
}

export const useCoverImage = create<coverImageStore>((set)=>{
    return {
        isOpen: false,
        setIsOpen: () => set({ isOpen: true, url: undefined}),
        onClose: () => set({ isOpen: false, url: undefined}),
        onReplace: (url: string) => set({isOpen:true, url })
    }
})