import Navbar from "./Navbar";
import './home.css'
import {styles} from '../styles'
import 'animate.css'
import { motion } from "framer-motion";
import developer from '../assets/developer.svg'




const Home = () => {
    return (
        <>
     <Navbar />
    <section className='hero flex flex-wrap justify-items-center
'>
      <div className={`${styles.paddingX} mt-16 mx-auto  sm:mt-32 md:mt-36 lg:mt-36  xl:mt-36 2xl:mt-48`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          hi, i am <span className="headtext" >
          Deen</span></h1>
         
          <p>i develop web application and<br className='sm: block: hidden'/> 3d visuals Lorem, ipsum dolor sit<br className='sm:block hidden'/> amet consectetur adipisicing elit. Dolores, quis! </p>
        </div>
      
       </div>
       
      
    
      <img src={developer} className="mt-32 object-cover mx-auto h-80 lg:mt-40 xl:h-96 2xl:h-max" alt="developer-image"/>
      
   
    </section>
    </>
  
    )
}

export default Home;