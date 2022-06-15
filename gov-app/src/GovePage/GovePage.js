import React from 'react';
import s from './GovePage.module.css';
import OurManager from './OurManager/OurManager';




const GovePage = (props) => {
    let ourMinisters = props.ministers.map( minister => <OurManager id={minister.id} img={minister.img} title={minister.title} name={minister.name} blaBla={minister.blaBla} />)
    return (
        <div className={s.gov}>
            {ourMinisters}
        </div>

    );
}

export default GovePage;

