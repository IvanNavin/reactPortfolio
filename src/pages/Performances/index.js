import React from 'react';
import { navigate } from 'hookrouter';

import { PERFORMANCES_ROUTES } from '../../routes'
import s from './Performances.module.css'

const Performances = () => {
    return (
        <>
            <h2>Мои доклады</h2>
            <h3 className={s.navMenu}>
                {PERFORMANCES_ROUTES.map(({title, link}) => 
                    <button className={s.button} key={title} onClick={() => navigate(link)}><span>{title}</span></button>
                )}
            </h3>
        </>
    )
}

export default Performances;