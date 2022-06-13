import React from 'react';
import s from './Card.module.css';

const Card =(props) => {
    return (<div className={s.log}>
                <img className={s.logos} src={props.img} alt="" />
                <h3 className={s.nic}>{props.name}</h3>
            </div>)
};

export default Card;