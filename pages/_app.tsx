import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/globals.css";

import SSRProvider from "react-bootstrap/SSRProvider";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

import { Analytics } from "@vercel/analytics/react";

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
      <Analytics />
    </SSRProvider>
  );
}

export default MyApp;
