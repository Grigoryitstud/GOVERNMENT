import React from 'react';
import s from './DemPage.module.css';




// let pageTables = [
//     { id: 1, classN: "b", name: "ЧЕСТНЫЕ ВЫБОРЫ", tabless:"tableHonest"},
//     { id: 2, classN: "p", name: "СВОБОДА СЛОВА", tabless:"tableVictory"},
//     { id: 3, classN: "q", name: "УРОВЕНЬ СЧАСТЬЯ", tabless:"tableHappiness"},
//     { id: 4, classN: "d", name: "ШКОЛЬНОЕ ОБР.", tabless:"tableSchool"},
//     { id: 5, classN: "J", name: "МЕДИЦИНА", tabless:"tableMedecine"},
//     { id: 6, classN: "K", name: "СРЕДНЯЯ З/П", tabless:"tableSalary"},
// ]
// let tables = pageTables.map(el => <section className={`${s}.${el.classN}`}><h3 className={s.title}>{el.name}</h3><table><tbody>{el.tabless}</tbody></table></section>)

const DemPage = (props) => {
    let tableHonest = props.honest.map(el => <tr className={s.row}><td className={s.column1}>{el.id}</td><td className={s.column2}>{el.name}</td><td className={s.column3}>{el.data}</td></tr>)
    let tableVictory = props.victory.map(el => <tr className={s.row}><td className={s.column1}>{el.id}</td><td className={s.column2}>{el.name}</td><td className={s.column3}>{el.data}</td></tr>)
    let tableHappiness = props.happiness.map(el => <tr className={s.row}><td className={s.column1}>{el.id}</td><td className={s.column2}>{el.name}</td><td className={s.column3}>{el.data}</td></tr>)
    let tableSchool = props.school.map(el => <tr className={s.row}><td className={s.column1}>{el.id}</td><td className={s.column2}>{el.name}</td><td className={s.column3}>{el.data}</td></tr>)
    let tableMedicine = props.medicine.map(el => <tr className={s.row}><td className={s.column1}>{el.id}</td><td className={s.column2}>{el.name}</td><td className={s.column3}>{el.data}</td></tr>)
    let tableSalary = props.salary.map(el => <tr className={s.row}><td className={s.column1}>{el.id}</td><td className={s.column2}>{el.name}</td><td className={s.column3}>{el.data}</td></tr>)
    
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
                        {tableHonest}
                    </tbody>
                </table>
            </section>

            <section className={s.p}>
            <h3 className={s.title}>СВОБОДА СЛОВА</h3>
                <table>
                    <tbody>
                    {tableVictory}
                    </tbody>
                </table>
            </section>

            <section className={s.q}>
            <h3 className={s.title}>УРОВЕНЬ СЧАСТЬЯ</h3>
                <table>
                    <tbody>
                        {tableHappiness}
                    </tbody>
                </table>
            </section>

            <section className={s.c}>

            </section>

            <section className={s.d}>
            <h3 className={s.title}>ШКОЛЬНОЕ ОБР.</h3>
                <table>
                    <tbody>
                        {tableSchool}
                    </tbody>
                </table>
            </section>

            <section className={s.J}>
            <h3 className={s.title}>МЕДИЦИНА</h3>
                <table>
                    <tbody>
                        {tableMedicine}
                    </tbody>
                </table>
            </section>

            <section className={s.K}>
            <h3 className={s.title}>СРЕДНЯЯ З/П</h3>
                <table>
                    <tbody>
                        {tableSalary}
                    </tbody>
                </table>
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