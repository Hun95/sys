import '../global/reset.css';
import { Global } from '../global/Global';
import { AppProvider } from '../context/context';
import { PriceProvider } from '../context/PriceContext';
import { ProjectProvider } from '../context/ProjectContext';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name='naver-site-verification'
          content='d8ef4132e83f3b80a9b924ce5dbc5e421b16e66a'
        />
        <meta name='theme-color' content='#003D8D' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Global />
      <AppProvider>
        <PriceProvider>
          <ProjectProvider>
            <Component {...pageProps} />
          </ProjectProvider>
        </PriceProvider>
      </AppProvider>
    </>
  );
}

export default MyApp;
