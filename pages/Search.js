import styles from '../styles/Ninjas.module.css'
import react , { useEffect , useState , useMemo  } from "react";
import Link from 'next/link'
import List from '../comps/MovieList'
import { useRouter } from 'next/router'



const Ninjas = ({ ninjas }) => {
  const [moviesData, setmoviesData] = useState([])
  const [input, setinput] = useState("")

  useEffect(() => {
    
  const Movies = [];
  const todos = List.Movies;
  for (let id in todos) {
    Movies.push({ id ,...todos[id] });
  }
  const Data = Movies.reverse();
  setmoviesData(Data)

  }, [])

  const [search, setSearch] = useState("");

    const countries = useMemo(() => {
        if (!search) return moviesData;

        return moviesData.filter((country) => {
            return (
                country.Name.toLowerCase().includes(search.toLowerCase()) ||
                country.Type.toLowerCase().includes(search.toLowerCase())
            );
        });
    }, [search, moviesData]);

  return (
  
    <div className="row justify-content-center mt-4">
<h2>.</h2>  
   

    <div className="col-lg-6 text-center">
        <div className="row">
            <div className="col-12">
                <div className="input-group mb-3">
                    <div className="input-group-append">
                        <span
                            className="input-group-text"
                            id="basic-addon1"
                        >
                        </span>
                    </div>
                    <input
                        type="text"
                        className={styles.search}
                        placeholder="Search Movie"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className="col-12">
                <div className={styles.All_movies}>

                    {countries.map((country, idx) => (
                        <CountryListItem {...country} key={idx} />
                    ))}
                    </div>
            </div>
        </div>
    </div>
</div>
  );
}



const CountryListItem = ({ Name, Type , Poster , id}) => {
  const router = useRouter()

  function Visit(id){
    router.push('/Movies/'+id);
  }   

  return (
    



    
    <div key={id} className={styles.Movie_block} onClick={() => Visit(id)}>
        <img  src={Poster} alt={ Name }/>
        <a className={styles.single}>
        <h3>{ Name }</h3>
        </a>
    </div>


  );
};


 
export default Ninjas;