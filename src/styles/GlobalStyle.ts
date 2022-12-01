import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
 
*{
    @font-face { font-family: Graphik; src: url('GraphikRegular.otf'); } 
     @font-face { font-family: Graphik; font-weight: bold; src: url('GraphikBold.otf');}
     @font-face { font-family: Graphik; font-weight: 600; src: url('GraphikSemibold.otf');;}

    --BLACK: #0B0720;
     --BACKGROUND: #F9F9F9;
     --GRAY:#B0BAC7;
     --BLUE:#4353FF;
     --SECONDARY:#BFC7FA;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Graphik;

}

`;
