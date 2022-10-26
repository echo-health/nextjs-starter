import Head from "next/head";
import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import { theme, AppReset } from "@echo-health/design-system";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>LloydsDirect NextJS Starter</title>
        <meta name="description" content="Starter template for NextJS apps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
