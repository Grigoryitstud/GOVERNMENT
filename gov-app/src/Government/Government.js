import React from 'react';
import s from './Government.module.css';

const Government = () => {
  return (
    <div className={s.intro}>

      <ul className={s.nav}>
        <li className={s.nav__link}>образование</li>
        <li className={s.nav__link} >медицина</li>
        <li className={s.nav__link} >полиция</li>
        <li className={s.nav__link} >ЖКХ</li>
        <li className={s.nav__link} >строительство</li>
        <li className={s.nav__link} >мид</li>
        <li className={s.nav__link} >пресса</li>
        <li className={s.nav__link} >культура</li>
        <li className={s.nav__link} >природа</li>
        <li className={s.nav__link} >военные</li>
        <li className={s.nav__link} >торговля</li>
        <li className={s.nav__link} >налоги</li>
        <li className={s.nav__link} >мчс</li>
        <li className={s.nav__link} >экология</li>
        <li className={s.nav__link} >промышленость</li>
        <li className={s.nav__link} >продовольствие</li>
        <li className={s.nav__link} >соц. защиты</li>
        <li className={s.nav__link} >финансы</li>
        <li className={s.nav__link} >экономика</li>
        <li className={s.nav__link} >энергетика</li>
        <li className={s.nav__link} >юстиция</li>
      </ul>

    </div>
  );
}

export default Government;