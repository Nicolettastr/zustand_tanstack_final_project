import styled from "styled-components";
import {  Title, Lottieanimacion, Buscador, TablaVerdadobebida, RegistrarVerdadobebida,  Btnsave, usePreguntasVerdadBebida } from "../../index";
import { useState } from "react";
import vacio from "../../assets/llamas.json";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
export function VerdadobebidaTemplate({data}) {

  const [state, setState] = useState(false);
  const [openRegistro, SetopenRegistro] = useState(false);
  const [accion, setAccion] = useState("");

  const {selectPregunta,itemPreguntaSelect,setBuscador} = usePreguntasVerdadBebida()
 function nuevoRegistro() {
    SetopenRegistro(!openRegistro);
    setAccion("Nuevo");
    selectPregunta([]);
  }
  return (
    <Container>
      <Link to="/" className="volver">
        <Icon className="volver" icon="icomoon-free:arrow-left2" />
      </Link>
    
      {openRegistro && (
        <RegistrarVerdadobebida
          dataSelect={itemPreguntaSelect}
          onClose={() => SetopenRegistro(!openRegistro)}
          accion={accion}
        />
      )}
    
      <section className="area1">
        <ContentFiltro>
          <Title>
            Verdad o bebida
          </Title>
          <Btnsave  titulo="Agregar" funcion={nuevoRegistro}/>
         
        </ContentFiltro>
      </section>
      <section className="area2">
        <Buscador setBuscador={setBuscador}/>
      </section>
      <section className="main">
      {data == 0 && (
          <Lottieanimacion
            alto="300"
            ancho="300"
            animacion={vacio}
          />
        )}

        <TablaVerdadobebida
          data={data}
          SetopenRegistro={SetopenRegistro}
          setdataSelect={selectPregunta}
          setAccion={setAccion}
        />
      </section>
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
   
    "area1" 100px
    "area2" 60px
    "main" auto;

 .volver{
  position: absolute;
  font-size:3rem;
  cursor: pointer;
  text-decoration:none;
  color:#fff;
  transition:0.5s;
  &:hover{
    color:#ababab;
  }
 }
  .area1 {
    grid-area: area1;
    /* background-color: rgba(229, 67, 26, 0.14); */
    display: flex;
    align-items: center;
  }
  .area2 {
    grid-area: area2;
    /* background-color: rgba(77, 237, 106, 0.14); */
    display: flex;
    align-items: center;
    justify-content:end;

  }
  .main {
    grid-area: main;
    /* background-color: rgba(179, 46, 241, 0.14); */
  }
`;
const ContentFiltro = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:end;
  width:100%;
  gap:15px;
`;
