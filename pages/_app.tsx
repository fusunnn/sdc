import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

import SSRProvider from "react-bootstrap/SSRProvider";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <SSRProvider>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </SSRProvider>
  );
}

export default MyApp;
