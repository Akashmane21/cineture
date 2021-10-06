import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import { useState , useEffect } from "react";

import styles from '../styles/Home.module.css'

const Navbar = () => {
  const [Routename, setRoutename] = useState("Home")
  const router = useRouter()
  useEffect(() => {
 
  }, [])

 

  return (
    <div className={styles.Header}>
      <div className={styles.logo} >
        <img src="/Cineture_logo.png" alt="site logo"  />
        <h3>Cineture</h3>
      </div>
   
      <div className={styles.links}>

          <Link href="/" ><a className={Routename ==="Home" ? styles.active : styles.notactive} onClick={ () => setRoutename("Home")}>Home</a></Link>
          <Link href="/Series"><a className={Routename ==="series" ? styles.active : styles.notactive} onClick={ () =>setRoutename("series")}>TV Shows</a></Link>
          <Link href="/Movie/"><a className={Routename ==="movies" ? styles.active : styles.notactive} onClick={ () =>setRoutename("movies")}>Movies</a></Link>
          <Link href="/Movies/"><a className={Routename ==="wishlist" ? styles.active : styles.notactive} onClick={ () =>setRoutename("wishlist")}>My Stuff</a></Link>
          <Link href="/Search/"><a className={Routename ==="search" ? styles.active : styles.notactive} onClick={ () =>setRoutename("search")}>Search</a></Link>
          <Link href="/about/"><a className={Routename ==="About" ? styles.active : styles.notactive} onClick={ () =>setRoutename("About")}>About</a></Link>

      </div>
    </div>
  );
}
 
export default Navbar;