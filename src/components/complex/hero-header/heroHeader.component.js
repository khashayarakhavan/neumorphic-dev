import React from 'react';
import logo from '../../../assets/icon/logo.png';
import {Orange_White} from '../../header/header.styles';
import Lottie from "react-lottie";
import * as buildProduct from "../../complex/loading/buildProduct";
import {TeaOrCoffee} from './heroHeader.styles';


const Template = () => {
    const defaultOptions2 = {
      loop: false,
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
          <Lottie options={defaultOptions2} height={240} width={240} />
          <h1 className="heading-primary H1">
            <span className="heading-primary--main:NOT H1">
              Hi<Orange_White>.</Orange_White> I<Orange_White>’</Orange_White>m
              Kash
            </span>
            <br></br>
            <span className="heading-primary--sub:NOT TEXT">
              I'm a web designer <Orange_White></Orange_White> developer based
              in Vancouver, Canada. I have a passion for creation.
            </span>
          </h1>
          {/* <p className="TEXT heading-primary:NOT">So nice to meet you. 😊</p> */}
          <TeaOrCoffee href="#section-tours" className=" btn btn--white btn--animated TEXT">
            tea or coffee ? 🍵
          </TeaOrCoffee>
        </div>
      </header>
    );
};

export default Template;