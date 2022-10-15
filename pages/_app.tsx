import "../styles/globals.css";
import type { AppProps } from "next/app";

import SSRProvider from "react-bootstrap/SSRProvider";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </SSRProvider>
  );
}

export default MyApp;
