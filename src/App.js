import './App.css';
import { useState, useEffect, useContext } from 'react';
import Hero from './components/Hero/Hero';
import Dropdown from './components/Dropdown/Dropdown';



function App() {
  
  return (
    <AppContextProvider>
      <div className='app'>
        <Hero />
        <Dropdown/>
      </div>
    </AppContextProvider>
  );
}

export default App;
