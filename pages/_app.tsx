import "../styles/globals.css";
import type { AppProps } from "next/app";

import SSRProvider from "react-bootstrap/SSRProvider";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      {" "}
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
