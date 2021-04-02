import React from 'react';
import MainPage from "./pages/MainPage";
import AboutMe from "./pages/AboutMe";
import Contacts from "./pages/Contacts";
import Performances from "./pages/Performances";
import RegExp from "./pages/RegExp";
import Accessibility from "./pages/Accessibility";
import MyWorks from "./pages/MyWorks";
import Portfolio from "./pages/Portfolio";

export const Link = {
    MAINPAGE      : '/',
    ABOUTME       : '/aboutme',
    MYWORKS       : '/myworks',
    CONTACTS      : '/contacts',
    PERFORMANCES  : '/performances',
    REGEXP        : '/regexp',
    ACCESSIBILITY : '/accessibility',
    PORTFOLIO     : '/portfolio',
    POKEDEX       : '/pokedex',
    THANOS        : '/thanos',
    ENGLISH       : '/english'
}

export const GENERAL_MENU = [
    {
        firstName: '',
        secondName: 'Портфолио Иван',
        link: Link.MAINPAGE,
        component: () => <MainPage />
    },
    {
        firstName: 'Привет!',
        secondName: 'Обо мне',
        link: Link.ABOUTME,
        component: () => <AboutMe />
    },
    {
        firstName: 'Меня',
        secondName: 'Мои работы',
        link: Link.MYWORKS,
        component: () => <MyWorks />
    },
    {
        firstName: 'зовут',
        secondName: 'контакты',
        link: Link.CONTACTS,
        component: () => <Contacts />
    },
    {
        firstName: 'Иван.',
        secondName: 'Доклады',
        link: Link.PERFORMANCES,
        component: () => <Performances />
    }
];

const PERFORMANCES_ROUTES = [
    {
        title: 'Не бойтесь Регулярных выражений',
        link: Link.REGEXP,
        component: () => <RegExp />
    },
    {
        title: 'Разработка доступных интерфейсов',
        link: Link.ACCESSIBILITY,
        component: () => <Accessibility />
    },
];

const WORKS_ROUTES = [
    {
        link: Link.PORTFOLIO,
        component: () => <Portfolio />
    },
    {
        link: Link.POKEDEX,
        component: () => <Pokedex />
    },
    {
        link: Link.THANOS,
        component: () => <Thanos />
    },
    {
        link: Link.ENGLISH,
        component: () => <AboutMe />
    }
];

const routes = [...GENERAL_MENU, ...PERFORMANCES_ROUTES, ...WORKS_ROUTES].reduce((acc, item) => {
    acc[item.link] = item.component;
    return acc;
}, {})

export default routes;