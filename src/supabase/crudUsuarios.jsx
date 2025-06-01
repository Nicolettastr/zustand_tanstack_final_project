import { supabase } from "../index";
const tabla = "users";
export async function InsertarUsuario(p) {
  const { error } = await supabase.from(tabla).insert(p);
  if (error) {
    console.log(error.message);
    return;
  }
}
export async function MostrarUsuarios(p) {
  const { data } = await supabase
    .from(tabla)
    .select()
    .eq("id_auth_supabase", p.id_auth)
    .maybeSingle();
  return data;
}
