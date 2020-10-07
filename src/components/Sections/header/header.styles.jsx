//Basics
import { Link } from "react-router-dom";
//Libraries
import styled from "styled-components";
//Design
import {respond} from '../../../design/responsive';
import colors from "../../../design/colors";
import margins from '../../../design/margins.styles';
import shadows from "../../../design/shadows.styles";
import {mix_neumorphic, mix_containers} from "../../../design/mixins.styles";
import {tablet_medium} from '../../../design/responsive';
import { PrussianBlue_To_Orange } from '../../../design/effects.styles';
//Assets
import { ReactComponent as VegeloperLogo } from "../../../assets/SVG/Vegeloper.svg";
import { ReactComponent as WebWeaverLine } from "../../../assets/SVG/WebWeaver-Line.svg";


//Code
export const HeaderContainer = styled.div`
  ${mix_containers.header};
  ${mix_neumorphic.onActive_orange};
`;

export const LogoContainer = styled(Link)`
  height: 50px;
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const LogoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 80px;
  border-radius: 12px;
  border-radius: 5px;
  box-shadow: 
    2px 2px 8px 2px rgba(125, 126, 127, 0.52),
    -3px -3px 8px 2px rgba(255, 255, 255, 0.63);
  box-shadow: var(--shadow-dark);

`;

export const LogoSVG = styled(VegeloperLogo)`
  width: 60px;
  height: 60px;
  fill: #eb5e28;
`;


export const LogoText = styled.p`
  ${'' /* fill: #003153; */}
  color: ${colors.primary};
  font-family: "Barriecito", cursive;
  font-size: 3.2rem;
  font-weight: 400;
  margin-left: 10px;
  z-index: var(--layer-G);;
`;

export const LogoLine = styled(WebWeaverLine)`
  width: 10px;
  height: 30px;
  fill: #003153;
  margin-left: 10px;
  margin-top: -5px;
`;


export const MenuButtonsContainer = styled.div`
  ${mix_containers.menuButton}
  ${tablet_medium};
  margin-right: ${margins.norm};
  
  width: 50%;
  height: 100%;
`;


export const MenuButton = styled(Link)`
  --props-variant-default-background-color: none;
  --props-variant-active-background-color: #d65524;
  --props-variant-default-background-color-onHover: #f8f8f9;
  --props-variant-active-background-color-onHover: #f8f8f9;
  --props-shape-default: 5px;
  --props-shape-soft: 20px;
  --props-shape-rounded: 50%;

  ${mix_neumorphic.onActive_orange};

  border-radius: 1px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  position: relative;
  vertical-align: middle;
  overflow: hidden;
  &:hover ${PrussianBlue_To_Orange} {
    color: ${colors.accent};
  }

  &::before {
    bottom: 0;
    right: 0;
  }

  &::after {
    top: 0;
    left: 0;
  }

  &::before,
  &::after {
    border: ${({ variant }) =>
      variant === "active" ? "3px solid transparent" : "none"};
    border-radius: 1px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    width: 0;
    height: 0;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    border-top-color: ${colors.accent};
    border-right-color: ${colors.accent};
    transition: 
      // Height expands first
      height 0.5s ease,
      // 0.5s Delay, then width and borderColor
      width 0.5s ease 0.5s,
      border-top-color 0s 0.5s;
  }

  &:hover::after {
    border-bottom-color: ${colors.accent}; // Make borders visible
    border-left-color: ${colors.accent};
    transition: 
      // 1s Wait for ::before
      height 0.5s ease 1s, border-left-color 0s 1s,
      // 0.5s Wait for height
      border-bottom-color 0s 1.5s,
      width 0.5s ease 1.5s; // And then exanding width
  }
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 80px;
  font-size: 12px;
  font-weight: 800;
  margin-right: 10px;
  color: #003153;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "active"
        ? "var(--props-variant-active-background-color-onHover)"
        : "var(--props-variant-default-background-color-onHover)"};
  }

  &:active {
    transform: translateY(2px);
    transition: transform 0.25s ease;
  }
`;

MenuButton.displayName = "OptionLink";
