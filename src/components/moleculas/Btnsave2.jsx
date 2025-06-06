import styled from "styled-components";
export function Btnsave2() {
  return (
    <Container>
      <button>
        <div class="state" id="moon">
          Send
        </div>
        <div class="state" id="sun">
          Send
        </div>
        <span class="lightRotation"></span>
        <span class="lightRotation2"></span>
        <span class="lightRotation3"></span>
        <span class="lightRotation4"></span>
      </button>
    </Container>
  );
}
const Container = styled.div`
  button {
    --sunGradient: linear-gradient(
      60deg,
      #3d3393 0%,
      #2b76b9 37%,
      #2cacd1 65%,
      #35eb93 100%
    );
    --moonGradient: linear-gradient(to top, #cc208e 0%, #6713d2 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 140px;
    height: 60px;
    color: white;
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 15px;
    background-color: transparent;
    transition: 0.5s;
    overflow: hidden;
    border: 4px solid black;
  }

  button:hover {
    box-shadow: -15px -15px 500px white;
    transition: 0.2s;
  }

  button:hover span {
    background: var(--sunGradient);
  }

  .state {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    transition: 0.4s;
    width: 85%;
    height: 82%;
    border: 4px solid black;
  }

  #sun {
    display: none;
    background-color: #212121;
    opacity: 0.85;
  }

  #moon {
    background-color: #212121;
    opacity: 0.85;
  }

  button:hover #sun {
    display: flex;
  }

  button:hover #moon {
    display: none;
  }

  button:hover .lightRotation {
    animation: 1s linear reverse infinite rotation413;
  }

  button:hover .lightRotation2 {
    animation: 2s linear infinite rotation_413;
  }

  button:hover .lightRotation3 {
    animation: 10s linear reverse infinite rotation_413;
  }

  button:hover .lightRotation4 {
    animation: 3s linear infinite rotation_413;
  }

  .lightRotation {
    position: absolute;
    transition: 0.4s;
    z-index: -1;
    width: 60px;
    height: 500px;
    transform: rotate(50deg);
    border-radius: inherit;
    background: var(--moonGradient);
  }

  .lightRotation2 {
    position: absolute;
    transition: 0.4s;
    z-index: -1;
    width: 75px;
    height: 500px;
    transform: rotate(110deg);
    border-radius: inherit;
    background: var(--moonGradient);
  }

  .lightRotation3 {
    position: absolute;
    transition: 0.4s;
    z-index: -1;
    width: 40px;
    height: 260px;
    border-radius: inherit;
    background: var(--moonGradient);
  }

  .lightRotation4 {
    position: absolute;
    transition: 0.4s;
    z-index: -1;
    width: 24px;
    height: 220px;
    transform: rotate(100deg);
    border-radius: inherit;
    background: var(--moonGradient);
  }

  @keyframes rotation_413 {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
