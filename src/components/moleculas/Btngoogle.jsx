import styled from "styled-components";
export function Btngoogle({funcion}) {
  return (
    <Container className="button" onClick={funcion}>
      Iniciar con Google
    </Container>
  );
}
const Container = styled.button`
  position:relative;
  top:8rem;
  z-index:1;
  &.button {
    --😀: #644dff;
    --😀😀: #4836bb;
    --😀😀😀: #654dff63;
    cursor: pointer;
    width: 294px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.125em;
    font-weight: 800;
    letter-spacing: 2px;
    color: #fff;
    background: var(--😀);
    border: 2px solid var(--😀😀);
    border-radius: 0.75rem;
    box-shadow: 0 8px 0 var(--😀😀);
    transform: skew(-10deg);
    transition: all 0.1s ease;
    filter: drop-shadow(0 15px 20px var(--😀😀😀));
  }

  &.button:active {
    letter-spacing: 0px;
    transform: skew(-10deg) translateY(8px);
    box-shadow: 0 0 0 var(--😀😀😀);
  }
`;
