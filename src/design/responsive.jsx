import { css } from "styled-components";

//Code
export const respond = {
  handheld: (...args) => css`
    @media (max-width: 520px) {
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
  desktop_medium: (...args) => css`
    @media (max-width: 1200px) {
      ${css(...args)};
  }`,
  desktop_large: (...args) => css`
    @media (max-width: 1600px) {
      ${css(...args)};
  }`,
  
};


