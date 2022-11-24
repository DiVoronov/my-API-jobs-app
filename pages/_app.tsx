import "../styles/globals.scss";
import "../styles/All.module.scss";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head >
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" /> 
        <meta
          name="API"
          content="API for JobsLis - devdivoron@gmail.com"
        />
        <title>Jobs API</title>
      </Head>
      <Navbar/>
      <Component {...pageProps}/>
      <Footer/>
    </>
  )
};
