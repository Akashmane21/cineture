import styles from '../styles/Ninjas.module.css'
import react , { useEffect , useState } from "react";
import Link from 'next/link'
import List from './MovieList'
import { useRouter } from 'next/router'


const AllMovies = () => {
  const router = useRouter()
  const [MoviesData, setMoviesData] = useState([])


            useEffect(() => {
                const Movies = [];
                const todos = List.Movies;
                for (let id in todos) {
                Movies.push({ id ,...todos[id] });
                }
                const Data = Movies.reverse();
                let obj = Data.find((movie) => movie.Year === '2020');
                
                function isCherries(fruit) {
                  return fruit.Trend === 'True';
                }
                
                console.log(obj);

                setMoviesData(Data)
                console.log(obj);
            
            }, [])


  function Visit(id){
    router.push('/Movies/'+id);

  }   


  return (
    <div>
      {/* <h1>All Movies & Shows</h1> */}
      <div className={styles.All_movies}>

      {MoviesData ? MoviesData.map((ninja) => (
        
        <div key={ninja.id} className={styles.Movie_block} onClick={() => Visit(ninja.id)}>
              <img  src={ ninja.Poster } alt={ ninja.Name }/>
            {/* <a className={styles.single}> */}
              <h3>{ ninja.Name }</h3>
            {/* </a> */}
        </div>

      )) : ( " ")}
      </div>
    </div>
  );
}
 
export default AllMovies;