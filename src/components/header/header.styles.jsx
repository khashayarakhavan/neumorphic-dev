import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../themes/colors";
import { ColorsThemeFelal } from "../../themes/colors";
import { ThemeFelal } from "../../themes/themes";

// ATTENTION!: this is an example of using attributes to improve our development process
// by defining very specific static or dynamic props to our CSS .
const Constant = styled.div.attrs((props) => ({
  // we can define static props
  localShadow: "grey",
  size: props.size || "1em",
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
  ${'' /* margin-bottom: 25px; */}
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
  ${"" /* width: 50px; */}
  ${"" /* background: rgba(125, 126, 127, 0.15); */}
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
        ${
          "" /* NOTE: Different styles for using Theme,localProps and variables to scale infinitely. */
        }

         ${"" /* background-color: ${ColorsThemeFelal.primary}; */}
         ${
           "" /* background-color: ${ ({ theme: {foreground} }) => foreground ? foreground : "none" }; */
         }
         ${"" /* background: rgba(240, 125, 180, 0.3); */}
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         height: 100px;
         width: 100px;
         border-radius: 12px;
         ${"" /* background-color: #ffd1c1; */}
         ${"" /* background-color: #fa9370; */}

         box-shadow: inset 3px 3px 8px 2px rgba(125, 126, 127, 0.35),
           inset -3px -3px 12px 2px rgba(255, 255, 255, 0.93);
       `;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  ${"" /* background: rgba(125, 205, 255, 5%); */}
  border-radius: 5px;
  ${"" /* filter: brightness(95%) sepia(60%); */}
  box-shadow: 2px 2px 8px 2px rgba(125, 126, 127, 0.52),
           -3px -3px 8px 2px rgba(255, 255, 255, 0.63);

  ${"" /* background: rgba(125, 205, 255, 100%); */}
  ${"" /* background-color: red; */}
`;

export const OptionsContainer = styled.div`
         & > * {
           &::before,
           &::after {
             box-sizing: inherit;
             content: "";
             position: absolute;
             width: 100%;
             height: 100%;
           }
         }
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

         &:hover {
           color: #eb5e28;
         }
       `;
export const Orange_White = styled.span`
         color: #eb5e28;
         font-family: inherit;
         font-size: inherit;
         font-weight: inherit;

         &:hover {
           color: #f8f8f9;
         }
       `;

export const PrussianBlue_Orange = styled.span.attrs((props) => ({
  type: "text",
  status: props.theme ? "green" : "black",
}))`
         ${"" /* color: #003153; */}
         ${
           "" /* color: ${({theme: {foreground}}) => foreground ? foreground : "blue"}; */
         }
         ${"" /* color: ${colors.greenLight}; */}
         font-family: inherit;
         font-size: inherit;

         font-weight: inherit;
         transition: inherit;
       `;

export const OptionLink = styled(Link)`
 ${
   "" /* NOTE: Different styles for using Theme,localProps and variables to scale infinitely. */
 }

--props-variant-default-background-color: none ;
--props-variant-active-background-color: #D65524 ;
--props-variant-default-background-color-onHover: #F8F8F9 ;
--props-variant-active-background-color-onHover: #F8F8F9 ;

--props-shape-default: 5px;
--props-shape-soft: 20px;
--props-shape-rounded: 50%;

        
           }
         background-color: ${({ variant }) =>
           variant === "noactive"
             ? "var(--props-variant-active-background-color)"
             : "var(--props-variant-default-background-color)"};
         
         
         border-top: ${({ variant }) =>
           variant === "noactive"
             ? "4px solid #D65524"
             : "var(--props-variant-default-background-color)"};
         border-left: ${({ variant }) =>
           variant === "noactive"
             ? "4px solid #D65524"
             : "var(--props-variant-default-background-color)"};
         border-right: ${({ variant }) =>
           variant === "noactive"
             ? "4px solid #D65524"
             : "var(--props-variant-default-background-color)"};
         border-bottom: ${({ variant }) =>
           variant === "noactive"
             ? "4px solid #D65524"
             : "var(--props-variant-default-background-color)"};

${"" /* border-radius: 255px 15px 225px 15px/15px 225px 15px 255px; */}
 ${"" /* animation: mymove 3s cubic-bezier(.98,.13,.96,.34) infinite; */}
                      @keyframes mymove {
  50% {border-bottom: 4px solid #D65524;}  
}
            

$cyan: #60daaa;
$red: #f45e61;
${
  "" /* box-shadow: 4px 4px 15px 2px rgba(125, 126, 127, 0.42),
           -3px -3px 12px 2px rgba(255, 255, 255, 0.93), inset 0px -4px 0px 0px #D65524; */
}
box-shadow:  ${({ variant }) =>
         variant === "active"
           ? ` 4px 4px 15px 2px rgba(125, 126, 127, 0.42),
           -3px -3px 12px 2px rgba(255, 255, 255, 0.93), inset 0px -4px 0px 0px #D65524;`
           : ` 4px 4px 15px 2px rgba(125, 126, 127, 0.42),
           -3px -3px 12px 2px rgba(255, 255, 255, 0.93);`};
border-radius: 1px;
border-bottom-left-radius: 0px;
border-bottom-right-radius: 0px;

           overflow: hidden;
           
${"" /* inset 0px -3px 0px 0px #D65524 */}
transition: box-shadow 0.25s cubic-bezier(.98,.13,.96,.34) 0.75s, 
         background-color .5s  ease 0s ;
           

 
            position: relative;
  vertical-align: middle; 
  ${"" /* transition: color 0.25s; */}

  ${"" /* border-radius: 3px; */}

 

  ${
    "" /* &::before,
  &::after {
    border: 2px solid transparent;
    border-radius: 10px;
    width: 0;
    height: 0;
  } */
  }

  &::before,
  &::after {
    ${'' /* border: 3px solid transparent; */}
    border: ${({ variant }) =>
      variant === "active"
        ? "3px solid transparent"
        : "none"};
    border-radius: 1px;
border-bottom-left-radius: 0px;
border-bottom-right-radius: 0px;
    
    ${"" /* border-radius: 3px; */}
    ${"" /* border-radius: 3px; */}
    width: 0;
    height: 0;
  }

   ${
     "" /* &::before {
    border-bottom: 3px solid #D65524;
    ${'' /* transform-origin: 20% 40%; */
   }
    width: 0%;
  }  */}

&::before {
    bottom: 0;
    right: 0;
  }

  ${"" /* // And this the bottom & left borders (expands left, then up) */}
  &::after {
    top: 0;
    left: 0;
  }
  
  &:hover {
    ${"" /* color: #60daaa; */}
    
           ${"" /* transform-origin: center; */}
           ${"" /* , inset 0px -3px 0px 0px #F8F8F9 */}
    
  }




  ${"" /* ${"" /* // Hover styles */}
  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
    
    
  
    
  } */}

  
&:hover::before {
    
    
    border-top-color: #D65524; 
    border-right-color: #D65524;
    transition:
      height .5s ease , // Delay And then height 
      width .5s ease  .5s ,// Width expands first
      border-top-color 0s .5s;
  }

  

  &:hover::after {
    
    border-bottom-color: #D65524; // Make borders visible
    border-left-color: #D65524;
    
    
      transition:
      border-left-color 0s 1s,
      height .5s ease 1s, // And finally height
      border-bottom-color 0s  1.5s, // Wait for ::before to finish before showing border
      width .5s ease 1.5s; // And then exanding width
  }
     

  



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

OptionLink.displayName = "OptionLink";
