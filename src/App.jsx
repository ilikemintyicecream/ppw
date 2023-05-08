import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './components/Home';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
 return (
  <>
<BrowserRouter>
<Navbar />
<Routes>

<Route path='/' element={<Home/>} />

<Route path='/About' element={<About/>}/>
<Route path='/Hobbies' element={<Hobbies/>}/>

<Route path='/Contact' element={<Contact/>}/>


</Routes>
<Footer />
</BrowserRouter>
</>
 )}

export default App;
