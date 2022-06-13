import React from 'react';
import s from './OurManager.module.css';
import Card from './Card/Card';
import logo from '../../img/avatar/1ava.jpg';

const OurManager = (props) => {
    return (<section className={s.section} id={props.id}>
        <h2 className={s.title}>{props.title}</h2>
        <div className={s.candidate}>
            <Card img={logo} name="Прозвишча" />
            <h5 className={s.blaBla}>{props.blaBla}</h5>
        </div>

    </section>)
};

export default OurManager;