import React from 'react'
import { projectdescription } from './projectdesciption'

export default function Home() {
    return (
        <div className='container'>
            <h1 className='maintitle'>Welcome to My React Practice</h1>
            <h2 className='secondtitle'>Practice Makes Perfect</h2>
            <ul className='Components'>
                {projectdescription.map((item,index)=>{
                    return(
                        <li key={index}>
                            <span className='secondtitle'>{item.title}</span>
                            <p className='titlemeaning'>{item.description}</p>
                        </li>
                    );  
                })}
            </ul>
            <h2 className='secondtitle'>Start Exploring</h2>
            <p className='titlemeaning'>Ready to enhance your React skills? Dive into these components, study their code, and expand your React knowledge. For Source code <a className='linktorepo' href='https://github.com/YujenM/React_practice'>Click here to visit repository</a></p>
        </div>
    )
}