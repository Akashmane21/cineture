import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import { useState , useEffect } from "react";

import styles from '../styles/Home.module.css'

const Mobnav = () => {
  const [Routename, setRoutename] = useState("Home")
  const router = useRouter()
  useEffect(() => {
 
  }, [])

 

  return (
      <div className={styles.mobnav}>
      
      <Link href="/" >
      <a className={Routename ==="Home" ? styles.mobactive : styles.notmobactive} onClick={ () => setRoutename("Home")}><i class="fas fa-house-damage"></i></a></Link>
          <Link href="/Series">
          <a className={Routename ==="movies" ? styles.mobactive : styles.notmobactive} onClick={ () =>setRoutename("movies")}><i class="fas fa-video"></i></a></Link>
          <Link href="/Search/">
          <a className={Routename ==="search" ? styles.mobactive : styles.notmobactive} onClick={ () =>setRoutename("search")}><i class="fas fa-search"></i></a></Link>
          <Link href="/about/"><a className={Routename ==="wishlist" ? styles.mobactive : styles.notmobactive} onClick={ () =>setRoutename("wishlist")}><i class="fas fa-user-tag"></i></a></Link>


      </div>
     
  );
}
 
export default Mobnav;