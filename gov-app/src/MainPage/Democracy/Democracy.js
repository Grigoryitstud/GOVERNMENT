import React from 'react'
import s from './Democracy.module.css';

const Democracy = () => {
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
            <p className={s.btn}>Узнай больше</p>
        </div>
    </div>
</div>
  );
}

export default Democracy;