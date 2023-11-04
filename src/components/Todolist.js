import React, { useEffect, useState } from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
export default function Todolist (prop) {
// getting data from local storage
  const getlocalitem=()=>{
    let list=localStorage.getItem('lists')
    console.log(list)
    if(list){
      return JSON.parse(localStorage.getItem('lists'))
    }else{
      return []
    }
  }
  // checks user input
  const[newitem,changenewitem]=useState('');
  // adds new item to the list
  const[items,chageitems]=useState(getlocalitem());

  const additem=()=>{
    if(!newitem){
      alert("Please enter a task");
      return;
    }
    const item={
      id: Math.floor(Math.random()*1000),
      value:newitem
    };
    chageitems(oldlist=>[...oldlist,item]);
    changenewitem('');
  }
  const deleteItem=(id)=>{
    const newArray=items.filter(item=>item.id!==id);
    chageitems(newArray)
  }
  // add data to local storage
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(items));
  }, [items]);
  
  return (
    <div>
      <div className='container'>
        <h1 className='maintile'>To-Do List Component</h1>
        <p className='titlemeaning'>Our To-Do List component is a practical addition to your React app. Manage your tasks with ease, add or remove them, and rest assured that your tasks are saved in your browser's local storage. It's the perfect tool for staying organized.</p>
      </div>
      <div className='center'>
      
      <div className='todolist container'>
        <h1>{prop.title}</h1>
        <input type='text' placeholder='Add an Item' value={newitem} onChange={e=>changenewitem(e.target.value)}/><br/>
        <button className='additembtn' onClick={additem}>{prop.button}</button>
        <ul>
          {
            items.map(item=>{
              return(
                <li key={item.id}>{item.value}<button className='deletebutton' onClick={()=>deleteItem(item.id)}><FontAwesomeIcon icon={faXmark} /></button></li>
              )
            })
          }   
        </ul>
      </div>
    </div>
    </div>
    
  )
}
