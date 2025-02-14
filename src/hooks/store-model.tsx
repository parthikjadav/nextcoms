import {create} from "zustand"

interface State {
    isOpen: boolean,
    onClose: () => void,
    onOpen: () => void
};

export const useStoreModel = create<State>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),
})) 
