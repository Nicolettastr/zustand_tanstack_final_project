import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../components/moleculas/Spinner";
import { VerdadobebidaTemplate } from "../components/templates/VerdadobebidaTemplate";
import { useNivelesStore } from "../store/NivelesStore";
import { usePreguntasVerdadBebida } from "../store/PreguntasVerdadBebida";

export function Verdadobebida() {
  const {
    mostrarpreguntasverdadbebida,
    buscarPregunta,
    buscador,
    datapreguntas,
  } = usePreguntasVerdadBebida();
  const { mostrarNiveles } = useNivelesStore();
  const { isLoading, error, refetch } = useQuery({
    queryKey: ["mostrar preguntas verdad bebida"],
    queryFn: () => mostrarpreguntasverdadbebida({ refetch: refetch }),
  });
  const { data: dataniveles } = useQuery({
    queryKey: "mostrar niveles",
    queryFn: mostrarNiveles,
  });
  useQuery({
    queryKey: ["buscar preguntas", buscador],
    queryFn: () => buscarPregunta({ question: buscador }),
  });

  console.log("datapreguntas", datapreguntas);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <span>error...{error.message}</span>;
  }
  return (
    <>
      <VerdadobebidaTemplate data={datapreguntas} />
    </>
  );
}
