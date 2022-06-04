import React from 'react';
import s from './DemPage.module.css';

const DemPage = () => {
    return (
        <div className={s.demo}>
            <section className={s.a}>
                <p>
                    Демокра́тия (др.-греч. δημοκρατία «народовла́стие» от δῆμος «народ» + κράτος «власть») — политическая система, в основе которой лежит метод коллективного принятия
                    решений с равным воздействием участников на исход процесса или на его существенные стадии. Хотя такой метод применим к любым социальным институтам, на сегодняшний
                    день его важнейшим приложением является государство, так как оно обладает большой властью. В этом случае определение демократии обычно сужают до трёх следующих
                    признаков:
                </p>
                <ul>
                    <li>Народ является единственно легитимным источником власти.</li>
                    <li>Назначение лидеров управляемыми ими людьми происходит путём честных и состязательных выборов.</li>
                    <li>Контроль осуществляется благодаря свободе слова.</li>
                </ul>
            </section>

            <section className={s.b}>
                <h3 className={s.title}>ЧЕСТНЫЕ ВЫБОРЫ</h3>
                <table>
                    <tbody>
                        <tr className={s.row}>
                            <td className={s.column1}>1</td>
                            <td className={s.column2}>Финлян­дия</td>
                            <td className={s.column3}>100</td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.column1}>2</td>
                            <td className={s.column2}>Норвегия</td>
                            <td className={s.column3}>100</td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.column1}>3</td>
                            <td className={s.column2}>Швеция</td>
                            <td className={s.column3}>100</td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.column1}>4</td>
                            <td className={s.column2}>Новая Зелан­дия</td>
                            <td className={s.column3}>99</td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.column1}>5</td>
                            <td className={s.column2}>Нидер­ланды</td>
                            <td className={s.column3}>98</td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.column1}>6</td>
                            <td className={s.column2}>Уругвай</td>
                            <td className={s.column3}>98</td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.column1}>7</td>
                            <td className={s.column2}>Канада</td>
                            <td className={s.column3}>98</td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.column1}>8</td>
                            <td className={s.column2}>Австра­лия</td>
                            <td className={s.column3}>97</td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.column1}>9</td>
                            <td className={s.column2}>Ирландия</td>
                            <td className={s.column3}>96</td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.column1}>10</td>
                            <td className={s.column2}>Люксем­бург</td>
                            <td className={s.column3}>96</td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.column1}>11</td>
                            <td className={s.column2}>Дания</td>
                            <td className={s.column3}>96</td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.column1}>12</td>
                            <td className={s.column2}>Бельгия</td>
                            <td className={s.column3}>96</td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.column1}>13</td>
                            <td className={s.column2}>Япония</td>
                            <td className={s.column3}>96</td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.column1}>14</td>
                            <td className={s.column2}>Порту­галия</td>
                            <td className={s.column3}>96</td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.column1}>15</td>
                            <td className={s.column2}>Швей­цария</td>
                            <td className={s.column3}>96</td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.column1}>191</td>
                            <td className={s.column2}>Беларусь</td>
                            <td className={s.column3}>11</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className={s.p}>
                СВОБОДА СЛОВА\n
                1	Норвегия	6.72 \n
                2	Финляндия	6.99 \n
                3	Швеция	7.24\n
                4	Дания  8.57\n
                5	Коста-Рика	8.76\n
                6	Нидерланды	9.67\n
                7	Ямайка	9.96\n
                8	Новая Зел.	10.04\n
                9	Португалия	10.11\n
                10	Швейцария	10.55\n
                11	Бельгия	11.69\n
                12	Ирландия	11.91\n
                13	Германия	15.24\n
                14	Канада	15.25\n
                15	Эстония	15.25\n
                158	Беларусь  50.82
            </section>

            <section className={s.q}>
                УРОВЕНЬ СЧАСТЬЯ\n
                1	Финлян­дия	7.821\n
                2	Дания	7.636\n
                3	Исландия	7.557\n
                4	Швей­цария	7.512\n
                5	Нидер­ланды	7.415\n
                6	Люксем­бург	7.404\n
                7	Швеция	7.384\n
                8	Норвегия	7.365\n
                9	Израиль	7.364\n
                10	Новая Зел. 7.200\n
                11	Австрия	7.163\n
                12	Австра­лия	7.162\n
                13	Ирландия	7.041\n
                14	Германия	7.034\n
                15	Канада	7.025\n
                65	Беларусь	5.821
            </section>

            <section className={s.c}>

            </section>

            <section className={s.d}>
                школьное образование\n
                1	Германия	0.943\n
                2	Норвегия	0.930\n
                3	Велико­британия	0.928\n
                4	Финлян­дия	0.927\n
                5	Исландия	0.926\n
                6	Новая Зелан­дия	0.926\n
                7	Австра­лия	0.924\n
                8	Ирландия	0.922\n
                9	Дания	0.920\n
                10	Швеция	0.918\n
                11	Нидер­ланды	0.914\n
                12	Словения	0.910\n
                13	Бельгия	0.902\n
                14	Швей­цария	0.900\n
                15	С Ш А	0.900\n
                32	Беларусь	0.838

            </section>

            <section className={s.J}>
                Здравоохранение\n
                1	Гонконг	88.9\n
                2	Сингапур	84.2\n
                3	Испания	72.2\n
                4	Южная Корея	71.5\n
                5	Япония	68.2\n
                6	Италия	67.7\n
                7	Израиль	66.8\n
                8	Чили	65.2\n
                9	О А Э	64.3\n
                10	Австралия	62.0\n
                11	Аргентина	59.8\n
                12	Тайвань	59.7\n
                13	Греция	59.0\n
                14	Швейцария	57.8\n
                15	Франция	56.8\n
                48	Беларусь	35.2\n

            </section>

            <section className={s.K}>
                средняя з/п\n
                1 Швейцария	6244\n
                2	Дания	6192\n
                3	Люксембург	5854\n
                4	Норвегия  $5450 \n
                5	Исландия	5436\n
                6	Германия	4392\n
                7	Япония	3998\n
                8	Бельгия	3930\n
                9	США	3921\n
                10	Финляндия	3908\n
                11	Сингапур	3782\n
                12	Ирландия	3671\n
                13	Андорра 	3388\n
                14	Новая Зеландия	3354\n
                15	Австралия	3346\n
                61	Белоруссия	545

            </section>

            <section className={s.e}>

            </section>

            <section className={s.l}>

            </section>

            <section className={s.f}>

            </section>

            <section className={s.g}>

            </section>

            <section className={s.h}>

            </section>

            <section className={s.i}>

            </section>

        </div>
    );
}

export default DemPage;