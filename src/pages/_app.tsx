import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Hooks from '../hooks';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Hooks>
        <Component {...pageProps} />
      </Hooks>

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default MyApp;
