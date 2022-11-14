import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: 'Epilogue', sans-serif;
}
h1, h2, h3, h4, h5, h6{
    font-weight: 800;
}
p{
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    font-style: normal;
}

`