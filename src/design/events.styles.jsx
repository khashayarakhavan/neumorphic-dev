import styled from "styled-components";
import {background_change} from './motions.styles';
import colors from './colors';

export const OnHover_palePink = styled.div`
    width: 60px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    &:hover {
      background-color: ${colors.palePink};
    }
    animation: ${background_change(colors.palePink)} 3s  2s ;
    z-index: -1;
`;

export const OnHover_paleYellow = styled.div`
  width: 60px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;

  &:hover {
    background-color: ${colors.paleYellow};
  }
  animation: ${background_change(colors.paleYellow)} 3s 3.5s;
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
    background-color: ${colors.paleBlue};
    
    }
    animation: ${background_change(colors.paleBlue)} 3s  5s  ;
    ${"" /* position: abosolute; */}
    z-index: -1;
    
         }
`;



