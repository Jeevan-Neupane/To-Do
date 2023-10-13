import { createGlobalStyle } from "styled-components";
import { mobile,smallMobile } from "./mediaQueries";
const GlobalStyle = createGlobalStyle`



*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;
    list-style:none;
    text-decoration: none;
   }

html{
  font-size:62.5%;
  ${mobile({
  fontSize: "55%"
})}
  ${smallMobile({
  fontSize: "50%"
})}
}
body{
background-color:${({ theme }) => theme.backGround};
color:${({ theme }) => theme.primaryText};



}


`

export default GlobalStyle;