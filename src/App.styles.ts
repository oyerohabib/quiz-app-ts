import styled, { createGlobalStyle } from "styled-components";
import BgImage from "../src/images/bgimage.jpg";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  html {
    height: 100%;
  }
  body {
    background-image: url(${BgImage});
    background-size: 100% 100%;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: rgba(255, 0, 0, 0.8);
    font-size: 20px;
    font-weight: 700;
  }

  .score {
    color: rgba(255, 0, 0, 0.8);
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: "Archivo Black", sans-serif;
    background-image: linear-gradient(90deg, green, blue);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(2px, 2px, #0085a3);
    font-size: 50px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .end {
    cursor: pointer;
    background: linear-gradient(90deg, green, blue);
    border: 2px solid green;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
  }

  .start {
    max-width: 200px;
  }
`;
