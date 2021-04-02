import React from 'react';
import s from './aboutMe.module.css';

/*https://www.npmjs.com/package/react-typing-effect*/
const AboutMe = () => {
    const coreSkills = ['HTML', 'Twig', 'Less', 'JQuery', 'JS/ES6+', 'GraphQL', 'Gulp', 'Webpack'];
    const reactSkills = ['React', 'Redux', 'Saga', 'TypeScript', 'EsLint', 'SSR', 'Node.js', 'Express', 'Jest', 'Webpack'];
    const facts = new Map ([
        [0, 'Не курю'],
        [1, 'Не пью алкоголь'],
        [2, 'Пью много чая'],
        [3, 'Мне нравится интерьерный дизайн'],
        [4, 'Играю на гитаре'],
        [5, 'Люблю готовить мясо'],
        [6, 'Люблю свою семью'],
        [7, 'Люблю путешествовать'],
        [8, 'Не пью кофе'],
        [9, 'Весёлый'],
        [10, 'Общительный'],
        [11, 'Люблю смотреть сериалы'],
        [12, 'Коммуникабельный'],
        [13, 'Оптимист']
    ]);
    const randomFacts = [];
    let i = 0;

    while (i < 4) {
        const random = Math.floor(Math.random() * facts.size);

        if (facts.has(random)) {
            const randomFact = facts.get(random);
            randomFacts.push(randomFact);
            facts.delete(random);
            i++
        }
    }

    return (
        <div id="wrapper">
            <h2>Всем привет!</h2>
            <p>С 12 лет я мечтал быть программистом и творить, что-то интересное. Я понимал, что это очень сложно - но
                меня это не пугало! Я изучал сначала Basic, Pascal и потом Delphi. Но жизнь так сложилась, что мой
                жизненный путь пошел другим путём. И спустя некоторое время я снова решил заниматься любимым делом. В
                интернете много доступной информации и я стал изучать Front-end разработку.</p>
            <p>Сейчас я занимаюсь разработкой Front-end приложений, вёрсткой и обслуживанием сайтов.</p>
            <p>Мне нравится превращать сложные задачи в простые, красивые и интуитивно понятные конструкции.</p>
            <p>Когда я не пишу код, я играю на гитаре, жарю мясо или уделяю время семье.</p>
            <p>C 2018 года работаю в компании "EvoPlay".</p>
            <p>Мне нравятся интересные задачи и находить интересные решения для них</p>
            <p>В компании я стараюсь проявлять свои софт-скилы</p>
            <p>Провожу доклады и стараюсь быть нужным.</p>
            <p>Сейчас я работаю с двумя стэками в Кор-проектах мы используем:</p>
            <ul className={s.skills}>
                {coreSkills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
            <p>В других проектах мы используем React:</p>
            <ul className={s.skills}>
                {reactSkills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>

            <p>Паралельно изучаю новые технологии и стараюсь ими делится с другими.</p>

            <h2 className={s.factsHeader}>Случайные факты:</h2>
            <ul className={s.facts}>
                {randomFacts.map(fact => <li key={fact}>{fact}</li>)}
            </ul>

            <a href="./assets/CV_Golovko_Ivan.pdf" className={s.download} download="CV_Golovko_Ivan.pdf">
                <span /><span /><span /><span />
                <span className={s['star-blink']}>
                    <div />
                </span>
                скачать резюме
            </a>
        </div>
    )
};

export default AboutMe;