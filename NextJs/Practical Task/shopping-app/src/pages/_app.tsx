import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Layout from "../../components/ui/Layout";
import { NextUIProvider } from "@nextui-org/react";
import allReducers from "@/reducer";

export default function App({ Component, pageProps }: AppProps) {
  const store = createStore(allReducers);
  return (
    <>
      <Provider store={store}>
        <NextUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </Provider>
    </>
  );
}
