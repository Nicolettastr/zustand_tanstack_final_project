import styled from "styled-components";
import {
  UserAuth,


  Btnsave,
} from "../../index";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useAuthSore } from "../../store/AuthStore";

export function DataUser() {


  const { user } = UserAuth();
  const {cerrarSesion} = useAuthSore()
  
  return (
    <Container>
      <div className="imgContainer">
        <img src={user.user_metadata?.picture} />
      </div>

      <span className="nombre">{user.email}</span>
      <Btnsave funcion={cerrarSesion} color="#fff" titulo="salir" bgcolor="#5603ef" icono={<Icon icon="jam:log-out" />} />
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  top: 220px;
  left: 0;
  right: 0;
  height: 50px;
  margin: auto;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  color:#fff;
  cursor: pointer;

  .imgContainer {
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &:hover {
   
  }
  .nombre {
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;
