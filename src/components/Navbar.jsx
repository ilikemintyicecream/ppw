import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone} from "react-icons/ai";
import {BiPaint} from 'react-icons/bi'
import{FaBars, FaTimes} from 'react-icons/fa'
import { motion } from 'framer-motion';

import './nav.css'



const Navbar = () => {
  const style = { color: "white", fontSize: "1.5em"}

  const [toggle, setToggle] = useState(false);

  const handleToggle=()=> {
    setToggle(!toggle);
  }

  
return(<>

 
 <motion.nav

 className={toggle? 'navbarExpanded' : 'NavbarItems'}>

 <h1 className='logo'>logo</h1>


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

 
 </motion.nav>
 </>

)}

export default Navbar;