import contact from '../assets/contact.svg'
import { useState, useRef } from 'react';
import {styles} from '../styles';
import './contact.css'

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

    <div className='contact-page'>


<div className='icon-svg'>
<img src={contact} alt='contact-svg'/>
</div>
         
        

<div className='icon-svg'>
       
<p className={styles.heroSubText}>Get in touch</p>
<h3 className={styles.heroHeadText}>Contact</h3>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        >
            <label>
                <span>your name</span>
                <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='whats your name'
                />
            </label>

            <label>
                <span>your email</span>
            <input
                
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='your email'
                />
            </label>

            <label>
                <span> your message</span>
                <textarea
                rows={4}
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