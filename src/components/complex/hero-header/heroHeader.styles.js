import styled from "styled-components";

export const TeaOrCoffee = styled.a`
         font-family: 'Montserrat', sans-serif !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 30px !important;
    margin-top: 60px !important;
    margin-bottom: 30px !important;
    margin-right: 30px !important;
    margin-left: 60px !important;
    margin-block-start: 30px !important;
    margin-block-end: 30px !important;
         }
       `;
export const HeroHeader = styled.header`
    display: grid;

  grid-template-columns: 1fr minmax(500px, 1fr);
  max-width: 100%;
    overflow: hidden !important;
    box-sizing: border-box;
    padding: 0px 50px 20px 50px !important;
         }
       `;

       export const HeroHeaderLeft = styled.div`
    ${'' /* margin: 60px; */}
    padding-top: 100px;
    padding-left: 50px;
         }
       `;
       export const OnHover_Pink = styled.div`
    ${"" /* margin: 60px; */}
    width: 60px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    &:hover {
    background-color: #ffd7d5;
    }
    ${"" /* position: abosolute; */}
    z-index: -1;
    
         }
       `;
       export const OnHover_Pink2 = styled.div`
    ${"" /* margin: 60px; */}
    width: 60px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    &:hover {
    background-color: #f0efeb;
    }
    ${"" /* position: abosolute; */}
    z-index: -1;
    
         }
       `;
       export const OnHover_Green = styled.div`
    ${"" /* margin: 60px; */}
    width: 60px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    &:hover {
    background-color: #dbe7e4;
    }
    ${"" /* position: abosolute; */}
    z-index: -1;
    
         }
       `;

export const TEXT = styled.span`
// this is a CSS comment inside styled components
 color: #094e7c;
 display:block;
    font-family: 'Montserrat', sans-serif !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 30px !important;
    margin-left: 5px;
    margin-top: 60px !important;
    margin-bottom: 30px !important;
    ${'' /* margin-right: 30px !important; */}
    ${'' /* margin-left: 30px !important; */}
    ${'' /* margin-block-start: 30px !important; */}
    ${'' /* margin-block-end: 30px !important; */}
         }
       `;
export const H1 = styled.span`
 ${"" /* font-family: 'Lora', serif !important; */}
     font-family: 'Montserrat', sans-serif !important;
     ${"" /* color: #F8F8F9; */}
       color: #094e7c; 
      ${'' /* color: #094e7c; */}
    font-size: 95px !important;
    font-weight: 800 !important;
    line-height: 60px !important;
    margin-top: 60px !important;
    margin-bottom: 30px !important;
    ${"" /* margin-right: 30px !important; */}
    ${"" /* margin-left: 30px !important; */}
    ${"" /* // margin-block-start: 60px !important; */}
    margin-block-end: 30px !important;
         }
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
    ${'' /* margin-left: 60px !important; */}
    ${'' /* margin-block-start: 30px !important; */}
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
    ${"" /* background-color: rgba(252, 253, 253, 0.87); */}
    ${"" /* box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); */}
    box-shadow: 4px 4px 15px 2px rgba(125, 126, 127, 0.42),
           -3px -3px 12px 2px rgba(255, 255, 255, 0.93);
  }

  &:hover {
    transform: translateY(-8px);
    ${"" /* box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); */}
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
    ${"" /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); */}
    box-shadow:  4px 4px 15px 2px rgba(125, 126, 127, 0.42),
           -3px -3px 12px 2px rgba(255, 255, 255, 0.93);
  }
`;