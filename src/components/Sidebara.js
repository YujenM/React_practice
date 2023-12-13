import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';

export const Sidebara=[
    {
        title:'Home',
        path: '/',
        icon : <FontAwesomeIcon icon={icon.faHome} />,
        cName:'nav-text'
    },
    {
        title:'Switchmodes',
        path: '/React_practice/src/components/nightmode.js',
        icon : <FontAwesomeIcon icon={icon.faMoon} />,
        cName:'nav-text'
    },
    {
        title:'Counter',
        path: '/React_practice/src/components/usestate.js',
        icon : <FontAwesomeIcon icon={icon.fa1} />,
        cName:'nav-text'
    },
    {
        title:'Todolist',
        path: '/React_practice/src/components/Todolist.js',
        icon : <FontAwesomeIcon icon={icon.faList} />,
        cName:'nav-text'
    },
    {
        title:"Slider",
        path: "/React_practice/src/components/slider.js",
        icon:<FontAwesomeIcon icon={icon.faRightLeft}/>,
        cName:'nav-text'
    },
    {
        title:"Conditional rendering",
        path: "/React_practice/src/components/conditionrendering.js",
        icon:<FontAwesomeIcon icon={icon.faCheck}/>,
        cName:'nav-text'
    }
]