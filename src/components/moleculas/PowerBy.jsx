import styled from "styled-components";
export function PowerBy({position}) {
  return (
    <Container $position={position}>
      <a target="_blank" href="https://codigo369.com/">
        <span>
          power by <strong>codigo369.com</strong>
        </span>
      </a>
    </Container>
  );
}
const Container = styled.div`
  font-size: 0.8rem;
position: ${(props)=>props.$position};
  bottom: 10px;
  display: flex;
  opacity: 0.5;
  z-index: 100;
  margin-top:15px;
  
  a {
    color: #fff;
    text-decoration: none;
  }
`;
