import React from 'react';
import './App.css';
import Header from './Header/Header';
import States from './States/States';
import Towers from './Towers/Towers';
import Cities from './Cities/Cities';
import Democracy from './Democracy/Democracy';
import Government from './Government/Government';

function App() {
  return (
    <div className='body'>
        <Header />
        <Government />
      <div className='main-styles'>
        <Democracy />
        <Cities />
        <Towers />
        <States />
      </div>
    </div>
  );
}

export default App;
