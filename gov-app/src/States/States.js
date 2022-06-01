import React from 'react';
import s from './States.module.css';

const States = () => {
  return (
    <div className={s.intro}>
    <div className={s.container}>
       <div className={s.intro__inner}>
            <h1 className={s.intro__titles}>
            Peoples must respect government, government must afraid peoples
            </h1>
            <h2 className={s.intro__subtitles}>
            демократия и образование спасут мир
            </h2>
            <a className={s.btn} href="">Узнай больше</a>
        </div>
    </div>
</div>
  );
}

export default States;