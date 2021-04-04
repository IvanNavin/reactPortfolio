import React from 'react';
import CircleText from '../../components/CircleText';

import s from '../../assets/styles/work.module.css';
import ENGLISH from './assets/English.jpg'

const English = () => {
    return (
        <div className={s.container}>
            <h2>English learn</h2>

            <img className={s.img} src={ENGLISH} alt="site example" />
            
            <p>English learn - это результат Реакт-марафона от Зара Захарова</p>
            <p>В ходе этого марафона мы познакомились с React и его жизненными циклами, научились работать с формами и с сервером "Firebase". Научились работать с пропсами и стейтом, пробрасывали их через компоненты и обратно. Для начала написали самописный редакс, что бы понимать как он работает и в последствии подключили его. Иконки и формы мы брали из коллекции AntDesign. Подключили апишку словаря и использовали хранилище firebase для запоминания слов юзера. Прикрутили React Router и Thunk.</p>
            <br/>
            <p>Что бы использовать возможности сайта, нужно внести неизвестное английское слово в поле ввода. Далее это слово появится в базе данных "Firebase" и под полем ввода. Если кликнуть на слово, карточка перевернётся и с другой стороны карточки будет уже слово на русском языке. Далее это слово можно вычеркнуть, как запомненное или удалить как ненужное. Тогда это слово удалится и из базы ваших слов.</p>
            <br/>
            <p>Логин: reactmarathon@gmail.com</p>
            <p>Пароль: 12345678</p>
            <br/>
            <CircleText link="https://learn-english-card.netlify.app/" text="Результат смотрим тут" />
            <CircleText link="https://learn-english-card.netlify.app/" text="Код смотрим тут" isCode />
        </div>
    )
}

export default English;