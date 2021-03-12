import '../global/reset.css';
import { Global } from '../global/Global';
import { AppProvider } from '../context/context';
import { PriceProvider } from '../context/PriceContext';
import { ProjectProvider } from '../context/ProjectContext';
import { ImageProvider } from '../context/ImageContext';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global />
      <AppProvider>
        <PriceProvider>
          <ProjectProvider>
            <ImageProvider>
              <Component {...pageProps} />
            </ImageProvider>
          </ProjectProvider>
        </PriceProvider>
      </AppProvider>
    </>
  );
}

export default MyApp;
