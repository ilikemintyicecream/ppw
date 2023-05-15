
import {styles} from '../styles';

import  Tilt  from 'react-parallax-tilt';
import '../index.css';

import clang from '../assets/clang.svg';
import python from '../assets/python.svg';
import javascript from '../assets/javascript.svg';
import react from '../assets/react.svg';
import nodejs from '../assets/nodejs.svg';
import django from '../assets/django.svg';
import mongodb from '../assets/mongodb.svg';
import tailwindcss from '../assets/tailwindcss.svg';
import git from '../assets/git.svg';
import linux from '../assets/linux.svg';
import about from '../assets/about.svg'



const About = () => {
    return(
   <>
   <div className='main'>

   <div className='profile'>
<img className='svg-img2' src={about} alt='my-photo'/>
<div className='profile-details'>
 
    <h2 className={styles.heroHeadText}>About <span className='highlight'>me ?</span></h2>
    
    <p className={styles.heroSubText}> Hello, and welcome to my website! My name is Deen, and I live in Delhi, India.

I am a passionate full-stack web developer with a love for creating innovative,
user-friendly websites.</p>
   </div>
   </div>

  

    
<div className='section-profile'>
<h1 className={styles.heroHeadText}><span className='highlight'>Languages</span> i use</h1>
<Tilt>
    <div className='tech'>
    <img className='icons' src={clang}/>
  <img className='icons' src={python}/>
  <img className='icons' src={javascript}/>
  <img className='icons' src={react}/>
  <img className='icons' src={nodejs}/>
  <img className='icons' src={django}/>
  <img className='icons' src={mongodb}/>
  <img className='icons' src={tailwindcss}/>
  <img className='icons' src={linux}/>
  <img className='icons' src={git}/>
  
  

  

    </div>
  
   

   

</Tilt>
</div>



</div>
   </>
)
}

export default About;