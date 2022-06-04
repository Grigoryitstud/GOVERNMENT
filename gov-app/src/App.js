import React from 'react';
import './App.css';
import Header from './Header/Header';
import Government from './Government/Government';
import MainPage from './MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DemPage from './DemPage/DemPage';
import MistoPage from './MistoPage/MistoPage'

const App = () => {
  return (
    <BrowserRouter>
      <div className='body'>
        <Header />
        <Government />
        <div className='main-styles'>
          <Routes>
            <Route path='' element={<MainPage />} />
            <Route path='/DemPage' element={<DemPage />} />
            <Route path='/MistoPage' element={<MistoPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
