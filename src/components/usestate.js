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
        </div>
    )
}
