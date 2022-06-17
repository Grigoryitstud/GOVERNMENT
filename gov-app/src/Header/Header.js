import logo from '../img/logo.jpg';
import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={s.header}>
      
        <div className={s.header__inner}>
          
          <div className={s.header__logo}>
            <img src={logo} alt="" />
          </div>

          <nav className={s.nav}>
            <NavLink to='/GOVERNMENT' className = { navData => navData.isActive ? s.active : s.item }>ГЛАВНАЯ</NavLink>
            <NavLink to='/DemPage' className = { navData => navData.isActive ? s.active : s.item }>ДЕМОКРАТИЯ</NavLink>
            <NavLink to='/MistoPage' className = { navData => navData.isActive ? s.active : s.item }>МЯСТЭЧКИ</NavLink>
            <NavLink to='/GovePage' className = { navData => navData.isActive ? s.active : s.item }>Правительство</NavLink>
          </nav>
        
      </div>
    </header>
  );
}

export default Header;