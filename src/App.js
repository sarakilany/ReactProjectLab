import { Home } from './pages/home/Home';
import { About } from './pages/about/About'
import { Shop } from './pages/shop/Shop';
import { Product } from './pages/shop/Product';
import Navbar from './components/navbar/Navbar.js';
import { Count } from './components/counter/Count.js';
import './App.css';
import CounterBtn from './components/counter/CounterBtn.js';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Count />} />
          <Route path="/products/:id" element={<Product />} />

        </Routes>
      </BrowserRouter>



    </>
  );

}

export default App;
