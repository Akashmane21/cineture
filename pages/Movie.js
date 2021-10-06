import styles from '../styles/Ninjas.module.css'
import react , { useEffect , useState } from "react";
import Link from 'next/link'
import List from '../comps/MovieList'
import { useRouter } from 'next/router'



const Ninjas = ({ ninjas }) => {
  const router = useRouter()
  const [moviesData, setmoviesData] = useState([])
  const [input, setinput] = useState("")

  useEffect(() => {
    
  const Movies = [];
  const todos = List.Movies;
  for (let id in todos) {
    Movies.push({ id ,...todos[id] });
  }
  const Data = Movies.reverse();
  let Series = Data.filter(movie => movie.Showtype === "Movie");

  setmoviesData(Series)

  }, [])

  function Visit(id){
    router.push('/Movies/'+id);
  }   


  return (
    <div>

      <h1>All Movies</h1>
      <div className={styles.All_movies}>

        {moviesData.map(ninja => (
            
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