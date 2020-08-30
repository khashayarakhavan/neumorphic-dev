import React from 'react';
import logo from '../../../assets/icon/logo.png';
import {Orange_White, LightBlue_DarkBlue} from '../../header/header.styles';
import Lottie from "react-lottie";
import * as buildProduct from "../../complex/loading/buildProduct";
import { TeaOrCoffee, Button, TEXT, H1, HeroHeader ,HeroHeaderLeft } from "./heroHeader.styles";


const Template = () => {
    const defaultOptions2 = {
      loop: true,
      autoplay: true,
      animationData: buildProduct.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <HeroHeader className="header:NOT ROBOT" id="header">
        {/* <div className="header__logo-box">
          <img src={logo} alt="logo" className="header__logo" />
        </div> */}
        <HeroHeaderLeft className="header__text-box">
          <H1 className="heading-primary--main:NOT">
            Hi<LightBlue_DarkBlue>.</LightBlue_DarkBlue>
            <br></br>I<Orange_White>’</Orange_White>m
            <Orange_White>K</Orange_White>ash
          </H1>
          <br></br>
          <TEXT className="heading-primary--sub:NOT TEXT:NOT">
            I'm a web designer developer based in Vancouver and I have a passion
            for creation.
          </TEXT>

          {/* <p className="TEXT heading-primary:NOT">So nice to meet you. 😊</p>
           */}
          <Button>
            {/* <TeaOrCoffee
              href="#section-tours"
              className=" btn btn--white btn--animated TEXT"
            > */}
            tea or coffee ? ☕{/* </TeaOrCoffee> */}
          </Button>
        </HeroHeaderLeft>
        <Lottie options={defaultOptions2} height={440} width={440} />
      </HeroHeader>
    );
};

export default Template;