import contact from '../assets/contact.svg'
import { useState, useRef } from 'react';

const Contact = () => {
    const formRef = useRef();
    const[form, setform] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setloading] = useState(false);
    const handleChange = (e) => {}
    const handleSubmit = (e) => {}

    return (
    <div>
         <img src={contact} alt='contact-svg'/>
        <div>
       

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
            <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='your email'
                />
            </label>

            <label>
                <textarea
                row='7'
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