import React from 'react';
import s from './MistoPage.module.css';

const MistoPage = () => {
    return (
        <div>
            <section class={s.dep}>
                дэпутат
            </section>

            <section class={s.dep}>
                управляющий
            </section>

            <section class={s.dep}>
                участковый
            </section>

            <section class={s.dep}>
                суд
            </section>

            <section class={s.dep}>
                совет
            </section>
        </div>
    );
}

export default MistoPage;