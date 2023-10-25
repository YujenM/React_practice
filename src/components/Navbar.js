import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Sidebara } from './Sidebara';
import './Nav.css'

export default function Navbar() {
    const [sidebar,setsidebar]=useState(false);
    const showsidebar=()=>setsidebar(!sidebar);

    return (
        <>
            <div className='Navbar'>
                <Link to="#" className='menubars'>
                    <FontAwesomeIcon icon={icon.faBars} size="xl"  onClick={showsidebar}/>
                </Link>
            </div>
            <nav className={sidebar?'nav-menu active':'nav-menu'}>
                <ul className='nav-menu-items' onClick={showsidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                        <FontAwesomeIcon icon={icon.faXmark}  />
                        </Link>
                    </li>
                    {Sidebara.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}

                </ul>

            </nav>
        </>
        
    )
}