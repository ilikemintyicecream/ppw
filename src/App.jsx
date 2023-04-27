import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
 return (
  <>
<BrowserRouter>
<Routes>
 
<Route path='/' element={<Home/>} />

<Route path='/About' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>



</Routes>
</BrowserRouter>
</>
 )}

export default App;
