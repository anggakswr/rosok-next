import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />

      <div className="px-3 md:px-32 py-3">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
