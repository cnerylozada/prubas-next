import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="p-4 flex-grow">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
