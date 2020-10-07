import shadows from './shadows.styles';
import {respond} from './responsive';
import {css} from 'styled-components';


export const mix_neumorphic = {
  onActive_orange: (...args) => css`
    box-shadow:  ${({ variant }) =>
      variant === "active" ? shadows.neumorphic.orange : shadows.neumorphic.norm};
    }`,
  norm: (...args) => css`
    box-shadow: ${shadows.neumorphic.norm};
    }`,
  light: (...args) => css`
    box-shadow: ${shadows.neumorphic.light};
    }`,
  red: (...args) => css`
    box-shadow: ${shadows.neumorphic.red};
    }`,
};
export const mix_header = {
  basic: (...args) => css`
      height: 10vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      ${respond.handheld`
            background-color: #1F2 !important;
            height: 60px;
            padding: 10px;
            margin-bottom: 20px;
      `}
    }`,
};
export const mix_containers = {
  header: (...args) => css`
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${respond.handheld`
      background-color: #1F2 !important;
      height: 60px;
      padding: 10px;
      margin-bottom: 20px;
    `}
  }`,
  menuButton: (...args) => css`
    & > * {
      &::before,
      &::after {
        box-sizing: inherit;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${respond.handheld`
      background-color: #1F2 !important;
      height: 60px;
      padding: 10px;
      margin-bottom: 20px;
    `}
  }`,
};





