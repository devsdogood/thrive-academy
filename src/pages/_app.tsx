import "@styles/bootstrap.min.css";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "@components/wrappers/AppWrapper";
import "@styles/style.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>

  );
}
export default MyApp;
