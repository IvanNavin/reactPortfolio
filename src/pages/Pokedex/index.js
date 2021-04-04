import React from 'react';
import CircleText from '../../components/CircleText';

import s from '../../assets/styles/work.module.css';

import POKEDEXHOME from './assets/pokedex-home.png';

const Pokedex = () => {
    return (
        <div className={s.container}>
            <h2>Pokedex</h2>

            <img className={s.img} src={POKEDEXHOME} />

            <p>Pokedex - это результат продвинутого Реакт марафона, который проводит Зар Захаров</p>
            <p>В этом марафоне мне очень понравился дизайн и новые технологии Реакт</p>
            <p>В дизайне был kit - набор и названия всех цветов, градиентов, шрифты и их размеры и т.д.</p>
            <p>Входе марафона я реализовал в этом проэкте следующие технологии:</p>
            <br/>
            <ul className={s.ul}>
                <li>React</li>
                <li>Hook</li>
                <li>HookRouter</li>
                <li>Redux</li>
                <li>Webpack</li>
                <li>TypeScript</li>
                <li>ESLint</li>
                <li>Axios</li>
                <li>Jest</li>
                <li>SSR</li>
                <li>Hapi</li>
            </ul>

            <p>На самом деле в этом марафоне много интересных моментов.</p>
            <p>Весь проэкт написан на хуках.</p>
            <p>В последствии мне это чень помогло - когда я перешёл в новую комманду по реакту, я тут же начал переводить хоки на хуки. Впоследствии я смог поделиться этими знаниями с коллективом.</p>
            <br/>
            <br/>
            <p>К сожалению апишка написана с http протоколом и на https не работает ниже видео демонстрация работающего проекта</p>
            <br/>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/3QXCrih6_MI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <br/>
            <br/>
            <p>В ходе написания данного проекта я самостоятельно добавил на своё усмотрение фильтр по типам и атаке, а так-же сделал модальные окна через "createPortal".</p>
            <p>В будующем я планирую добавить в проект бесконечную подгрузку и storyBook</p>
            <br/>
            <CircleText link="https://pokedex777.vercel.app/" text="Результат смотрим тут" />
            <CircleText link="https://github.com/IvanNavin/Pokedex777" text="Код смотрим тут" isCode />
        </div>
    )
}

export default Pokedex;