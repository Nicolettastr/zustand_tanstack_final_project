import { useQuery } from "@tanstack/react-query";
import { VerdadobebidaTemplate } from "../components/templates/VerdadobebidaTemplate";
import { DataPreguntas } from "../utils/dataEstatica";
import { usePreguntasVerdadBebida } from "../store/PreguntasVerdadBebida";
import { Spinner } from "../components/moleculas/Spinner";
import { useNivelesStore } from "../store/NivelesStore";

export function Verdadobebida() {
  const { mostrarpreguntasverdadbebida,buscarPregunta,buscador,datapreguntas } = usePreguntasVerdadBebida();
  const {mostrarNiveles} = useNivelesStore()
  const {  isLoading, error,refetch } = useQuery({
    queryKey: ["mostrar preguntas verdad bebida"],
    queryFn:()=> mostrarpreguntasverdadbebida({refetch:refetch}),
  });
  const { data:dataniveles } = useQuery({
    queryKey: "mostrar niveles",
    queryFn: mostrarNiveles,
  });
   useQuery({
    queryKey: ["buscar preguntas",buscador],
    queryFn: ()=>buscarPregunta({pregunta:buscador}),
  });
  if (isLoading) {
    return <Spinner />;
  }
  if(error){
    return <span>error...{error.message}</span>
  }
  return (
    <>
      <VerdadobebidaTemplate data={datapreguntas} />
    </>
  );
}
