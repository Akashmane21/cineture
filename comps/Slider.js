import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import AllMovies from '../comps/AllMovies'
import style from '../styles/Slider.module.scss'


export default function Slider() {
  return (
    <>
      <Head>
        <title>Cineture | Home</title>
        <meta name="keywords" content="Movies"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

      </Head>
      <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
  <div>

    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className={style.Slider}>

    <div className={style.info}>
      <h1>Antman</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat qui cum eligendi unde doloribus labore pariatur officiis eum tenetur modi.</p>
      <div className={style.btns}>

     <i class="fas fa-play"></i>
     <i class="fas fa-download"></i>
      </div>
    </div>
<div className={style.Image}>

      <img src="https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg" className="d-block w-100" alt="..." />
</div>
    </div>
    </div>
    <div className="carousel-item">
    <div className={style.Slider}>

    <div className={style.info}>
      <h1>Antman</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat qui cum eligendi unde doloribus labore pariatur officiis eum tenetur modi.</p>
      <div className={style.btns}>

     <i class="fas fa-play"></i>
     <i class="fas fa-download"></i>
      </div>
    </div>
<div className={style.Image}>

<img src="https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg" className="d-block w-100" alt="..." />
</div>
</div>  
  </div>

  <div className="carousel-item">
    <div className={style.Slider}>

    <div className={style.info}>
      <h1>Antman</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat qui cum eligendi unde doloribus labore pariatur officiis eum tenetur modi.</p>
      <div className={style.btns}>

     <i class="fas fa-play"></i>
     <i class="fas fa-download"></i>
      </div>
    </div>
<div className={style.Image}>

<img src="https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg" className="d-block w-100" alt="..." />
</div>
</div>  
  </div>
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>
  
      </div>
    </>
  )
}
