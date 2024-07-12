import styled from "styled-components";

export const AppSyler = styled.section`
    display: flex;
    background-color: #45CB85;
    min-width: 100vw;
    min-height: 100vh;
    justify-content: center;
    align-items: center;


    & .container{
        width: 50vw;
        height: 50vh;
        background-color: #DCF8C6;
        border-radius: 20px;
    }

    & .content{
        display: flex;
        justify-content: center;
        margin: 40px;
    }

    & h1{
        font-size: 3.2em;
        line-height: 1.1;
    }
`;