import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone} from "react-icons/ai";
import {BiPaint} from 'react-icons/bi'
import{FaBars, FaTimes} from 'react-icons/fa'
import logo from '../assets/logoIcon.svg'


import './nav.css'



const Navbar = () => {
  const style = { color: "white", fontSize: "1.5em"}

  const [toggle, setToggle] = useState(false);

  const handleToggle=()=> {
    setToggle(!toggle);
  }

  
return(<>

 
 <nav

 className={toggle? 'navbarExpanded' : 'NavbarItems'}>

 <a className='logo' href="/"><img src={logo} alt='tech-logo' /></a>


 <ul className='links' >

  <li>
    
    <a className='NavLinks'  href="/">< AiOutlineHome/><div className='NavText'>Home</div></a>
  </li>
 </ul>
 <ul>
  <li>
    
    <a className='NavLinks' href="/About">< AiOutlineUser/><div className='NavText'>About</div></a>
  </li>
 </ul>
 <ul>
  <li>
    
    <a className='NavLinks' href="/Hobbies"><BiPaint/><div className='NavText'>Hobbies</div></a>
  </li>
 </ul>
 <ul>
  <li>
    
    <a className='NavLinks' href="/Contact">< AiOutlinePhone/><div className='NavText'>Contact</div></a>
  </li>
  
 </ul>
 

 
 <div className='toggle-icon' onClick={handleToggle}>
  {toggle ? <FaTimes/>:<FaBars/>}
 </div>

 
 </nav>
 </>

)}

export default Navbar;