import ds2 from '../../public/myart/ds2.jpg';
import ds3 from '../../public/myart/quick_sketch.jpg';
import ds4 from '../../public/myart/shgv2.jpg';
import ds5 from '../../public/myart/siri-wild_hunt.jpg';
import reading from '../assets/reading.svg'
import drawing from '../assets/drawing.svg'
import artist from '../assets/artist.svg'
import './hobbies.css';
import { styles } from '../styles';




        const Hobbies =() => {
                return(<>
                <div className='hobbie'>
                        <h1 className={styles.heroHeadText}><span className='highlight'>Paintings</span></h1>
                        <div className='about-me'>
                                <img className='svg-icon' src={artist}/>
                                <p className={`${styles.heroSubText}`}>I have been interested in art since I was a child,
                                 and painting has always been a way for me to express my creativity and emotions. When 
                                 I'm not busy coding, you can often find me in my art studio, working on a new painting 
                                 or experimenting with different techniques and styles.

                               </p>
                        </div>
                        <div className='work'>
                        <h1 className={styles.heroHeadText}>My <span className='highlight'>work</span> </h1>
                        <div className="gallery">
                              <img src={ds2} alt="art"/>
                              <img src={ds4} alt="art"/>
                              <img src={ds3} alt="art"/>
                              <img src={ds5} alt="art"/>

                        </div>
                        </div>
                       
                       
                        <div className='reading-section'>
                        <h1 className={styles.heroHeadText}><span className='highlight'>Reading</span></h1>
                                <div className='reading'>
                              
                                <img className='svg-icon' src={reading} alt='reading-icon'/>
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