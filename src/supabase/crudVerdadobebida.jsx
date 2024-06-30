import { supabase } from "../index";
import Swal from "sweetalert2";
export async function InsertarVerdadobebida(p) {
  const { error } = await supabase.from("preguntas_verdad_bebida").insert(p);
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
    .from("preguntas_verdad_bebida")
    .select(`id,pregunta,id_nivel, niveles_verdad_bebida(id,nombre)`)
    .order("id", { ascending: true });
  return data;
}
export async function MostrarVerdadobebidaXnivel(p) {
  const { data } = await supabase
    .from("preguntas_verdad_bebida")
    .select(`id,pregunta,id_nivel, niveles_verdad_bebida(id,nombre)`)
    .eq("id_nivel", p.id_nivel)

    .order("id", { ascending: true });
  return data;
}
export async function EliminarVerdadbebida(p) {
  const { error } = await supabase
    .from("preguntas_verdad_bebida")
    .delete()
    .eq("id", p.id);
  if (error) {
    alert("Error al eliminar", error);
  }
}
export async function EditarVerdadbebida(p) {
  const { error } = await supabase
    .from("preguntas_verdad_bebida")
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
      .from("preguntas_verdad_bebida")
      .select()
      .ilike("pregunta", "%" + p.pregunta + "%");

    return data;
  } catch (error) {}
}
