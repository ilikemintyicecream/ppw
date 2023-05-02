import Navbar from "./Navbar";
import './home.css'
import {styles} from '../styles'
import developer from '../assets/developer.svg'
import Footer from "./Footer"; 
import Type from "./Type";

const style = {
  
}


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
          deen</span></h1>
          
          <p className={`${styles.heroSubText}`}>i am proficient in<span className="text-cyan-300"><Type /> </span> </p>
        </div>
       
      
       </div>
       
      
    
      <img src={developer} className="mt-32 object-cover mx-auto h-80 lg:mt-40 xl:h-96 2xl:h-max" alt="developer-image"/>
      
   
    </section>
     <Footer />
    </>
  
    )
}

export default Home;