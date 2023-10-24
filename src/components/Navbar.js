import React, { useRef } from 'react';
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark,faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const navref= useRef();
    const shownav=()=>{
        navref.current.classList.toggle('responsive_nav');
    }
    return (
        <div>
            <header>
                <h3>React Practice</h3>
                <nav ref={navref}>
                    <Link to="/">Home</Link>
                    <Link to="/React_practice/src/components/usestate.js">Counter</Link>
                    <Link to='/React_practice/src/components/nightmode.js'>Lightmode</Link>
                    <Link to='/React_practice/src/components/Todolist.js'>Todolist</Link>
                    <button onClick={shownav} className='nav-btn nav-close-btn'><FontAwesomeIcon icon={faXmark} /></button>
                </nav>
                <button onClick={shownav} className='nav-btn'><FontAwesomeIcon icon={faBars} /></button>
            </header>
        </div>
    );
}
