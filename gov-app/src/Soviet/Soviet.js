import React from 'react';
import s from './Soviet.module.css';
import logo1 from '../img/avatar/1ava.jpg';
import logo2 from '../img/avatar/2ava.jpg';
import logo3 from '../img/avatar/3ava.jpg';
import logo4 from '../img/avatar/4ava.jpg';
import Card from '../GovePage/OurManager/Card/Card';

const Soviet =(props) => {
    return (
        <section className={s.section}>
                <h1 className={s.title}>совет</h1>
                <div className={s.candidates}>
                    <Card img={logo4} name="Прозвишча" />
                    <Card img={logo3} name="Прозвишча" />
                    <Card img={logo1} name="Прозвишча" />
                    <Card img={logo4} name="Прозвишча" />
                    <Card img={logo2} name="Прозвишча" />
                    <Card img={logo3} name="Прозвишча" />
                    <Card img={logo2} name="Прозвишча" />
                    <Card img={logo4} name="Прозвишча" />
                    <Card img={logo1} name="Прозвишча" />
                </div>
            </section>
    )
}

export default Soviet;