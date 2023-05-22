import ds2 from '../../public/myart/ds2.jpg';
import ds3 from '../../public/myart/quick_sketch.jpg';
import ds4 from '../../public/myart/shgv2.jpg';
import ds5 from '../../public/myart/siri-wild_hunt.jpg';
import reading from '../assets/reading.svg'
import artist from '../assets/artist.svg'
import '../index.css';
import { styles } from '../styles';




        const Hobbies =() => {
                return(<>
                
                

                <div>



                        <div className='profile'>
                        <img className='svg-img2' src={artist}/>
                        <div className='profile-details'>
                        <h2 className={styles.heroHeadText}><span className='highlight'>Paintings</span></h2>
                                <p className={` ${styles.heroSubText}`}>I have been interested in art since I was a child,
                                 and painting has always been a way for me to express my creativity and emotions. When 
                                 I'm not busy coding, you can often find me in my art studio, working on a new painting 
                                 or experimenting with different techniques and styles.

                               </p>
                               </div>
                        </div>




                        <div className='profile2'>
                        <h1 className={styles.heroHeadText}>My <span className='highlight'>work</span> </h1>
                        <div className='gallery'>
                              <img src={ds2} alt="art"/>
                              <img src={ds4} alt="art"/>
                              <img src={ds3} alt="art"/>
                              <img src={ds5} alt="art"/>

                        </div>
                        </div>
                       



                       
                        <div className='profile'>
                        <img className='svg-img2' src={reading} alt='reading-icon'/>
                                <div className='profile-details'>
                              
                        <h1 className={styles.heroHeadText}><span className='highlight'>Reading</span></h1>
                                <p className={`${styles.heroSubText}`}>I'm also an avid reader and love exploring new ideas through books. I enjoy a wide variety
                                         of genres, from classic literature to science fiction and fantasy. Reading allows me 
                                         to broaden my horizons, develop my critical thinking skills, and gain new perspectives
                                          on the world around me.</p>
                                          </div>

                        </div>



                        </div>
                        
                        </>
                );
        };

     


export default Hobbies;