//Basics
import { Link } from "react-router-dom";
//Libraries
import styled from "styled-components";
//Mixins
import { mix_neumorphic, mix_containers, mix_flex } from "../../../design/mixins.styles";
//Responsive
import { respond } from "../../../design/responsive";
//Design
import colors from "../../../design/colors";
import shadows from "../../../design/shadows.styles";
import fonts from '../../../design/fonts.styles';
import margins from '../../../design/margins.styles';
import { PrussianBlue_To_Orange } from '../../../design/effects.styles';
//Assets
import { ReactComponent as VegeloperLogo } from "../../../assets/SVG/Vegeloper.svg";
import { ReactComponent as WebWeaverLine } from "../../../assets/SVG/WebWeaver-Line.svg";


//Code
export const HeaderContainer = styled.div`
  ${mix_containers.header};
  ${mix_neumorphic.onActive_orange};
  ${respond.desktop_large`
    background-color: ${colors.redLight};
  `};
  ${respond.desktop_medium`
    background-color: ${colors.redDark};
  `};
  ${respond.tablet_large`
    background-color: ${colors.blueLight};
  `};
  ${respond.tablet_medium`
    background-color: ${colors.blueDark};
  `};
`;

export const LogoContainer = styled(Link)`
  ${mix_containers.logo};
  height: 50px;
  margin-left: 30px;
`;

export const LogoSVG = styled(VegeloperLogo)`
  width: 60px;
  height: 60px;
  ${respond.tablet_medium`
    display: none;
  `};
`;

export const LogoText = styled.p`
  ${fonts.logo};
  color: ${colors.primary};
  margin-left: 10px;
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
  margin-right: ${margins.norm};
  width: 50%;
  height: 100%;
`;


export const MenuButton = styled(Link)`

  ${mix_neumorphic.onActive_orange};
  ${mix_flex.center};
  ${fonts.menuButton}
  color: ${colors.primary};
  height: 40px;
  width: 80px;
  margin-right: 10px;
  cursor: pointer;

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

  &:hover {
    background-color: ${colors.white};
  }

  &:active {
    transform: translateY(2px);
    transition: transform 0.25s ease;
  }
`;

MenuButton.displayName = "OptionLink";
