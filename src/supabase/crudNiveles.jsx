import { supabase } from "../index";
export async function MostrarNiveles() {
  try {
    const { data } = await supabase
      .from("niveles_verdad_bebida")
      .select()
    return data;
  } catch (error) {}
}
