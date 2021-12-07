import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Info from './pages/Info';
import InfoNegara from './components/InfoNegara';
import { Routes, Route} from 'react-router-dom';

import './styles.css';
import Bantal from './pages/Bantal';
import Kayu from './pages/Kayu';
import More from './pages/More';
import Less from './pages/Less';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/info" element={<Info />} /> 
      <Route path="/bantal" element={<Bantal />} />
      <Route path="/kayu" element={<Kayu />} />
      <Route path="/more" element={<More />} /> 
      <Route path="/less" element={<Less />} /> 
        <Route path=":iso-3166" element={<InfoNegara/>}></Route>
    </Routes>
  );
}

export default App;
