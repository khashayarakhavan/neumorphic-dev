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
  justify-content: flex-end;
  
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  
`;

OptionLink.displayName = 'OptionLink';
