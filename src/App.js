import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import React from 'react';



 import {
   Routes,
   Route,
 } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element= {<Home />} /> 
          <Route path='/cart' element= {<Cart />} />  
      </Routes>
    </div>
  );
}

export default App;
