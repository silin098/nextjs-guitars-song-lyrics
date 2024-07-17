import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className} max-w-screen-xl	 mx-auto`}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
