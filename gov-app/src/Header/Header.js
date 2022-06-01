import logo from '../img/logo.jpg';
import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      
        <div className={s.header__inner}>
          
          <div className={s.header__logo}>
            <img src={logo} alt="" />
          </div>

          <nav className={s.nav}>
            <a className={s.nav__link} href="#">образование</a>
            <a className={s.nav__link} href="#">медицина</a>
            <a className={s.nav__link} href="#">полиция</a>
            <a className={s.nav__link} href="#">ЖКХ</a>
            <a className={s.nav__link} href="#">строительство</a>
          </nav>
        
      </div>
    </header>
  );
}

export default Header;