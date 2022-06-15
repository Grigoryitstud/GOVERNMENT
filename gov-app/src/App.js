import React from 'react';
import './App.css';
import Header from './Header/Header';
import Government from './Government/Government';
import MainPage from './MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DemPage from './DemPage/DemPage';
import MistoPage from './MistoPage/MistoPage'
import GovePage from './GovePage/GovePage';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='body'>
        <Header />
        <Government posts={props.posts} />
        <div className='main-styles'>
          <Routes>
            <Route path='/GOVERNMENT' element={<MainPage />} />
            <Route path='/DemPage' element={<DemPage honest={props.honest} victory={props.victory} happiness={props.happiness} school={props.school} medicine={props.medicine} salary={props.salary}/>} />
            <Route path='/MistoPage' element={<MistoPage />} />
            <Route path='/GovePage' element={<GovePage ministers={props.ministers}  />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

