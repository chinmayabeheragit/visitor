import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Text from './pages/Text';


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
