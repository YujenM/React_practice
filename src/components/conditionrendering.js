import React, { useState } from 'react';
import '../App.css'
export default function ConditionRendering() {
    const [loggedin, setLoggedin] = useState(false);

    const userLogin = () => {
        setLoggedin(true);
    };
    const userLogout = () => {
        setLoggedin(false);
    };
    return (
        <div className='container'>
            {loggedin ? <h1>Welcome, user!</h1> : <h1>Please Log In</h1>}
            <button className='loginandoutbtn' onClick={userLogin}>Log In</button>
            <button className='loginandoutbtn' onClick={userLogout}>Log Out</button>
        </div>
    );
}
