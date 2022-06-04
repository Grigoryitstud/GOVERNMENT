import React from 'react';
import s from './States.module.css';

const States = () => {
  return (
    <div className={s.intro}>
      <div className={s.intro__inner}>
        <h2 className={s.intro__subtitles}>
          Географический центр Киевского княжества, культурный центр восточных славян(средневековье), старейший город РБ
        </h2>
        <h2 className={s.intro__subtitles}>
          Новоградок, центр объединения земель в Великое княжества Литовское, Русское и Жемайтское (спасло русь от орды)
        </h2>
        <h2 className={s.intro__subtitles}>
          Исторический центр полесья, многие считают местом возникновения славян(печки каменки и т.п. находили здесь первые)
        </h2>
        <p className={s.btn} >Узнай больше</p>
      </div>
    </div>
  );
}

export default States;