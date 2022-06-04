import React from 'react';
import States from './States/States';
import Towers from './Towers/Towers';
import Cities from './Cities/Cities';
import Democracy from './Democracy/Democracy';

const MainPage = () => {
    return (
        <div>
            <Democracy />
            <Cities />
            <Towers />
            <States />
        </div>
    );
}

export default MainPage;