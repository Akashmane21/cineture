import Layout from "../comps/Layout";
import "../styles/globals.css";
import NProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";
import Script from "next/script";

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-MEBVMT30N0"
      />
      <Script data-ad-client="ca-pub-7650197599014997"  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', 'G-MEBVMT30N0');
           
                `}
      </Script>

      
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
