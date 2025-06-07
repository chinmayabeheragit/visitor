import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Text from './pages/Text';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function App() {

  return(
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/test" element={<Text />} />
     </Routes>
    </>
  )

}

export default App;
