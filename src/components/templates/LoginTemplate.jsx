import styled from "styled-components";

import {
  Btngoogle,
  Device,

  Frankanimado,
  PowerBy,


  
} from "../../index";
import fondo from "../../assets/pattern-1.svg";
import {  irarriba } from "../../styles/keyframes";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useAuthSore } from "../../store/AuthStore";
export function LoginTemplate() {
 const {loginGoogle} = useAuthSore()
  return (
    <Container>
      <Contentselect>
        <span className="titulo">Administra tus juegos</span>
        <Icon className="iconofuego" icon="fluent-emoji:eggplant" />
        <PowerBy position="absolute"/>
      </Contentselect>
      <Btngoogle funcion={loginGoogle}/>
      <Frankanimado />
    </Container>
  );
}
const Container = styled.div`
  --gradient: linear-gradient(210deg, #4d18fb, #6716d1);
  --tw-bg-opacity: 1;
  height: 100vh;
  width: 100%;
  background-color: rgb(16 21 29 / var(--tw-bg-opacity));
  display: flex;
  justify-content: center;
  position: relative;
  background-size: 600px 600px, cover;
  animation: ${irarriba} 20s linear infinite;
  background-image: url(${fondo}), var(--gradient);
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
    margin-bottom: 10px;
  }
  .iconofuego {
    position: absolute;
    right: -20px;
    font-size: 11rem;
    top: -20px;
    transform: rotate(-25deg);
  }
  @media ${Device.tablet} {
    width: 680px;
    margin: 0 auto;
  }
`;
