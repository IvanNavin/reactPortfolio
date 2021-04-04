import React from 'react';

import s from './Regexp.module.css'

const RegExp = () => {
    return (
        <>
            <h2>Не бойтесь регулярных выражений</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZJw-nqtDrWc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <h2>Полезные ссылки</h2>
            <div className={s.hrefs}>
                <a href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5_%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F" target="_blank">Регулярные выражения на википедии</a>
                <a href="https://regexr.com/" target="_blank">https://regexr.com/</a>
                <a href="https://regex101.com/" target="_blank">https://regex101.com/</a>
                <a href="https://learn.javascript.ru/regular-expressions" target="_blank">Учебник по регулярным выражениям на learn.javascript.ru</a>
                <a href="https://www.exlab.net/files/tools/sheets/regexp/regexp.png" target="_blank">Шпаргалка по регулярным выражениям</a>
            </div>
        </>
    )
}

export default RegExp;