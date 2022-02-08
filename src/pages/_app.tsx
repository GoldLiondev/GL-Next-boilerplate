import React, { useEffect } from "react";
import NProgress from "nprogress";
// next
import type { AppProps } from "next/app";
import { Router } from "next/router";
// hooks
import useDarkMode from "use-dark-mode";
// component
import { LoadingScreen } from "components/Loading";
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
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// style
import { GlobalStyle } from "theme/global.state";
// themes
import { defaultTheme, darkTheme } from "theme";
// ----------------------------------------------------------------------

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function APP({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  const darkMode = useDarkMode(true);
  const themeMode = darkMode.value ? darkTheme : defaultTheme;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={themeMode}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <ApolloProvider client={apolloClient}>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </ApolloProvider>
        </PersistGate>
        <GlobalStyle />
      </ThemeProvider>
    </ReduxProvider>
  );
}
export default APP;
