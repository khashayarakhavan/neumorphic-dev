//Baiscs
import React from 'react';
//Libraries
import Lottie from "react-lottie";
//Assets
import {AnimationCreateRobot} from '../../../design/animations.styles';
//Styles
import {
  OnHover_palePink,
  OnHover_paleYellow,
  OnHover_Green,
} from "../../../design/events.styles";
import { Accent_fireOrange , Accent_mateBlue } from '../../../design/effects.styles';
import {
  Button,
  TEXT,
  H1,
  HeroHeaderContainer,
  HeroHeaderLeft,
} from "./heroHeader.styles";


//Code
const HeroHeaderComponent = () => (
  <HeroHeaderContainer id="header">
    <HeroHeaderLeft>
      <H1>
        Hi
        <Accent_fireOrange>.</Accent_fireOrange>
        <br />I<Accent_mateBlue>’</Accent_mateBlue>m
        <Accent_fireOrange>&nbsp;K</Accent_fireOrange>hashi
      </H1>
      <TEXT>
        a full stack web developer and I love &nbsp;
        <OnHover_palePink>coding</OnHover_palePink>,&nbsp;
        <OnHover_paleYellow>science</OnHover_paleYellow> &
        <OnHover_Green>French</OnHover_Green>&nbsp;language!
      </TEXT>
      <Button>
        Pleased to meet you 😊 <br />
        <span>tea or coffee ? </span>
      </Button>
    </HeroHeaderLeft>

    <Lottie options={AnimationCreateRobot} height={440} width={440} />
  </HeroHeaderContainer>
);

export default HeroHeaderComponent;