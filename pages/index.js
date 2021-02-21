import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <div className="px-32 py-3">
      <Head>
        <title>Rosok.com | Tempat jual beli barang rosok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-evenly">
        <div className="bg-red-500">asd</div>
        <div className="bg-red-500">asd</div>
        <div className="bg-red-500">asd</div>
        <div className="bg-red-500">asd</div>
        <div className="bg-red-500">asd</div>
      </div>
    </div>
  );
}
