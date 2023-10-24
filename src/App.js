import React from 'react';
import './App.css';
import Home from './components/Home'
import Todo from './components/Todolist'
import Nav from './components/Navbar'
import Usestatecomponent from './components/usestate';
import Buttonusestate from './components/nightmode'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/React_practice/src/components/usestate.js' element={<Usestatecomponent/>}></Route>
        <Route path='/React_practice/src/components/nightmode.js' element={<Buttonusestate/>}></Route>
        <Route path='/React_practice/src/components/Todolist.js' element={<Todo button='Add Item'/>}></Route>

      </Routes>
      
      {/* <Usestatecomponent/>
      <Buttonusestate/> */}
      {/* <Todo title='To do list' button='Add Task'/> */}
    </Router>
  );
}

export default App;
