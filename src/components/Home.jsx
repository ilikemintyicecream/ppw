import '../index.css'
import {styles} from '../styles'
import developer from '../assets/developer.svg'
import Type from "./Type";


const Home = () => {
    return (
    <>
   
    <section className='hero'>
      <div className={`section ${styles.paddingX}`}>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
          hi, i am <span className="headtext" >
          deen</span></h1>
          
          <p className={`${styles.heroSubText}`}>i am proficient in<span className="text-cyan-300"><Type /> </span> </p>
        </div>
       
      
       </div>
       
      
    
      <img src={developer} className="svg-img" alt="developer-image"/>
      
   
    </section>
   
    </>
  
    )
}

export default Home;