//Libraries
import styled from "styled-components";

//Code
export const HeroHeaderContainer = styled.header`
  display: grid;
  height: 90vh;
  grid-template-columns: 1fr minmax(500px, 1fr);
  max-width: 100%;
  overflow: hidden !important;
  box-sizing: border-box;
  padding: 0px 50px 20px 50px !important;
`;

export const HeroHeaderLeft = styled.div`
  padding-top: 100px;
  padding-left: 50px;
`;

export const TEXT = styled.span`
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  color: #094e7c;
  display:block;
  font-size: 20px !important;
  line-height: 30px !important;
  margin-left: 5px;
  margin-top: 60px !important;
  margin-bottom: 30px !important;
`;



export const H1 = styled.span`
  font-family: 'Rubik Mono One', sans-serif; 
  font-weight: 400 !important; 
  font-size: 75px !important;
  line-height: 80px !important;
  color: #094e7c; 
  margin-bottom: 30px !important;
  margin-block-end: 30px !important;
`;

export const Button = styled.div`
  align-self: flex-start;

  &,
  &:link,
  &:visited {
    font-family: "Montserrat", sans-serif !important;
    display: block;
    font-size: 16px !important;
    font-weight: 400 !important;
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
    font-size: 1.6rem;
    border: none;
    cursor: pointer;
    color: #094e7c;
    box-shadow: 4px 4px 15px 2px rgba(125, 126, 127, 0.42),
           -3px -3px 12px 2px rgba(255, 255, 255, 0.93);
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