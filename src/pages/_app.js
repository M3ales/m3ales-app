import '../styles/globals.css';
import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }) : JSX.Element {
  return (<Component {...pageProps} />
}

export default MyApp