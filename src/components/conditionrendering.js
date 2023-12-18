import React, { useState } from 'react';
import '../App.css'
export default function ConditionRendering() {
    const [loggedin, setLoggedin] = useState(false);

    const userLogin = () => {
        setLoggedin(!loggedin?true:false);
    };
    
    return (
        <div className='container'>
            {loggedin ? <h1>Welcome, user!</h1> : <h1>Please Log In</h1>}
            <button className='loginandoutbtn' onClick={userLogin}>{!loggedin?'login':'logout'}</button>
            
        </div>
    );
}
