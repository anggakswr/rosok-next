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
        <div className="p-2">
          {/* product image */}
          <div
            className="w-48 h-48 bg-yellow-500 bg-cover bg-center mx-auto"
            style={{ backgroundImage: `url("/img/1.jpg")` }}
          ></div>

          {/* product name */}
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="p-2">
          {/* product image */}
          <div
            className="w-48 h-48 bg-yellow-500 bg-cover bg-center mx-auto"
            style={{ backgroundImage: `url("/img/2.jpg")` }}
          ></div>

          {/* product name */}
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="p-2">
          {/* product image */}
          <div
            className="w-48 h-48 bg-yellow-500 bg-cover bg-center mx-auto"
            style={{ backgroundImage: `url("/img/3.jpg")` }}
          ></div>

          {/* product name */}
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="p-2">
          {/* product image */}
          <div
            className="w-48 h-48 bg-yellow-500 bg-cover bg-center mx-auto"
            style={{ backgroundImage: `url("/img/4.jpg")` }}
          ></div>

          {/* product name */}
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="p-2">
          {/* product image */}
          <div
            className="w-48 h-48 bg-yellow-500 bg-cover bg-center mx-auto"
            style={{ backgroundImage: `url("/img/5.jpg")` }}
          ></div>

          {/* product name */}
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}
