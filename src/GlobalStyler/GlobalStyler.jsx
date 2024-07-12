import { createGlobalStyle } from "styled-components";

export const GlobalStyler = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        scroll-behavior: smooth;
        box-sizing: border-box;
    }

    body{
        font-family:'Nunito', Arial, Helvetica, sans-serif;
    }
`;