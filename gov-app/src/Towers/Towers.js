import React from 'react';
import s from './Towers.module.css';
import baranovichi from '../img/Culture/baranovichi-theatre.jpg';
import bobruisk from '../img/Culture/bobruisk-music.jpg';
import krichev from '../img/Culture/krichev-circus.jpg';
import lida from '../img/Culture/lida-photo.jpg';
import mozir from '../img/Culture/mozir-folk.jpg';
import novogrudok from '../img/Culture/novogrudok-pictures.jpg';
import orsha from '../img/Culture/orsha-games.jpg';
import pinsk from '../img/Culture/pinsk-cinema.jpg';
import polotsk from '../img/Culture/polotsk-Books.jpg';
import slutsk from '../img/Culture/slutsk-moda.jpg';
import turov from '../img/Culture/turov-arhitecture.jpg';
import zhlobin from '../img/Culture/zhlobin-dance.jpg';

const Towers = () => {
  return (
    <div className={s.culture}>
    <div className={s.culture__item}>
        <img src={baranovichi} alt="" />
        <div className={s.culture__content}>
            <div className={s.culture__title}>Барановичи</div>
            <div className={s.culture__text}>развитие театра</div>
        </div>
    </div>

    <div className={s.culture__item}>
        <img src={bobruisk} alt="" />
        <div className={s.culture__content}>
            <div className={s.culture__title}>Бобруйск</div>
            <div className={s.culture__text}>развитие музыки</div>
        </div>
    </div>

    <div className={s.culture__item}>
        <img src={krichev} alt="" />
        <div className={s.culture__content}>
            <div className={s.culture__title}>Кричев</div>
            <div className={s.culture__text}>развитие цирка</div>
        </div>
    </div>

    <div className={s.culture__item}>
        <img src={lida} alt="" />
        <div className={s.culture__content}>
            <div className={s.culture__title}>Барановичи</div>
            <div className={s.culture__text}>развитие фотографии</div>
        </div>
    </div>

    <div className={s.culture__item}>
        <img src={mozir} alt="" />
        <div className={s.culture__content}>
            <div className={s.culture__title}>Мозырь</div>
            <div className={s.culture__text}>развитие фольклёра</div>
        </div>
    </div>

    <div className={s.culture__item}>
        <img src={novogrudok} alt="" />
        <div className={s.culture__content}>
            <div className={s.culture__title}>Новогрудок</div>
            <div className={s.culture__text}>развитие изобразительного искусства</div>
        </div>
    </div>

    <div className={s.culture__item}>
        <img src={orsha} alt="" />
        <div className={s.culture__content}>
            <div className={s.culture__title}>Орша</div>
            <div className={s.culture__text}>развитие видеоигр</div>
        </div>
    </div>

    <div className={s.culture__item}>
        <img src={pinsk} alt="" />
        <div className={s.culture__content}>
            <div className={s.culture__title}>Пинск</div>
            <div className={s.culture__text}>развитие кино</div>
        </div>
    </div>

    <div className={s.culture__item}>
        <img src={polotsk} alt="" />
        <div className={s.culture__content}>
            <div className={s.culture__title}>Полоцк</div>
            <div className={s.culture__text}>развитие литературы</div>
        </div>
    </div>

    <div className={s.culture__item}>
        <img src={slutsk} alt="" />
        <div className={s.culture__content}>
            <div className={s.culture__title}>Слутск</div>
            <div className={s.culture__text}>развитие моды</div>
        </div>
    </div>

    <div className={s.culture__item}>
        <img src={turov} alt="" />
        <div className={s.culture__content}>
            <div className={s.culture__title}>Туров</div>
            <div className={s.culture__text}>развитие архитектуры</div>
        </div>
    </div>

    <div className={s.culture__item}>
        <img src={zhlobin} alt="" />
        <div className={s.culture__content}>
            <div className={s.culture__title}>Жлобин</div>
            <div className={s.culture__text}>развитие хореографии</div>
        </div>
    </div>
</div>
  );
}

export default Towers;