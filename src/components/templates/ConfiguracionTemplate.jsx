import styled from "styled-components";

import {
  DataModulosConfiguracion,
  DataModulosJugador,
} from "../../utils/dataEstatica";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Device } from "../../styles/breakpoints";
import { flotar } from "../../styles/keyframes";
import { CardJuego } from "../organismos/CardJuego";
import { DataUser } from "../organismos/DataUser";
import { Fondoanimado } from "../organismos/Fondoanimado";
export function ConfiguracionTemplate() {
  return (
    <Container>
      <DataUser />
      <Main>
        <section className="area1">
          <article className="header">
            <Icon icon="twemoji:pig-face" />
            <span> Modo admin</span>
          </article>
          <article className="main">
            {DataModulosConfiguracion.map((item, index) => {
              return <CardJuego item={item} key={index} />;
            })}
          </article>
          <Icon icon="twemoji:pig-face" className="icono" />
        </section>

        <section className="area2"></section>
        <section className="area1">
          <article className="header">
            <Icon icon="fluent-emoji:dagger" />
            <span> Modo jugador</span>
          </article>
          <article className="main">
            {DataModulosJugador.map((item, index) => {
              return <CardJuego item={item} key={index} />;
            })}
          </article>
          <Icon icon="fluent-emoji:dagger" className="icono" />
        </section>
      </Main>

      <span className="blur"></span>
      <Fondoanimado />
    </Container>
  );
}
const Container = styled.div`
  --bg-color: rgb(20, 20, 20);
  --card-color: rgb(23, 23, 23);
  align-items: center;
  background-color: ${({ theme }) => theme.bgtotal};
  display: flex;
  height: 100vh;
  justify-content: end;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  flex-direction: column;
`;
const Main = styled.section`
  display: grid;

  width: 100%;
  height: calc(100% - 18rem);
  position: relative;
  color: #fff;
  padding: 20px;
  gap: 12px;
  @media ${Device.tablet} {
    grid-template-columns: 1fr 1px 1fr;
  }

  .area1 {
    /* background-color: rgba(236, 236, 14, 0.2); */
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;

    .header {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .main {
      display: flex;
      flex-wrap: wrap;
    }
    .icono {
      position: absolute;
      font-size: 25rem;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      opacity: 0.1;
      animation: none;
      width: 50%;
      @media ${Device.tablet} {
        animation: ${flotar} 3s ease-in-out infinite;
        width: 50%;
      }
    }
  }
  .area2 {
    background-color: rgba(125, 125, 125, 0.5);
    display: flex;
    border-radius: 5px;
  }
`;
const Contentselect = styled.div`
  width: calc(100% - 20px);
  justify-content: center;
  top: 20px;
  color: #fff;
  position: absolute;
  border: 1px solid rgba(156, 98, 255, 0.95);
  border-radius: 5px;
  padding: 20px;
  display: flex;
  text-align: center;
  flex-direction: column;
  overflow: hidden;

  background: rgb(0, 36, 8);

  background: linear-gradient(
    266deg,
    rgba(0, 36, 8, 1) 0%,
    rgba(255, 0, 179, 0.104) 0%,
    rgba(91, 31, 195, 0.5970763305322129) 61%,
    rgba(61, 30, 238, 0.253) 90%
  );

  .titulo {
    z-index: 1;
    font-size: 3rem;
  }
  .iconofuego {
    position: absolute;
    right: -20px;
    font-size: 11rem;
    top: 30px;
    transform: rotate(-25deg);
  }
  @media ${Device.tablet} {
    width: 680px;
    margin: 0 auto;
  }
`;
