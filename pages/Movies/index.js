import styles from '../../styles/Ninjas.module.css'
import react , { useEffect , useState } from "react";
import Link from 'next/link'
import List from '../../comps/MovieList'
import { useRouter } from 'next/router'
import Navbar from '../../comps/Navbar';
import Mobnav from '../../comps/Mobnav';

export const getStaticProps = async () => {
 
  const Movies = [];
  const todos = List.Movies;
  for (let id in todos) {
    Movies.push({ id ,...todos[id] });
  }
  const Data = Movies.reverse();

  return {
    props: { ninjas: Data }
  }
}

const Ninjas = ({ ninjas }) => {
  const router = useRouter()

  function Visit(id){
    router.push('/Movies/'+id);

  }   


  return (
    <div>
    <Navbar />
    <Mobnav />
      <h1>All Movies & Shows</h1>
      <div className={styles.All_movies}>

      {ninjas.map(ninja => (
        
        <div key={ninja.id} className={styles.Movie_block} onClick={() => Visit(ninja.id)}>
              <img  src={ ninja.Poster } alt={ ninja.Name }/>
            <a className={styles.single}>
              <h3>{ ninja.Name }</h3>
            </a>
        </div>

      ))}
      </div>
    </div>
  );
}
 
export default Ninjas;