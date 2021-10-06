import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import AllMovies from "../comps/AllMovies";
import Slider from "../comps/Slider";
import Ott from "../comps/Ott";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cineture | Home</title>
        <meta name="keywords" content="Movies" />
      </Head>
      <div>
        {/* <Slider /> */}
        <h1>.</h1>
        <Ott />
        <AllMovies />
        <Link href="/Movies/">
          <a className={styles.btn}>See All Movies</a>
        </Link>
      </div>
    </>
  );
}
