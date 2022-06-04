import React from 'react';
import s from './Cities.module.css';
import brest from '../img/cities/brest.jpg';
import gomel from '../img/cities/gomel.jpg';
import grodno from '../img/cities/grodno.jpg';
import minsk from '../img/cities/minsk.jpg';
import mogilev from '../img/cities/mogilev.jpg';
import vitebsk from '../img/cities/vitebsk.jpg';

const Cities = () => {
  return (
    <div className={s.container}>
    <div className={s.cities}>

       <div className={s.cities__item}>
           <img className={s.cities__icon} src={brest} alt="" />
           <h4 className={s.cities__titles}>Брест</h4>
           <div className={s.cities__text}>Южная Европа и Африка, культурные, торгово-экономические связи</div>
       </div>

         <div className={s.cities__item}>
           <img className={s.cities__icon} src={grodno} alt="" />
           <h4 className={s.cities__titles}>Гродно</h4>
           <div className={s.cities__text}>Северная Европа и Африка, культурные, торгово-экономические связи</div>
       </div>

        <div className={s.cities__item}>
           <img className={s.cities__icon} src={vitebsk} alt="" />
           <h4 className={s.cities__titles}>Витебск</h4>
           <div className={s.cities__text}>Северная Америка, культурные, торгово-экономические связи</div>
       </div>

        <div className={s.cities__item}>
           <img className={s.cities__icon} src={mogilev} alt="" />
           <h4 className={s.cities__titles}>Могилёв</h4>
           <div className={s.cities__text}>Азия, культурные, торгово-экономические связи</div>
       </div>

        <div className={s.cities__item}>
           <img className={s.cities__icon} src={gomel} alt="" /> 
           <h4 className={s.cities__titles}>Гомель</h4>
           <div className={s.cities__text}>Персидский залив Австралия, культурные, торгово-экономические связи</div>
       </div>

        <div className={s.cities__item}>
           <img className={s.cities__icon} src={minsk} alt="" />
           <h4 className={s.cities__titles}>Минск</h4>
           <div className={s.cities__text}>Центр торгово эконимического развития внутреннего рынка РБеларусь</div>
       </div>

    </div>
</div>
  );
}

export default Cities;