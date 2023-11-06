// Core
import Head from "next/head";
import { type FC } from "react";
import { type AppProps } from "next/app";

// Vendors
import { ThemeProvider, createGlobalStyle } from "styled-components";

const defaultTheme = {
  name: "light",
  font: {
    family: "'CabinetGrotesk', sans-serif",
    size: {
      "extra-small": 0.72,
      small: 0.8,
      medium: 0.875,
      large: 1.125,
      "extra-large": 1.3125,
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  radius: {
    "extra-small": 0.5,
    small: 0.75,
    medium: 1,
    large: 2,
    "extra-large": 4,
  },
  transition: 200,
  spaces: {
    "extra-small": 0.5,
    small: 0.75,
    medium: 1,
    large: 2,
    "extra-large": 4,
  },
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    light: "#FFFFFF",
    dark: "#000000",
    primary: "#EC4C3A",
    secondary: "#f7f7f7",
    grey: "#E1E1E1",
    danger: "#CF2030",
    warning: "#FFCC00",
    success: "#66D66E",
    border: "#e1e1e1",
  },
};

const GlobalStyle = createGlobalStyle<{ theme: {} }>`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, input, select, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  button {
    -webkit-appearance: none;
    background-color: transparent;
    color: initial;
  }
  
  
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a { text-decoration: none; }


  html {
    font-size: 16px;
    
  }
  
  html, body {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-scroll-behavior: smooth;
    -moz-scroll-behavior: smooth;
    -ms-scroll-behavior: smooth;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
    font-style: normal;
  }
    
  h1 {
    font-size: 36px;
    line-height: 42px;
  }

  h2 {
    font-size: 32px;
    line-height: 38px;
  }

  h3 {
    font-size: 28px;
    line-height: 34px;
  }

  h4 {
    font-size: 24px;
    line-height: 30px;
  }

  h5 {
    font-size: 20px;
    line-height: 26px;
  }

  h6 {
    font-size: 16px;
    line-height: 22px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

`;

type App = AppProps<{} | undefined> & {};

const App = ({ Component, pageProps, router }: App) => {
  // Return the page flow
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component key={router["route"]} {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
