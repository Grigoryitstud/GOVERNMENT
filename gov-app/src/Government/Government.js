import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import s from './Government.module.css';

const Government = () => {
  return (
    <div className={s.intro}>

      <ul className={s.nav}>
        <li className={s.nav__link}>
          < Link to='/GovePage#ed' offset={-70}>образование</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#med'>медицина</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#pol'>полиция</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#jkx'>ЖКХ</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#build'>строительство</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#peace'>мид</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#press'>пресса</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#cul'>культура</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#mil'>военные</Link>
        </li>
        <li className={s.nav__link} >
          <Link to='/GovePage#traid'>торговля</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#mon'>налоги</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#fire'>мчс</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#eco'>экология</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#bus'>своё дело</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#ind'>промышленность</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#food'>продовольствие</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#soc'>соц. защиты</Link>
          </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#econ'>экономика</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#ener'>энергетика</Link>
        </li>
        <li className={s.nav__link} >
          < Link to='/GovePage#jus'>юстиция</Link>
        </li>
      </ul>

    </div>
  );
}

export default Government;