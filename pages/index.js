import Head from "next/head";
import IndexProduct from "../components/IndexProduct";

export default function Index() {
  return (
    <>
      <Head>
        <title>Rosok.com | Tempat jual beli barang rosok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexProduct title="Barang Terbaru" />
    </>
  );
}
