import Link from 'next/link'
import { useRouter } from "next/router";
import { useState , useEffect } from "react";
import styles from '../styles/Ninjas.module.css'


const Ott = () => {
  const [Routename, setRoutename] = useState("Home")
  const router = useRouter()
  useEffect(() => {
 
  }, [])

 

  return (
    <div className={styles.Ott}>
    

    
      <img style={styles.poster} src= 'https://assets.brand.microsites.netflix.io/assets/fbd0c908-b388-11e7-9274-06c476b5c346_cm_800w.png?v=30' alt=" Img"  />
    






<img style={styles.poster} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEy6L8LTn5nCCVxFTI_xQmQGmkjIdclcV-1dOSqGycBkpK4Uj4E5eJKShX0Zsf4KL2geM&usqp=CAU' alt=" Img"/> 
<img style={styles.poster} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFFExoZuLTXIPF_x-n3Cw6ApOemQzcuTleQ&usqp=CAU' alt=" Img" />





<img style={styles.poster} src='https://wallpaperaccess.com/full/342031.png' alt=" Img"/>





<img style={styles.poster} src='https://bpando.org//wp-content/uploads//2012/01/dc-comics-06.jpeg' alt=" " />


<img style={styles.poster} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzIYim8vB5KMeyfpee5LJfV438NgVPKMoJMg&usqp=CAU' alt=" Img" />
<img style={styles.poster} src='https://static10.tgstat.ru/channels/_0/13/134e8dc93b4f18f1cc924c99213e6834.jpg' alt=" Img" />




<img style={styles.poster} src='https://images-platform.99static.com/tcjZX7Xwd2UVKCxucdEjcPjKO5U=/0x0:1110x1110/500x500/top/smart/99designs-contests-attachments/111/111820/attachment_111820351' alt=" Img"  />





<img style={styles.poster} src='https://1000logos.net/wp-content/uploads/2016/10/Cartoon-Network-Logo.png' alt="Img"
 />



    </div>
  );
}
 
export default Ott;