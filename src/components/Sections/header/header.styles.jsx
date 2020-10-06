//Basics
import { Link } from "react-router-dom";
//Libraries
import styled from "styled-components";
//Design
import {respond} from '../../../design/responsive';
import colors from "../../../design/colors";
import { shadow_neu_light__insetOrange } from "../../../design/shadows.styles";
import {shadowLight} from "../../../design/mixins.styles";
import {tablet_medium} from '../../../design/responsive';
import { PrussianBlue_To_Orange } from '../../../design/effects.styles';
//Assets
import { ReactComponent as VegeloperLogo } from "../../../assets/SVG/Vegeloper.svg";
import { ReactComponent as WebWeaverLine } from "../../../assets/SVG/WebWeaver-Line.svg";


//Code
export const HeaderContainer = styled.div`
  ${respond.handheld`
    background-color: #1F2 !important;
  `};
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: "pink";
  box-shadow: ${({ variant }) =>
    variant === "active"
      ? shadow_neu_light__insetOrange
      : ` 0px 0px 15px 2px rgba(125, 126, 127, 0.542),
          -1px -1px 12px 2px rgba(255, 255, 255, 0.93);`};
  ${shadowLight};
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
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
  
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 40px;
  justify-content: flex-end;
  ${tablet_medium};
  
`;


export const MenuButton = styled(Link)`
  --props-variant-default-background-color: none ;
  --props-variant-active-background-color: #D65524 ;
  --props-variant-default-background-color-onHover: #F8F8F9 ;
  --props-variant-active-background-color-onHover: #F8F8F9 ;
  --props-shape-default: 5px;
  --props-shape-soft: 20px;
  --props-shape-rounded: 50%;
        
  background-color: ${({ variant }) =>
    variant === "noactive"
      ? "var(--props-variant-active-background-color)"
      : "var(--props-variant-default-background-color)"};   
  border-top: ${({ variant }) =>
    variant === "noactive"
      ? "4px solid #D65524"
      : "var(--props-variant-default-background-color)"};
  border-left: ${({ variant }) =>
    variant === "noactive"
      ? "4px solid #D65524"
      : "var(--props-variant-default-background-color)"};
  border-right: ${({ variant }) =>
    variant === "noactive"
      ? "4px solid #D65524"
      : "var(--props-variant-default-background-color)"};
  border-bottom: ${({ variant }) =>
    variant === "noactive"
      ? "4px solid #D65524"
      : "var(--props-variant-default-background-color)"};
  box-shadow:  ${({ variant }) =>
    variant === "active"
      ? ` 4px 4px 15px 2px rgba(125, 126, 127, 0.42),
           -3px -3px 12px 2px rgba(255, 255, 255, 0.93), inset 0px -4px 0px 0px #D65524;`
      : ` 4px 4px 15px 2px rgba(125, 126, 127, 0.42),
           -3px -3px 12px 2px rgba(255, 255, 255, 0.93);`};

  border-radius: 1px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  overflow: hidden;
  transition: 
    box-shadow 0.25s cubic-bezier(.98,.13,.96,.34) 0.75s, 
    background-color .5s  ease 0s;
  &:hover {
    transition: 
      box-shadow 0.25s cubic-bezier(.98,.13,.96,.34) 0.75s, 
      background-color .5s  ease 0s  ;}
  position: relative;
  vertical-align: middle; 
  
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
  
  &::before {
    transition: 
      border-color 0.2s ease  .1s,
      width 0s ease 0.8s,
      height 0s ease .8s;
    bottom: 0;
    right: 0;
  }

  &::after {
    transition: 
      border-color 0.2s  .1s,
      width 0s ease 0.8s,
      height 0s ease .8s ;
    top: 0;
    left: 0;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;     
  }
  
  &:hover::before {
    border-top-color: #D65524; 
    border-right-color: #D65524;
    transition: 
      height .5s ease , // Delay And then height 
      width .5s ease  .5s ,// Width expands first
      border-top-color 0s .5s;
  }

  &:hover::after {
    border-bottom-color: #D65524; // Make borders visible
    border-left-color: #D65524;    
    transition:
      border-left-color 0s 1s,
      height .5s ease 1s, // And finally height
      border-bottom-color 0s  1.5s, // Wait for ::before to finish before showing border
      width .5s ease 1.5s; // And then exanding width
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
    transition: transform .25s ease;
  }

`;

MenuButton.displayName = "OptionLink";
