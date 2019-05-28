import { createGlobalStyle } from 'styled-components';

import ProximaNovaReg from '../fonts/ProximaNova-Reg.ttf';
import ProximaNovaBold from '../fonts/ProximaNova-Bold.ttf';
import LinetoBrown from '../fonts/lineto-brown-regular.ttf';
import LinetoBrownBold from '../fonts/lineto-brown-bold.ttf';
import LinetoBrownItalic from '../fonts/lineto-brown-italic.ttf';
import LinetoBrownBoldItalic from '../fonts/lineto-brown-boldItalic.ttf';
import LinetoBrownLight from '../fonts/lineto-brown-light.ttf';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}

@font-face {
    font-family: 'proxima-nova';
    src: url(${ProximaNovaReg});
}

@font-face {
    font-family: 'proxima-nova';
    src: url(${ProximaNovaBold});
    font-weight: bold;
}

@font-face {
    font-family: 'lineto-brown';
    src: url(${LinetoBrown});
}

@font-face {
    font-family: 'lineto-brown';
    src: url(${LinetoBrownBold});
    font-weight: bold;
}

@font-face {
    font-family: 'lineto-brown';
    src: url(${LinetoBrownBoldItalic});
    font-style: italic;
    font-weight: bold;
}

@font-face {
    font-family: 'lineto-brown';
    src: url(${LinetoBrownItalic});
    font-style: italic;
}

@font-face {
    font-family: 'lineto-brown',
    src: url(${LinetoBrownLight});
    font-weight: 300;
}

body {
    background-color: #1D2033;
    color: #fff;
    font-family: 'proxima-nova', sans-serif;
    margin: 0;
    padding: 0;
}
`;

export default GlobalStyle;