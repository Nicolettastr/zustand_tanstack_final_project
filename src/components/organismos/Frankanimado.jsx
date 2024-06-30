import { useEffect, useState } from "react";
import styled from "styled-components";
import { Device } from "../../styles/breakpoints";
import { PowerBy } from "../moleculas/PowerBy";
import { Icon } from "@iconify/react/dist/iconify.js";
export function Frankanimado() {
  const [interacted, setInteracted] = useState(false);
  const [bodyPos, setBodyPos] = useState(0);
  const [armPos, setArmPos] = useState(0);
  const changePos = (dir) => {
    if (dir === "up") {
      setBodyPos((prevPos) => (prevPos > 0 ? prevPos - 1 : 2));
    }
    if (dir === "down") {
      setBodyPos((prevPos) => (prevPos < 2 ? prevPos + 1 : 0));
    }
    if (dir === "left") {
      setArmPos((prevPos) => (prevPos > 0 ? prevPos - 1 : 4));
    }
    if (dir === "right") {
      setArmPos((prevPos) => (prevPos < 4 ? prevPos + 1 : 0));
    }
  };

  useEffect(() => {
    const handleAnimationEnd = () => {
      document.querySelector(".body").classList.remove("wave");
    };

    document
      .querySelector(".body")
      .addEventListener("animationend", handleAnimationEnd);

    return () => {
      document
        .querySelector(".body")
        .removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  useEffect(() => {
    const wave = () => {
      if (!interacted) {
        const waveInterval = Math.floor(Math.random() * 5) + 3;
        document.querySelector(".body").classList.add("wave");
        setTimeout(wave, waveInterval * 1000);
      }
    };
    wave();
  }, [interacted]);

  const handleKeyDown = (e) => {
    e.preventDefault();
    setInteracted(true);

    switch (e.key) {
      case "ArrowUp":
        changePos("up");
        break;
      case "ArrowDown":
        changePos("down");
        break;
      case "ArrowLeft":
        changePos("left");
        break;
      case "ArrowRight":
        changePos("right");
        break;
      default:
        return false;
    }
  };

  return (
    <Container   data-body-pos={bodyPos}
    data-arm-pos={armPos}
    onKeyDown={handleKeyDown}  tabIndex="0">
     
      <div
        class="body"
        data-body-pos={bodyPos}
        data-arm-pos={armPos}
        onKeyDown={handleKeyDown}
        tabIndex="1"
      >
        <div class="hips">
          <svg viewBox="0 0 72.01 32">
            <path
              fill="#4c2e12"
              d="M71,1V16A15,15,0,0,1,56,31H16A15,15,0,0,1,1,16C1,7.72,1,1,1,1Z"
            />
            <line x1="30.5" y1="31" x2="30.5" y2="1" />
            <line x1="40.5" y1="1" x2="40.5" y2="31" />
          </svg>
        </div>

        <div class="leg left">
          <svg viewBox="0 0 32 67">
            <path fill="#4c2e12" d="M1,1V51a15,15,0,1,0,30,0V1" />
          </svg>

          <div class="lowerleg">
            <svg viewBox="0 0 42 66.92">
              <polyline fill="#4c2e12" points="1 1 1 30.92 31 30.92 31 1" />
              <polygon
                fill="#b5f7d9"
                points="31 16 26 11 21 16 16 11 11 16 6 11 1 16 1 31 31 31 31 16"
              />
              <line x1="33" y1="26" x2="21" y2="26" />
              <line x1="33" y1="21" x2="21" y2="21" />
              <path
                fill="#664a31"
                d="M31,35.88v15h5A5.1,5.1,0,0,1,41,56v4.88H1v-25Z"
              />
              <rect fill="#4c2e12" x="1" y="30.92" width="30" height="5.08" />
              <path d="M11,51H31" />
              <rect fill="#4c2e12" x="1" y="61" width="40" height="4.92" />
              <line x1="33" y1="42" x2="23" y2="42" />
              <line x1="33" y1="46" x2="23" y2="46" />
            </svg>
          </div>
        </div>

        <div class="leg right">
          <svg viewBox="0 0 32 67">
            <path fill="#4c2e12" d="M1,1V51a15,15,0,1,0,30,0V1" />
          </svg>

          <div class="lowerleg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.02 66.92">
              <polyline
                fill="#4c2e12"
                points="11.02 1 11.02 30.92 41.02 30.92 41.02 1"
              />
              <polygon
                fill="#b5f7d9"
                points="11.02 31 41.02 31 41.02 16 36.02 11 31.02 16 26.02 11 21.02 16 16.02 11 11.02 16 11.02 31"
              />
              <line x1="21.02" y1="26" x2="9.02" y2="26" />
              <line x1="21.02" y1="21" x2="9.02" y2="21" />
              <path
                fill="#664a31"
                d="M11,35.88v15H6A5.11,5.11,0,0,0,1,56v4.88H41v-25Z"
              />
              <rect
                fill="#4c2e12"
                x="11.02"
                y="30.92"
                width="30"
                height="5.08"
              />
              <path d="M11,51H31" />
              <rect fill="#4c2e12" x="1.02" y="61" width="40" height="4.92" />
              <line x1="19.02" y1="42" x2="9.02" y2="42" />
              <line x1="19.02" y1="46" x2="9.02" y2="46" />
            </svg>
          </div>
        </div>

        <div class="crotch">
          <svg viewBox="0 0 32 2">
            <line x1="31" y1="1" x2="1" y2="1" />
          </svg>
        </div>

        <div class="torso">
          <svg viewBox="0 0 118.27 137">
            <rect fill="#b5cdf4" x="32" y="8" width="7" height="4" />
            <rect fill="#b5cdf4" x="79" y="8" width="7" height="4" />
            <path fill="#607d8b" d="M79.13,21a20,20,0,0,1-40,0v95h40Z" />
            <path
              fill="#455a64"
              d="M39.68,39.58a24.83,24.83,0,0,0,19.45,9,26.21,26.21,0,0,0,20-9.63V21a20,20,0,0,1-40,0Z"
            />
            <rect fill="#455a64" x="39.13" y="108" width="40.01" height="8" />
            <path fill="#90d6b4" d="M79.13,1V21a20,20,0,0,1-40,0V1" />
            <line class="cls-4" x1="59.14" y1="21" x2="59.14" y2="36" />
            <path
              fill="#664a31"
              d="M14.13,136V105l-13-55.71A7.3,7.3,0,0,1,4.3,41.9L39.13,21V121a15,15,0,0,1-15,15Z"
            />
            <polygon
              fill="#4c2e12"
              points="39.14 87.74 22.14 51 31.14 48 22.14 41 39.14 21 39.14 87.74"
            />
            <line x1="39.14" y1="77.39" x2="26.74" y2="49.47" />
            <path fill="#4c2e12" d="M14.13,105h15v15a5,5,0,0,1-5,5h-10Z" />
            <line x1="14.14" y1="110.05" x2="29.14" y2="110.05" />
            <line x1="39.14" y1="27.33" x2="25.78" y2="43.81" />
            <path
              fill="#664a31"
              d="M94.14,136a15,15,0,0,1-15-15V21L114,41.9a7.3,7.3,0,0,1,3.15,7.44l-13,55.71v31Z"
            />
            <polygon
              fill="#4c2e12"
              points="79.13 21 96.13 41 87.13 48 96.13 51 79.13 87.74 79.13 21"
            />
            <line x1="91.53" y1="49.47" x2="79.13" y2="77.39" />
            <path fill="#4c2e12" d="M104.14,125h-10a5,5,0,0,1-5-5V105h15Z" />
            <line x1="89.13" y1="110.05" x2="104.13" y2="110.05" />
            <line x1="92.49" y1="43.81" x2="79.13" y2="27.33" />
          </svg>
        </div>

        <div class="head">
          <svg viewBox="0 0 56 62">
            <path
              fill="#90d6b4"
              d="M5,41H5a3,3,0,0,1-3-3V31a3,3,0,0,1,3-3H8V38A3,3,0,0,1,5,41Z"
            />
            <path
              fill="#90d6b4"
              d="M51,41h0a3,3,0,0,0,3-3V31a3,3,0,0,0-3-3H48V38A3,3,0,0,0,51,41Z"
            />
            <path
              fill="#b5f7d9"
              d="M43,61H13a5,5,0,0,1-5-5V1H48V56A5,5,0,0,1,43,61Z"
            />
            <path
              fill="#90d6b4"
              d="M48,28H8a7,7,0,0,1,7-7H41A7,7,0,0,1,48,28Z"
            />
            <line x1="16" y1="61" x2="8" y2="28" />
            <line x1="48" y1="28" x2="40" y2="61" />
            <line x1="20" y1="16" x2="36" y2="16" />
            <line x1="32" y1="12" x2="24" y2="12" />
            <line x1="28" y1="5" x2="28" y2="1" />
            <line x1="36.59" y1="31.42" x2="39.42" y2="28.59" />
            <line x1="39.42" y1="31.42" x2="36.59" y2="28.59" />
            <line x1="32" y1="5" x2="32" y2="4" />
            <line x1="36" y1="5" x2="36" y2="1" />
            <polyline points="40 1 40 9 44 9 44 12" />
            <line x1="44" y1="5" x2="44" y2="1" />
            <line x1="24" y1="5" x2="24" y2="1" />
            <line x1="20" y1="8" x2="20" y2="1" />
            <line x1="16" y1="5" x2="16" y2="1" />
            <line x1="12" y1="5" x2="12" y2="1" />
            <path d="M8,10.73a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2" />
            <path d="M20,38.73a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2" />
            <path d="M32,38.73a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2" />
            <rect x="24" y="28" width="8" height="14" />
            <path
              fill="#fff"
              d="M18,28h0a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2h0a2,2,0,0,1-2-2h0A2,2,0,0,1,18,28Z"
            />

            <g id="mouth-flat">
              <line x1="20" y1="49" x2="36" y2="49" />
              <line x1="26" y1="53" x2="30" y2="53" />
            </g>

            <g id="mouth-smile">
              <path fill="#fff" d="M20,46H36s2.51,8-8,8S20,46,20,46Z" />
              <line x1="20" y1="49" x2="36" y2="49" />
              <line x1="26" y1="53" x2="30" y2="53" />
            </g>

            <circle
              fill="#000"
              id="mouth-o"
              class="cls-6"
              cx="27.99"
              cy="50"
              r="4"
            />
          </svg>
        </div>

        <div class="arm left">
          <svg viewBox="0 0 17.01 65.71">
            <path
              fill="#664a31"
              d="M1,57.2a7.51,7.51,0,0,0,15,0V8.51a7.51,7.51,0,0,0-15,0Z"
            />
          </svg>

          <div class="forarm">
            <svg viewBox="0 0 25.99 81.4">
              <polyline fill="#664a31" points="23 1 23 26.4 7.99 26.4 7.99 1" />
              <path
                fill="#b5f7d9"
                d="M5,74.4H23v-54l-3.5-4-4,4-4-4L8,20.4v30H8a7,7,0,0,0-7,7v8H5Z"
              />
              <polyline
                fill="#b5f7d9"
                points="18.99 60.4 18.99 77.4 14.99 77.4"
              />
              <path fill="#b5f7d9" d="M15,60.4v20H12a3,3,0,0,1-3-3" />
              <line x1="24.99" y1="26.4" x2="14.99" y2="26.4" />
              <line x1="24.99" y1="31.4" x2="14.99" y2="31.4" />
              <line x1="24.99" y1="36.4" x2="14.99" y2="36.4" />
              <line x1="24.99" y1="41.4" x2="14.99" y2="41.4" />
              <path fill="#b5f7d9" d="M11,60.4v17H8a3,3,0,0,1-3-3v-9" />
              <path d="M4,65.4a3,3,0,0,0,3-3v-5" />
            </svg>
          </div>
        </div>

        <div class="arm right">
          <svg viewBox="0 0 17.01 65.71">
            <path
              fill="#664a31"
              d="M1,57.2a7.51,7.51,0,0,0,15,0V8.51a7.51,7.51,0,0,0-15,0Z"
            />
          </svg>

          <div class="forarm">
            <svg viewBox="0 0 25.99 81.4">
              <polyline fill="#664a31" points="2.99 1 2.99 26.4 18 26.4 18 1" />
              <path
                fill="#b5f7d9"
                d="M21,65.4h4v-8a7,7,0,0,0-7-7h0v-30l-3.5-4-4,4-4-4L3,20.4v54H21Z"
              />
              <polyline fill="#b5f7d9" points="11 77.4 7 77.4 7 60.4" />
              <path fill="#b5f7d9" d="M17,77.4a3,3,0,0,1-3,3H11v-20" />
              <line x1="11" y1="26.4" x2="1" y2="26.4" />
              <line x1="11" y1="31.4" x2="1" y2="31.4" />
              <line x1="11" y1="36.4" x2="1" y2="36.4" />
              <line x1="11" y1="41.4" x2="1" y2="41.4" />
              <path fill="#b5f7d9" d="M21,65.4v9a3,3,0,0,1-3,3H15v-17" />
              <path d="M19,57.4v5a3,3,0,0,0,3,3" />
            </svg>
          </div>
        </div>
      </div>

      <ContentIndicador>
        <div id="keyboard">
          <button class="up">
            <svg viewBox="0 0 8 8">
              <path d="M3.99953 1C3.83653 1 3.68353 1.0795 3.59003 1.2135L0.0900328 6.2135C-0.0169672 6.366 -0.0289672 6.5655 0.0560328 6.731C0.142533 6.8965 0.313033 7 0.499533 7H7.50003C7.68653 7 7.85753 6.8965 7.94353 6.731C8.02853 6.5655 8.01653 6.366 7.90953 6.2135L4.40953 1.2135C4.31653 1.0795 4.16353 1 4.00053 1C4.00003 1 4.00003 1 3.99953 1C4.00003 1 4.00003 1 3.99953 1Z" />
            </svg>
          </button>
          <button class="left">
            <svg viewBox="0 0 8 8">
              <path d="M1 4.00053C1 4.16353 1.0795 4.31653 1.2135 4.41003L6.2135 7.91003C6.366 8.01703 6.5655 8.02903 6.731 7.94403C6.8965 7.85753 7 7.68703 7 7.50053V0.499533C7 0.313033 6.8965 0.142033 6.731 0.0560328C6.5655 -0.0289672 6.366 -0.0169672 6.2135 0.0900328L1.2135 3.59003C1.0795 3.68353 1 3.83653 1 3.99953C1 4.00003 1 4.00003 1 4.00053C1 4.00003 1 4.00003 1 4.00053Z" />
            </svg>
          </button>
          <button class="right">
            <svg viewBox="0 0 8 8">
              <path d="M7 3.99953C7 3.83653 6.9205 3.68353 6.7865 3.59003L1.7865 0.0900328C1.6345 -0.0169672 1.4345 -0.0289672 1.269 0.0560328C1.1035 0.142533 1 0.313033 1 0.499533V7.50003C1 7.68653 1.1035 7.85753 1.269 7.94353C1.4345 8.02853 1.634 8.01653 1.7865 7.90953L6.7865 4.40953C6.9205 4.31653 7 4.16353 7 4.00053C7 4.00003 7 4.00003 7 3.99953C7 4.00003 7 4.00003 7 3.99953Z" />
            </svg>
          </button>
          <button class="down">
            <svg viewBox="0 0 8 8">
              <path d="M4.00053 7C4.16353 7 4.31653 6.9205 4.41003 6.7865L7.91003 1.7865C8.01703 1.634 8.02903 1.4345 7.94403 1.269C7.85753 1.1035 7.68703 1 7.50053 1H0.499533C0.313033 1 0.142533 1.1035 0.0560328 1.269C-0.0289672 1.4345 -0.0169672 1.634 0.0900328 1.7865L3.59003 6.7865C3.68353 6.9205 3.83653 7 3.99953 7C4.00003 7 4.00003 7 4.00053 7C4.00003 7 4.00003 7 4.00053 7Z" />
            </svg>
          </button>
        </div>
      </ContentIndicador>
    </Container>
  );
}
const Container = styled.div`
border:none;
 color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  color: #3e2723;
  font-family: sans-serif;
  font-size: 1.25em;
  text-decoration: none;
  justify-content: center;
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  &:focus{
    border:none;
  }
  .title {
    padding: 2rem;
    font-size: 2em;
    font-weight: bold;
    font-family: "Creepster", cursive;
  }

  .note {
    padding: 2rem;
    font-size: small;
    text-align: right;
  }

  svg > * {
    stroke: #000;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  svg > *:not([fill]) {
    fill: none;
  }

  div {
    position: absolute;
    transform-origin: center top;
    transition: 200ms;
  }

  .body {
    position: relative;
    top: -2.5em;
    width: 8em;
    height: 10.25em;
    margin: auto;
    z-index: 1;
  }

  .hips {
    bottom: 0;
    left: 50%;
    width: 5em;
    transform: translateX(-50%);
  }

  .torso {
    top: 0;
    left: 50%;
    width: 8em;
    transform: translateX(-50%);
  }

  .head {
    bottom: 86%;
    left: 50%;
    width: 4em;
    transform: translateX(-50%);
  }

  #mouth-smile,
  #mouth-o {
    display: none;
  }

  .arm {
    top: 2.8125em;
    width: 1.25em;
    transform-origin: center 12%;
  }

  .arm.left {
    left: 87%;
  }

  .arm.right {
    right: 87%;
  }

  .forarm {
    top: 83%;
    width: 155%;
  }

  .left .forarm {
    right: -15%;
    transform-origin: 60% 0%;
  }

  .right .forarm {
    left: -15%;
    transform-origin: 40% 0%;
  }

  .leg {
    top: 89%;
    width: 27%;
    transform-origin: center -3%;
  }

  .leg.left {
    right: 19.5%;
  }

  .leg.right {
    left: 19.5%;
  }

  .lowerleg {
    top: 75%;
    width: 2.78125em;
  }

  .left .lowerleg {
    left: 0;
    transform-origin: 45% 0;
  }

  .right .lowerleg {
    right: 0;
    transform-origin: 55% 0;
  }

  .crotch {
    top: 9.25em;
    left: 50%;
    width: 2em;
    transform: translateX(-50%);
  }

  /* Wave */

  .wave #mouth-flat {
    display: none;
  }

  .wave #mouth-smile {
    display: initial;
  }

  .wave .arm.right {
    transform: rotate(50deg);
  }

  .wave .arm.right .forarm {
    animation: wave 0.3s 6 linear alternate;
  }

  .wave .arm.right .forarm svg {
    position: relative;
    left: -0.375em;
    transform: scaleX(-1);
  }

  /**
* Movement
*/

  /* Body */

  .body[data-body-pos="1"] {
    transform: translateY(25%);
  }

  .body[data-body-pos="2"] {
    transform: translateY(68.5%);
  }

  /* Left Leg */

  .body[data-body-pos="1"] .leg.left {
    transform: rotate(-70deg);
  }

  .body[data-body-pos="2"] .leg.left {
    transform: rotate(-90deg);
  }

  /* Right Leg */

  .body[data-body-pos="1"] .leg.right {
    transform: rotate(70deg);
  }

  .body[data-body-pos="2"] .leg.right {
    transform: rotate(90deg);
  }

  /* Left Lower Leg */

  .body[data-body-pos="1"] .leg.left .lowerleg {
    transform: rotate(70deg);
  }

  .body[data-body-pos="2"] .leg.left .lowerleg {
    transform: rotate(0);
  }

  /* Right Lower Leg */

  .body[data-body-pos="1"] .leg.right .lowerleg {
    transform: rotate(-70deg);
  }

  .body[data-body-pos="2"] .leg.right .lowerleg {
    transform: rotate(0);
  }

  /* Left Arm */

  .body[data-arm-pos="2"] .arm.left,
  .body[data-arm-pos="3"] .arm.left,
  .body[data-arm-pos="4"] .arm.left {
    transform: rotate(-50deg);
  }

  /* Right Arm */

  .body[data-arm-pos="2"] .arm.right,
  .body[data-arm-pos="3"] .arm.right,
  .body[data-arm-pos="4"] .arm.right {
    transform: rotate(50deg);
  }

  /* Left Forarm */

  .body[data-arm-pos="1"] .arm.left .forarm,
  .body[data-arm-pos="3"] .arm.left .forarm {
    transform: rotate(-90deg);
  }

  .body[data-arm-pos="1"] .arm.left .forarm svg,
  .body[data-arm-pos="3"] .arm.left .forarm svg {
    position: relative;
    right: -20%;
    transform: scaleX(-1);
  }

  .body[data-arm-pos="2"] .arm.left .forarm {
    right: -11%;
    width: 152%;
    transform: rotate(0);
  }

  .body[data-arm-pos="4"] .arm.left .forarm {
    transform: rotate(90deg);
  }

  /* Right Forarm */

  .body[data-arm-pos="1"] .arm.right .forarm,
  .body[data-arm-pos="3"] .arm.right .forarm {
    transform: rotate(90deg);
  }

  .body[data-arm-pos="1"] .arm.right .forarm svg,
  .body[data-arm-pos="3"] .arm.right .forarm svg {
    position: relative;
    left: -20%;
    transform: scaleX(-1);
  }

  .body[data-arm-pos="2"] .arm.right .forarm {
    left: -11%;
    width: 152%;
    transform: rotate(0);
  }

  .body[data-arm-pos="4"] .arm.right .forarm {
    transform: rotate(-90deg);
  }

  /* Mouth */

  .body[data-body-pos="1"] #mouth-smile {
    display: initial;
  }

  .body[data-body-pos="1"] #mouth-flat,
  .body[data-body-pos="1"] #mouth-o {
    display: none;
  }

  .body[data-body-pos="2"] #mouth-o {
    display: initial;
  }

  .body[data-body-pos="2"] #mouth-smile,
  .body[data-body-pos="2"] #mouth-flat {
    display: none;
  }

  /**
* Animations
*/

  @keyframes wave {
    100% {
      transform: rotate(90deg);
    }
  }
`;
const ContentIndicador = styled.div`
  display: flex;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  position: absolute;

  left: 0;
  right: 0;
  bottom: 80px;
  color: #fff;

  #keyboard {
    display: grid;
    grid-gap: 8px;
    user-select: none;
    align-self: center;
    color: #fff;
    button {
      color: #fff;
      appearance: none;
      height: 36px;
      width: 40px;
      border-radius: 7px;
      background: #ffffff;
      border: none;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: scale(var(1, 1)) translateZ(0);
      transition: transform 0.15s;
      svg {
        display: block;
        width: 8px;
        height: 8px;
        fill: var(--color, #fff);
        transition: fill 0.15s;
      }
      &.up {
        grid-row: 1;
        grid-column: 2;
      }
      &.left {
        grid-row: 2;
        grid-column: 1;
      }
      &.right {
        grid-row: 2;
        grid-column: 3;
      }
      &.down {
        grid-row: 2;
        grid-column: 2;
      }
      &.pressed {
        --scale: 0.95;
       
      }
    }
    span {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -24px;
      line-height: 16px;
      font-size: 12px;
      font-weight: 500;
       color: #fff;
      text-align: center;
      transition: opacity 0.25s;
      strong {
        transition: color 0.15s;
        color: #fff;
      }
      &.hide {
        opacity: 0;
        pointer-events: none;
      }
      &.pressed {
        color: #fff;
      }
    }
  }
`;
const Contentselect = styled.div`
  width: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  top: 10px;
  left: 0;
  right: 0;
  color:#fff;
  .content {
    border: 1px solid rgba(156, 98, 255, 0.95);
    border-radius: 5px;
    width: 100%;
    padding: 20px;
    display: flex;
    overflow: hidden;
    width: 100%;
    justify-content: center;
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
      margin-bottom:10px;
    }
    .iconofuego {
      position: absolute;
      right: -20px;
      font-size: 11rem;
      top: -20px;
      transform: rotate(-25deg);
    }
    @media ${Device.tablet} {
      width: 650px;
    }
  }
`;
