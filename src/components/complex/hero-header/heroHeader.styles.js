//Libraries
import styled from "styled-components";
//Mixins
import mixins from '../../../design/mixins.styles';
//Designs
import fonts from '../../../design/fonts.styles';
import colors from '../../../design/colors';
import sizes from '../../../design/sizes';
import shadows from '../../../design/shadows.styles';
import events from '../../../design/events.styles';
import {background_change} from '../../../design/motions.styles';


//Code
export const HeroHeaderContainer = styled.header`
  display: grid;
  height: 90vh;
  background: linear-gradient(
    -180deg,
    rgb(242, 243, 247),
    rgb(234, 241, 249)
  );
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  padding: ${sizes.padding.medium};
`;

export const HeroHeaderLeft = styled.div`
  padding-top: 100px;
  padding-left: 50px;
`;

export const TEXT = styled.span`
  ${fonts.mixins.text};
  color: ${colors.primary};
  margin-left: ${sizes.margin.smaller};
  margin-top: ${sizes.margin.largest} ;
  margin-bottom: ${sizes.margin.large};
  line-height: ${sizes.lineHeight.large} ;
  display:block;
`;

export const H1 = styled.span`
  ${fonts.mixins.heroHeader};
  color: ${colors.primary};
  line-height: ${sizes.lineHeight.extraLarge};
  margin-bottom: ${sizes.margin.large};
  margin-block-end: ${sizes.margin.large};  
`;

export const Skill_1 = styled.span`
  ${events.mixins.onHover.palePink};
  ${mixins.flex.inlineCenter};
  animation: ${background_change(colors.palePink)} 3s 2s infinite;
  width: 60px;
  height: 50px;

  &:hover {
    background-color: ${colors.palePink};
  }
`;

export const Skill_2 = styled.span`
  ${events.mixins.onHover.palePink};
  ${mixins.flex.inlineCenter};
  animation: ${background_change(colors.paleYellow)} 3s 3.5s infinite;
  width: 60px;
  height: 50px;

  &:hover {
    background-color: ${colors.paleYellow};
  }
`;
export const Skill_3 = styled.span`
  ${events.mixins.onHover.palePink};
  ${mixins.flex.inlineCenter};
  animation: ${background_change(colors.paleBlue)} 3s 5s infinite;
  width: 60px;
  height: 50px;

  &:hover {
    background-color: ${colors.paleBlue};
  }
`;

export const Button = styled.div`
  align-self: flex-start;

  &,
  &:link,
  &:visited {
    ${fonts.mixins.CTA.visitProfile}};
    display: block;
    line-height: 30px !important;
    margin-top: 60px !important;
    margin-bottom: 30px !important;
    margin-right: 30px !important;
    margin-block-end: 30px !important;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 3rem;
    display: inline-block;
    border-radius: 10px;
    transition: all 0.4s;
    position: relative;
    border: none;
    cursor: pointer;
    color: #094e7c;
    ${shadows.mixins.neumorphic.original};
  }

  &:hover {
    transform: translateY(-8px);
    background-color:  #F8F8F9;
    box-shadow:  4px 4px 15px 2px rgba(125, 126, 127, 0.42),
           -3px -3px 12px 2px rgba(255, 255, 255, 0.93); 

  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  &:active {
    outline: none;
    background-color: #094e7c;
    color: rgba(252, 253, 253, 0.87);
    transform: translateY(-2px);
    box-shadow:  4px 4px 15px 2px rgba(125, 126, 127, 0.42),
           -3px -3px 12px 2px rgba(255, 255, 255, 0.93);
  }
`;