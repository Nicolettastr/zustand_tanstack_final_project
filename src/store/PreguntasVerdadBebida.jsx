import { create } from "zustand";
import {
  BuscarPregunta,
  EditarVerdadbebida,
  EliminarVerdadbebida,
  InsertarVerdadobebida,
  MostrarVerdadobebida,
} from "../index";
export const usePreguntasVerdadBebida = create((set, get) => ({
  datapreguntas: [],
  buscador: "",
  setBuscador: (p) => {
    set({ buscador: p });
  },
  refetch: [],
  itemPreguntaSelect: [],
  selectPregunta: (p) => {
    set({
      itemPreguntaSelect: p,
    });
  },
  mostrarpreguntasverdadbebida: async (p) => {
    const response = await MostrarVerdadobebida();
    set({ refetch: p.refetch });
    set({ datapreguntas: response });
    return response;
  },
  insertarPreguntas: async (p) => {
    await InsertarVerdadobebida(p);
    const { refetch } = get();
    refetch();
  },
  editarpreguntas: async (p) => {
    await EditarVerdadbebida(p);
    const { refetch } = get();
    refetch();
  },
  eliminarPreguntas: async (p) => {
    await EliminarVerdadbebida(p);
    const { refetch } = get();
    refetch();
  },
  buscarPregunta: async (p) => {
    const response = await BuscarPregunta(p);
    set({ datapreguntas: response });
    return response;
  },
}));
