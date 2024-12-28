import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Banner from './components/Banner/Banner';

function App() {

  return (
    <>
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Banner/>
    </div>
    </>
  );
}

export default App
