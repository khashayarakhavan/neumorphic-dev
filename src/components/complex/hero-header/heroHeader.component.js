import React from 'react';
import logo from '../../../assets/icon/logo.png';
import {Orange_White} from '../../header/header.styles';
import Lottie from "react-lottie";
import * as buildProduct from "../../complex/loading/buildProduct";
import {TeaOrCoffee, Button, TEXT, H1} from './heroHeader.styles';


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
      <header className="header:NOT ROBOT" id="header">
        <div className="header__logo-box">
          <img src={logo} alt="logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <Lottie options={defaultOptions2} height={440} width={440} />
          <span className="heading-primary:NOT H1:NOT">
            <H1 className="heading-primary--main:NOT">
              Hi.<Orange_White></Orange_White> I<Orange_White>’</Orange_White>m
             <Orange_White>K</Orange_White>ash
            </H1>
            <br></br>
            <TEXT className="heading-primary--sub:NOT TEXT:NOT">
              I'm a web designer <Orange_White></Orange_White> developer based
              in Vancouver, Canada. I have a passion for creation.
            </TEXT>
          </span>
          {/* <p className="TEXT heading-primary:NOT">So nice to meet you. 😊</p>
           */}
          <Button >
            {/* <TeaOrCoffee
              href="#section-tours"
              className=" btn btn--white btn--animated TEXT"
            > */}
            tea or coffee ? ☕{/* </TeaOrCoffee> */}
          </Button>
        </div>
      </header>
    );
};

export default Template;