import React, { useRef, useMemo } from 'react';
import cn from 'classnames';
import { navigate } from 'hookrouter';
import { isMobileOrTablet } from "../../utils";

import Ivan from './assets/iam-wb-1.png'

import s from './Ivan.module.css'
import { GENERAL_MENU } from "../../routes";
import Fluid from "../../components/Fluid";

const MainPage = () => {
    const wrap = useRef(null)
    const mainClass = cn(s.root, isMobileOrTablet() && s.isMobileOrTablet)
    const onTap = _ => {
        isMobileOrTablet() ? wrap.current.classList.toggle(s.tapped) : null;
    }

    return (
        <div className={mainClass} ref={wrap} >
            <Fluid handler={onTap}/>
            <img className={cn(s['ivan-photo'], isMobileOrTablet() && s.photoMob)} src={Ivan} alt="in the photo Ivan in a blue shirt"/>

            <h1 className={cn(s['nav-menu'], isMobileOrTablet() && s.mobNavMenu)} >
                {
                    GENERAL_MENU.slice(1).map(({ firstName, secondName, link}) => (
                        <button
                            key={firstName}
                            onClick={() => navigate(link)}
                        >
                            <span
                                data-name-button={firstName}
                                data-second-name-button={secondName}/>
                        </button>
                        )
                    )
                }
            </h1>

            <span className={cn(isMobileOrTablet() ? s.tap : s.slide)}> anywhere</span>
            {
                !isMobileOrTablet() && <p className={s.help}>Press "P" for Pause. Press "Space" for new effect</p>
            }
        </div>
    )
}

export default MainPage;