import styled from "styled-components";
import { BtnCerrar, Device } from "../../index";
export function ListaGenerica({ data, setState, funcion, scroll, bottom }) {
  function seleccionar(p) {
    funcion(p);
    setState();
  }
  return (
    <Container scroll={scroll} $bottom={bottom}>
      <section className="contentClose">
        <BtnCerrar funcion={setState} />
      </section>
      <section className="contentItems">
        {data.map((item, index) => {
          return (
            <ItemContainer key={index} onClick={() => seleccionar(item)}>
              <span>💎</span>
              <span>{item.name}</span>
            </ItemContainer>
          );
        })}
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  position: absolute;
  margin-bottom: 15px;
  bottom: ${(props) => props.$bottom};
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  z-index: 3;

  overflow: hidden;
  overflow-y: auto;
  @media ${() => Device.tablet} {
    width: 400px;
  }
  .contentItems {
    overflow-y: ${(props) => props.scroll};
  }
`;
const ItemContainer = styled.div`
  gap: 10px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.bgtotal};
  }
`;
