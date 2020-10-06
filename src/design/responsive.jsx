import { css } from "styled-components";

//Code
export const tablet_medium = () => {
  return `@media screen and (max-width: 800px) {
    width: 80%;
  } `;
};

export const respond = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${css(...args)};
    }`,
  tablet_medium: (...args) => css`
    @media (max-width: 700px) {
      ${css(...args)};
    }`,
  tablet_large: (...args) => css`
    @media (max-width: 900px) {
      ${css(...args)};
    }`,
};


