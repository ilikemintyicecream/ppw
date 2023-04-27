import Navbar from "./Navbar";
import './home.css'
import {styles} from '../styles'
import RobotCanvas from "./canvas/index";


const Home = () => {
    return (
        <>
     <Navbar />
    <section className='hero'>
      <div className={`${styles.paddingX} absolute
       insert-0 top-[120px] max-w-7xl mx-auto flex
       flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          hi, i am <span className='text-[aqua]'>
          Deen</span></h1>
          <p>i develop web application and<br className='sm: block: hidden'/> 3d visuals Lorem, ipsum dolor sit<br className='sm:block hidden'/> amet consectetur adipisicing elit. Dolores, quis! </p>
        </div>
       </div>
       
       <div className="absolute xs:bottom-10
        bottom-32 w-full flex justify-center
        item-center">
       
       </div>
      
      
       
    </section>
    </>
  
    )
}

export default Home;