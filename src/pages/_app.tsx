import React, { useEffect } from "react";
import NProgress from "nprogress";
// next
import type { AppProps } from "next/app";
import { Router } from "next/router";
// component
import { LoadingScreen } from "components/Loading";
// layout
import AppLayout from "layouts/app-layout";
// apollo setting
import { useApollo } from "api/configureClient";
// redux
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";
// context providers
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";
// Import Swiper styles
import { defaultTheme } from "theme";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GlobalStyle } from "theme/global.state";
// ----------------------------------------------------------------------

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function WareHouseApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={defaultTheme}>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
            <GlobalStyle />
          </ThemeProvider>
        </ApolloProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
export default WareHouseApp;
