import Footer from "./Footer"
import Navbar from "./Navbar"
import Head from 'next/head'
import Mobnav from "./Mobnav";

const Layout = ({ children }) => {
  return (
    <>
    <Head>
  <link rel='manifest' href='/manifest.json' />
  <meta name="theme-color" content="orangered" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"></link>

</Head>
    <div className="content">
 
      <Navbar />
  
  <Mobnav />

  
      { children }
      <Footer />
    </div>
    </>
  );
}
 
export default Layout;