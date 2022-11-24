import "../styles/globals.scss";
import "../styles/All.module.scss";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps}/>
      <Footer/>
    </>
  )
};
