import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>KodingNow</title>
        <meta
          name="description"
          content="Kami melayani pembuatan berbagai jenis website dan aplikasi android. Mulai dari toko online, website perusahaan, website pemerintah, online learning, landing page, web application, website pribadi, dan website lainnya sesuai pesanan Anda."
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
