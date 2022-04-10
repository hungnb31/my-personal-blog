import { AppProps } from 'next/app';
import '../styles/globals.sass';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
