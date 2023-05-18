import contact from '../assets/contact.svg'
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import {styles} from '../styles';
import '../index.css'



const Contact = () => {
    const formRef = useRef();
    const[form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const{name, value}=e.target;
        setForm({...form, [name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service id',
            'template id',
            {
                from_name: form.name,
                to_name: 'deen',
                from_email: form.email,
                to_email: 'deenusaifi8851@gmail.com',
                message: form.message,
            },
            'public key'
        )
        .then(() => {
            setLoading(false);
            alert('Thank you, i will get back to you as soon as possible.');

            setForm({
                name: '',
                email: '',
                message: '',
            })
        },(error) => {
            setLoading(false)

            console.log(error);

            alert('something went wrong.')
        })
    }

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