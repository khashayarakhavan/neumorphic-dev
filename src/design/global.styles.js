
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { createGlobalStyle , injectGlobal} from 'styled-components';

import { selectDarkMode } from "../redux/themes/themes.selectors";
import { fontSize } from "./sizes/index";

const GlobalStyle = createGlobalStyle`

 @font-face {
    font-family: "Transat-Bold";
    src: url("Fonts/Transat/Bold/transat_bold-webfont.woff") format('woff'),
	url("Fonts/Transat/Bold/transat_bold-webfont.woff2") format('woff2');
  }
 @font-face {
    font-family: "Helvetica-Bold";
    src: url("Fonts/Helvetica/Helvetica-Bold.ttf") format('ttf');
  }
 @font-face {
    font-family: "Helvetica";
    src: url("Fonts/Helvetica/Helvetica.ttf") format('ttf');
  }

${
  "" /* @font-face {
  font-family: "linea-basic-10";
  src:url("fonts/linea-basic-10.eot");
  src:url("fonts/linea-basic-10.eot?#iefix") format("embedded-opentype"),
    url("fonts/linea-basic-10.woff") format("woff"),
    url("fonts/linea-basic-10.ttf") format("truetype"),
    url("fonts/linea-basic-10.svg#linea-basic-10") format("svg");
  font-weight: normal;
  font-style: normal;

} */
}

 @font-face {
    font-family: "Transat-Light";
     src: url("Fonts/Transat/Light/transat_light-webfont.woff") format('woff'),
	url("Fonts/Transat/Light/transat_light-webfont.woff2") format('woff2');
  }

	body {
		${"" /* margin: 0px auto; */}
		${
      "" /* background: linear-gradient(-45deg, rgba(240,240,243,1), rgba(209,217,230,.61))   !important;  */
    }
		background: linear-gradient(45deg,  rgb(242, 243, 247) , rgba(229, 229, 229, 0.1) )   !important;  
		${
      "" /* background: linear-gradient(-95deg,  rgb(242, 243, 247) , rgba(209,217,230,.261) )   !important;   */
    }
		 ${"" /* background: #E5E5E5 !important; */}
		font-family: 'Open Sans Condensed';
		${"" /* padding: 0px 40px; */}
		${
      "" /* background-color: ${(props) => props.theme.background};
		color: ${(props) => props.theme && props.theme.foreground}; */
    }
		
		${
      "" /* background-color: ${(props) => props.darkMode ? 'black' : backgroundColor}; */
    }
		
		${"" /* color: ${(props) => props.darkMode ? 'white' : 'black'}; */}
		
		font-size: ${fontSize};
		
		@media screen and (max-width: 800px) {
			${"" /* padding: 10px; */}
		}
	}


	:root {
		--props-color-HAF: #145665 ;
		--color-primary: #ce0f45;
    --color-primary-light: #FF3366;
    --color-primary-dark: #BA265D;

    --color-grey-light-1: #faf9f9;
    --color-grey-light-2: #f4f2f2;
    --color-grey-light-3: #f0eeee;
    --color-grey-light-4: #ccc;

    --color-grey-dark: #999;
    --color-grey-dark-2: #777;
    --color-grey-dark-3: #333;

    --shadow-dark: 0 2rem 6rem rgba(0,0,0, .3);
    --shadow-light: 0 2rem 5rem rgba(0,0,0, .05);

    --line: 3px solid var(--color-grey-light-2);



		$color-white: #fff;
$color-black: #000;

--color-primary: #c69963;
$color-primary-light: #f7bf7b;
$color-primary-dark: #B28451;

$color-secondary: #101d2c;
$color-secondary-light: #2b4c72;
$color-secondary-dark: #0e1925;

$color-tertiary-light: #2998ff;
$color-tertiary-dark: #5643fa;

$color-primary-grey: rgba(252, 253, 253, 0.87);
$color-grey-light-1: #f9f7f6;
$color-grey-light-2: #aaa;
$color-grey-dark-1: #54483A;
$color-grey-dark: #54483A;
$color-grey-dark-2: #6D5D4B;
$color-grey-dark-3: #333;
	}



	a,
	a:link,
	a:hover {
		text-decoration: none;
		${"" /* color: ${(props) => props.theme.foreground }; */}
		
	}

	* {
		box-sizing: border-box;
		transition: background-color .3s ease-out;
		
	}
`;


const mapStateToProps = createStructuredSelector({
  darkMode: selectDarkMode,
});

export default connect(mapStateToProps)(GlobalStyle);
