import React, { useState } from 'react';
import '../App.css';

export default function Nightmode() {
    const [Template, SetTemplate] = useState('lightmode');

    const toggleMode = () => {
        if (Template === 'lightmode') {
            SetTemplate('darkmode');
        } else {
            SetTemplate('lightmode');
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='lightchange' style={{ backgroundColor: Template === 'lightmode' ? '#FFFFFF' : '#7F7F7F' }}>
                    <h1 style={{ color: Template === 'lightmode' ? '#7F7F7F' : '#FFFFFF' }}>{Template}</h1>
                    <label className="switch">
                        <input type="checkbox" onClick={toggleMode} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <h1 className='maintile'>Light and Dark Mode Toggle React Component</h1>
            <p className='titlemeaning'>The code presented is a React component designed to implement a dynamic light and dark mode toggle feature on a web page. This interactive component allows users to switch between two distinct visual modes, namely light mode and dark mode, with ease. As users interact with the toggle switch, the component intelligently manages the page's background color and text color, creating the illusion of transitioning between these two modes. When the toggle switch is clicked, the page's colors are adjusted instantly to provide a more comfortable and visually pleasing experience for users.</p>
            </div>
            
        </div>
    );
}
