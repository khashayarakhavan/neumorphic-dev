import styled, { keyframes } from "styled-components";


export const background_change = (backColor) => keyframes`
  0% {
    background-color: ${backColor};
    opacity: 0%;
  }

  50% {
    background-color: ${backColor};
    opacity: 100%;
  }

  100% {
   background-color: none;
  }
`;

export const my_move = keyframes`
  50% {border-bottom: 4px solid #D65524;}  
`;

export const neon = keyframes`
  0% {
    color: #6eeb83;
    font-size: 48px;
  }
  30% {
    color: #149911;
  }
  70% {
    color: #a3f7bf;
  }
  100% {
    color: #6eeb83;
  }
`;


