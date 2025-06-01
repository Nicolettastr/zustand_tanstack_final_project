import Swal from "sweetalert2";
import { supabase } from "../index";
export async function InsertarVerdadobebida(p) {
  const { error } = await supabase.from("questions_true_drink").insert(p);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      footer: '<a href="">Agregue una nueva descripcion</a>',
    });
    return;
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Registrado",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
export async function MostrarVerdadobebida() {
  const { data } = await supabase
    .from("questions_true_drink")
    .select(`id,question,id_level, levels_true_drink(id,name)`)
    .order("id", { ascending: true });
  return data;
}
export async function MostrarVerdadobebidaXnivel(p) {
  const { data } = await supabase
    .from("questions_true_drink")
    .select(`id,question,id_level, levels_true_drink(id,name)`)
    .eq("id_level", p.id_level)

    .order("id", { ascending: true });
  return data;
}
export async function EliminarVerdadbebida(p) {
  const { error } = await supabase
    .from("questions_true_drink")
    .delete()
    .eq("id", p.id);
  if (error) {
    alert("Error al eliminar", error);
  }
}
export async function EditarVerdadbebida(p) {
  const { error } = await supabase
    .from("questions_true_drink")
    .update(p)
    .eq("id", p.id);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      footer: '<a href="">Agregue una nueva descripcion</a>',
    });
    return;
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Actualizado",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
export async function BuscarPregunta(p) {
  try {
    const { data } = await supabase
      .from("questions_true_drink")
      .select()
      .ilike("question", "%" + p.question + "%");

    return data;
  } catch (error) {}
}
