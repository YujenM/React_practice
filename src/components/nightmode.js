import React, { useState,useEffect } from 'react'
import '../App.css'
export default function Nightmode() {
    const [Template, SetTemplate] = useState('lightmode');
    const tooglemode=()=>{
        if (Template==='lightmode'){
            SetTemplate('darkmode')
        }else{
            SetTemplate('lightmode')
        }
    }
    useEffect(() => {
        if (Template === 'darkmode') {
            document.body.style.backgroundColor = '#7F7F7F';
        } else {
            document.body.style.backgroundColor = 'white';
        }
    }, [Template]);
    return (
        
        <div>
            <div className='container'>
                <h1 style={{color:Template==='lightmode'?'#7F7F7F':'#FFFFFF'}}>{Template}</h1>
                <label className="switch">
                    <input type="checkbox" onClick={tooglemode}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}
