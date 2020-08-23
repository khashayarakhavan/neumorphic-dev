import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import { background } from "../../themes/variants/buttonColor";
// import { Headerbackground } from "../../themes/mode/index";

export const HeaderContainer = styled.div`
         height: 20rem;
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: space-between;
         margin-bottom: 25px;
         ${"" /* background-color: ${Headerbackground};  */}
         color: 'pink';

         ${"" /* background-color: ${(props) => props.theme.background }; */}
         background: linear-gradient(-45deg, rgba(240,240,243,1), rgba(209,217,230,1));


         /* Color the border and text with theme.main */
         ${"" /* color: ${(props) => props.theme.main}; */}
         ${"" /* border: 5px solid ${(props) => props.theme.foreground}; */}

         @media screen and (max-width: 800px) {
           height: 60px;
           padding: 10px;
           margin-bottom: 20px;
         }
       `;

// HeaderContainer.defaultProps = {
//   borderColor: "blue",
// };

export const LogoContainer = styled(Link)`
         height: 100px;
         ${'' /* width: 50px; */}
         ${'' /* background: rgba(125, 126, 127, 0.15); */}
         margin-left: 30px;
         display: flex;
         flex-direction: column;
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
         width: 70px;
         border-radius: 5px;
         ${"" /* background: rgba(240, 125, 180, 0.3); */}
         box-shadow: 3px 3px 7px 2px rgba(125, 126, 127, 0.42),
           -3px -3px 12px 2px rgba(255, 255, 255, 0.63);
       `;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  background: rgba(125, 205, 255, 5%);
  border-radius: 5px;
  filter: sepia(50%);
  box-shadow: 2px 2px 4px 2px rgba(125, 126, 127, 0.52),
    -3px -3px 8px 2px rgba(255, 255, 255, 0.93);
  &:hover {
  }
  ${"" /* background: rgba(125, 205, 255, 100%); */}
  ${"" /* background-color: red; */}
`;




export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 20px;
  justify-content: flex-end;
  
  @media screen and (max-width: 800px) {
    width: 80%;
  }

  
`;


export const Span = styled.span`
  color: #eb5e28;
`;

export const Span2 = styled.span`
         color: #003153;
       `;
export const Span3 = styled.span`
         color: #003153;
       `;


export const OptionLink = styled(Link)`
         margin-right: 10px;

         background: ${(props) =>
           props.active ? "rgba(125, 205, 255, 10%)" : "none"};
         display: flex;
         ${"" /* flex-direction: column; */}
         justify-content: center;
         align-items: center;
         height: 40px;
         width: 80px;
         border-radius: 5px;
         font-size: 10px;
         font-weight: 800;
         /*   font-style: italic; */
         /*   color: #D65524; */
         /*   color: #230E05; */
         color: #003153;
         ${"" /* color: red; */}
         /*   color: rgba(#003153, 90%); */
         font-family: "Montserrat", sans-serif;
         transition: all 0.8s;
         ${"" /* background: rgba(240, 125, 180, 0.3); */}
         box-shadow: 3px 3px 7px 2px rgba(125, 126, 127, 0.42),
           -3px -3px 12px 2px rgba(255, 255, 255, 0.63);
         ${"" /* padding: 10px 15px; */}
         cursor: pointer;

         &:hover {
           ${"" /* color: rgba(125, 126, 127, 0.5); */}
           color: white;
           background-color: #003153;
         }

         &:hover ${Span} {
           color: #ffffff;
         }
         &:hover ${Span2} {
           color: #ffffff;
         }
         &:hover ${Span3} {
           color: #eb5e28;
         }
       `;

OptionLink.displayName = 'OptionLink';

