import React from 'react';
import CircleText from '../../components/CircleText';

import s from '../../assets/styles/work.module.css'

import THANOSVIDEO from './assets/effectThanos.mp4'

const Thanos = () => {
    return (
        <div className={s.container}>
            <h2>Thanos Effect</h2>
            <video className={s.video} loop autoPlay muted poster="./img/thanos.jpg">
                <source src={THANOSVIDEO} />
            </video>
            <p>Работая в EvoPlay мне поступила задача: воспроизвести эфект Таноса.</p>
            <p>Что нужно сделать?</p>
            <p>Нужно сделать распад картинок, как в фильме Мстители 3: Война бесконечности. Картинки должны распадаться на пепел и разлетаться по ветру.</p>
            <p>Немного полапатив интернет, я обнаружил много примеров данной реализации.</p>
            <p>Все примеры которые я находил, были сделаны с библиотекой html2canvas, меня это немного не устраивало! Т.к. мне нужно разщиплять на атомы только картинки а не любой контент. А для этих целей подойдут и обычные средства canvas.</p>
            <p>Поэтому я сделал этот эффект без применения библиотеки html2canvas</p>

            <CircleText link="https://destructurizator.netlify.app/" text="Результат смотрим тут" />
            <CircleText link="https://github.com/IvanNavin/destructurizator" text="Код смотрим тут" />
        </div>
    )
}

export default Thanos;