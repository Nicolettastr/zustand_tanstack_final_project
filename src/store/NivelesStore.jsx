import { create } from "zustand";
import { MostrarNiveles } from "../supabase/crudNiveles";

export const useNivelesStore =create((set)=>({
    dataniveles:[],
    nivelesItemSelect:[],
    
    selectNiveles:(p)=>{
        set({nivelesItemSelect:p})
    },
    mostrarNiveles:async()=>{
        const response = await MostrarNiveles()
        set({nivelesItemSelect:response[0]})
        set({dataniveles:response})
        return response;
    }
   

}))