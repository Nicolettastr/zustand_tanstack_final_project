import styled from "styled-components";

export function TituloPagina() {
  return <Container>quizz</Container>;
}
const Container = styled.span`
  z-index: 1;
  display: inline-block;
  color: white;
  font-family: "Finger Paint";
  font-size: 16vw;
  text-shadow: 0.03em 0.03em 0 rgba(61, 61, 61, 0.3);

  &::after {
    content: attr(data-shadow);
    position: absolute;
    top: 0.06em;
    left: 0.06em;
    z-index: -1;
    text-shadow: none;
    background-image: linear-gradient(
      45deg,
      transparent 45%,
      hsla(48, 20%, 90%, 1) 45%,
      hsla(48, 20%, 90%, 1) 55%,
      transparent 0
    );
    background-size: 0.05em 0.05em;
    animation: shad-anim 15s linear infinite;
  }

  @keyframes shad-anim {
    0% {
      background-position: 0 0;
    }
    0% {
      background-position: 100% -100%;
    }
  }
`;
