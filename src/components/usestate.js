import React,{useState} from 'react'
import '../App.css'


export default function UseState() {
    const [Count, setCount] = useState(0);
    function decrement(){
        setCount(Count-1);
        if (Count > 0) {
            setCount(prevcount=>prevcount-1)
        }
    }
    function incremet(){
        setCount(prevcount=>prevcount+1)
    }

    return ( 
        <div>
            <div className='hello'>
                <button className='margin' onClick={decrement} disabled={Count<=0} >-</button>
                <p className='margin'>{Count}</p>
                <button className='margin' onClick={incremet}>+</button>
                
            </div>
            <div className='container'>
                <h1 className='maintile'>Counter</h1>
                <p className='titlemeaning'>The UseState component demonstrates the power of React's useState hook. It showcases a simple counter with increment and decrement buttons, ensuring the count never goes below zero. A perfect starting point for mastering state management in React.</p>
            </div>
        </div>
    )
}
