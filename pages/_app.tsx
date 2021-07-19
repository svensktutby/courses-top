import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Next Top App</title>
        <link key={1} rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
