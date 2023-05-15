import contact from '../assets/contact.svg'
import { useState, useRef } from 'react';
import {styles} from '../styles';
import '../index.css'

const Contact = () => {
    const formRef = useRef();
    const[form, setform] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setloading] = useState(false);
    const handleChange = (e) => {
        const{name, value}=e.target;
        setform((prevState) => ({
            ...prevState,
            [name]:value,
        }))
    }
    const handleSubmit = (e) => {}

    return (

<div className='profile'>



<img className='svg-img3' src={contact} alt='contact-svg'/>
 
        

<div className='profile-details'>
       
<p className={styles.heroSubText}>Get in touch</p>
<h3 className={styles.heroHeadText}><span className='highlight'>Contact</span></h3>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        >
            <label>
                <span className='label-text'>your name</span>
                <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='whats your name'
                />
            </label>

            <label>
                <span className='label-text'>your email</span>
            <input
                
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='your email'
                />
            </label>

            <label>
                <span className='label-text'> your message</span>
                <textarea
                rows={9}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='what do u want to say'
                />
       
            </label>

            <button
            type='submit'
            >{ loading ? 'sending...' : 'send' }</button>

        </form>
        </div>




        </div>
        
    
    
    )
}

export default Contact;