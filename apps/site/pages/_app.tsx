import { AppProps } from 'next/app';
import './styles.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="font-text box-border">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default App;
