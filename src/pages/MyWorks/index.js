import React from 'react';
import {navigate} from "hookrouter";
import {Link} from "../../routes";

import s from './MyWorks.module.css';

const MyWorks = () => {
    const works = {
        0: {
            name: 'Portfolio',
            status: 'New',
            link: Link.PORTFOLIO,
            backUrl: './assets/portfolio.png',
            frontUrl: '',
            stack: ['HTML', 'CSS', 'JS', 'Canvas', 'Animations']
        },
        1: {
            name: 'Pokedex',
            status: 'in process',
            link: Link.POKEDEX,
            backUrl: './assets/pokedex-home.png',
            frontUrl: './assets/pokedex-desktop.png',
            stack: ['React', 'Redux', 'SSR', 'Scss', 'HookRouter', 'TS', 'Es-Lint']
        },
        2: {
            name: 'Thanos Effect',
            link: Link.THANOS,
            backUrl: './assets/thanos-back.jpeg',
            frontUrl: './assets/thanos.jpg',
            stack: ['HTML', 'CSS', 'JS', 'Canvas', 'Animations']
        },
        3: {
            name: 'English learn',
            link: Link.ENGLISH,
            backUrl: '',
            frontUrl: '',
            stack: ['React', 'Redux', 'SCSS', 'Firebase']
        }
    };

    return (
        <div id="wrapper">
            <h2>Мои работы</h2>

            <p>Так как в компании "EvoPlay" я подписал NDA(договор о неразглашении) мне придётся сюда выложить свои
                курсовые работы</p>
            <br/>
            <ul className={s.myWorks}>
                {
                    Object.values(works).map(({name, status, link, backUrl, frontUrl, stack}) => {
                        let delay = 3;
                        return (
                            <li className={s.item} key={name}>
                                <button className={s.screen} onClick={() => navigate(link)}>
                                    {status && (<span className={s.status}>{status}</span>)}
                                    <div className={s.bar}>
                                        <h5>{name}</h5>
                                        <i/>
                                    </div>
                                    <div className={s.main}>
                                        {backUrl && (<img className={s.back} src={backUrl} alt="" />)}
                                        <div className={s.tags}>
                                            <ul>
                                                {stack.map(item => (<li key={item} style={{'--delay': `0.${delay++}s`}}>{item}</li>))}
                                            </ul>
                                        </div>
                                        <picture className={s.img}>
                                            {frontUrl && (<img src={frontUrl} alt="" />)}
                                        </picture>
                                    </div>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MyWorks;