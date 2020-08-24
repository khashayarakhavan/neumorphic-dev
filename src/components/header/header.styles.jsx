import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../themes/colors';
import { ColorsThemeFelal } from "../../themes/colors";
import { ThemeFelal } from '../../themes/themes';



// ATTENTION!: this is an example of using attributes to improve our development process 
// by defining very specific static or dynamic props to our CSS .
const Constant = styled.div.attrs((props) => ({
  // we can define static props
  localShadow: "grey",

  // or we can define dynamic ones
  foreground: props.theme.foreground || "green",
 
}))`

  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: ${(props) => props.foreground};

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;




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
        ${'' /* NOTE: Different styles for using Theme,localProps and variables to scale infinitely. */}

         ${'' /* background-color: ${ColorsThemeFelal.primary}; */}
         ${"" /* background-color: ${ ({ theme: {foreground} }) => foreground ? foreground : "none" }; */}
         ${"" /* background: rgba(240, 125, 180, 0.3); */}
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         height: 100px;
         width: 100px;
         border-radius: 12px;

         box-shadow: inset 3px 3px 8px 2px rgba(125, 126, 127, 0.35),
           inset -3px -3px 12px 2px rgba(255, 255, 255, 0.93);
       `;

export const Logo = styled.img`
         width: 40px;
         height: 40px;
         background: rgba(125, 205, 255, 5%);
         border-radius: 5px;
         filter: brightness(95%) sepia(60%);
         box-shadow: 2px 2px 8px 2px rgba(125, 126, 127, 0.52),
           -3px -3px 8px 2px rgba(255, 255, 255, 0.63);
         
         ${"" /* background: rgba(125, 205, 255, 100%); */}
         ${"" /* background-color: red; */}
       `;




export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 40px;
  justify-content: flex-end;
  
  @media screen and (max-width: 800px) {
    width: 80%;
  }

  
`;


export const Span = styled.span`
         ${"" /* color: #eb5e28; */}
         ${"" /* color: #F8F8F9; */}
         color: #F8F8F9;
       `;

export const Span2 = styled.span`
         color: #003153;
       `;
export const White_Orange = styled.span`
         color: #f8f8f9;
         font-family: inherit;
         font-size: inherit;
         font-weight: inherit;
`;

export const PrussianBlue_Orange = styled.span.attrs((props) => ({
         type: "text",
         status: props.theme ? "green" : "black",
       }))`
         ${'' /* color: #003153; */}
         ${'' /* color: ${({theme: {foreground}}) => foreground ? foreground : "blue"}; */}
         ${"" /* color: ${colors.greenLight}; */}
         font-family: inherit;
         font-size: inherit;

         font-weight: inherit;
         transition: inherit;
       `;



export const OptionLink = styled(Link)`
 ${'' /* NOTE: Different styles for using Theme,localProps and variables to scale infinitely. */}

--props-variant-default-background-color: none ;
--props-variant-active-background-color: #D65524 ;
--props-variant-default-background-color-onHover: #F8F8F9 ;
--props-variant-active-background-color-onHover: #F8F8F9 ;

--props-shape-default: 5px;
--props-shape-rounded: 50%;

        
           }
         background-color: ${({ variant }) =>
           variant === "active"
             ? "var(--props-variant-active-background-color)"
             : "var(--props-variant-default-background-color)"};
             border-radius: var(--props-shape-default);
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
         ${"" /* font-family: "Lora", serif; */}
         transition: all 0.4s;
         
         box-shadow: 4px 4px 15px 2px rgba(125, 126, 127, 0.42),
           -3px -3px 12px 2px rgba(255, 255, 255, 0.93);
         
         cursor: pointer;

         &:hover {
           
           background-color: ${({ variant }) =>
             variant === "active"
               ? "var(--props-variant-active-background-color-onHover)"
               : "var(--props-variant-default-background-color-onHover)"};
         }

         &:active {
           transform: translateY(2px);
           box-shadow: 2px 2px 7px 2px rgba(125, 126, 127, 0.42),
             -3px -3px 12px 2px rgba(255, 255, 255, 0.43);
         }

         &:hover ${Span} {
           color: #003153;
         }
         
         &:hover ${Span2} {
           color: ${colors.white};
         }

         &:hover ${White_Orange} {           
           color: #eb5e28;           
         }

         &:hover ${PrussianBlue_Orange} {
           color: #eb5e28;           
         }
       `;

OptionLink.displayName = 'OptionLink';

