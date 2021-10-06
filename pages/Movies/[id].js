import List from '../../comps/MovieList'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Movies.module.css'
import Navbar from '../../comps/Navbar'
import Mobnav from '../../comps/Mobnav'



export const getStaticPaths = async () => {
  const Movies = [];
  const todos = List.Movies;
  for (let id in todos) {
    Movies.push({ id ,...todos[id] });
  }
  const Data = Movies.reverse();

  // map data to an array of path objects with params (id)
  const paths = Data.map(movie => {
    return {
      params: { id: movie.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const Movies = [];
  const todos = List.Movies;
  for (let id in todos) {
    Movies.push({ id ,...todos[id] });
  }
  const Data = Movies.reverse();
 let obj = Data.find(movie => movie.id === id);

  return {
    props: { Movie: obj }
  }
}

const Details = ({ Movie }) => {
  const router = useRouter()


  function Video(link){
    localStorage.setItem("Link" , link)
    router.push('/Video/');
  }


  return (
    <div>
    <Navbar />
    <Mobnav />
    <Head>
        <title>{Movie.Name}</title>
        <meta name="keywords" content="Movies"/>
      </Head>
<div className={styles.info}>
<h2>h</h2>
      <img src={Movie.Poster} alt="site logo" width={200} height={300} />

  <div className={styles.info_detail}>
  <h1 className={styles.title}>{Movie.Name}</h1>
      <h3>{Movie.Plot}</h3>
      <h3>Actors :- {Movie.Actors}</h3>
      <h3>Director :- {Movie.Director}</h3>
      <span>{Movie.Genre}</span>
      <span>{Movie.ImdbRating}</span>
      <span>{Movie.Language}</span>
      <span>{Movie.Ott}</span>
      <span>{Movie.Released}</span>
      <span>{Movie.Runtime}</span>
      <span>{Movie.Showtype}</span>
      <span>{Movie.Size}</span>
     
      <span>{Movie.Type}</span>
      <span>{Movie.imdbID}</span>


      <div className={styles.btns}>

    <button  onClick={() => Video(Movie.Slink)}>
  Play
  </button>
  <button><a href={Movie.Dlink}>
  Download
  </a></button>

      </div>
   
  </div>

</div>

  
        <iframe id="iframe-embed" width="100%" height="800" scrolling="no"
              frameborder="0" src={Movie.Slink}
              allowfullscreen="true" webkitallowfullscreen="true"
              mozallowfullscreen="true" name=
              "iframe-embed"></iframe>
  
      
    </div>
  );
}

export default Details;