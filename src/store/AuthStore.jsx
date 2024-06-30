import { create } from "zustand";
import { supabase } from "../index";
export const useAuthSore = create(() => ({
  loginGoogle: async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  },
  cerrarSesion: async () => {
    await supabase.auth.signOut();
  },
}));
