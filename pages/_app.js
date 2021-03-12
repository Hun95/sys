import '../global/reset.css';
import { Global } from '../global/Global';
import { AppProvider } from '../context/context';
import { PriceProvider } from '../context/PriceContext';
import { ProjectProvider } from '../context/ProjectContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
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
