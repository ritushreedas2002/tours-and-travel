
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Service from './Routes/Service';
import Contact from './Routes/Contact';
import {motion} from 'framer-motion';

function App() {
  return (
    <motion.div initial="hidden" animate="show" className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      
    </motion.div>
  );
}

export default App;
