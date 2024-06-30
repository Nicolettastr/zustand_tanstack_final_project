import styled from "styled-components";
import { Device } from "../../styles/breakpoints";
import { disable } from "workbox-navigation-preload";
export function Btn1({
  texto,
  color1,
  color2,
  position,
  top,
  bottom,
  width,
  icono,
  funcion,
  disabled,
}) {
  return (
    <Container
      disabled={disabled}
      onClick={funcion}
      $width={width}
      $top={top}
      $bottom={bottom}
      $position={position}
      $color1={color1}
      $color2={color2}
      className="btn"
    >
      {texto}
      {icono}
    </Container>
  );
}
const Container = styled.button`
  top: ${(props) => props.$top};
  bottom: ${(props) => props.$bottom};
  position: ${(props) => props.$position};
  transition: all 0.3s ease-in-out;
  width: ${(props) => props.$width};
  height: 80px;
  border-radius: 12px;
  background-image: linear-gradient(
    222deg,
    ${(props) => props.$color1} 0%,
    ${(props) => props.$color2} 100%
  );
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  outline: none;
  cursor: pointer;
  border: none;
  font-size: 24px;
  color: white;
  font-weight: 700;
  box-shadow: none;
  &.btn:hover {
    transform: translateY(3px);
    box-shadow: 0 10px 30px -8px ${(props) => props.$color2};
    cursor: pointer;
  }

  &:active {
    opacity: 0.5;
  }
  &[disabled] {
    cursor: no-drop;
    color: #525151;
    opacity: 0.7;
    &.btn:hover {
      cursor: no-drop;
    transform: translateY(0);
    box-shadow: none;
   
  }
  }
`;
