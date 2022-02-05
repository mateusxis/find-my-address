import Head from 'next/head';
import { Provider } from 'react-redux';

import store from '../src/app/store';
import { GlobalStyle } from '../src/theme/GlobalStyle';

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Head>
      <title>Buscar meu endereço</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Buscar meu endereço" />
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
);

export default MyApp;
