import React from 'react';
import './App.css';
import Todo from './components/Todolist'
// import Usestatecomponent from './components/usestate';
// import Buttonusestate from './components/nightmode'

function App() {
  return (
    <div>
      {/* <Usestatecomponent/>
      <Buttonusestate/> */}
      <Todo title='To do list' button='Add Task'/>
    </div>
  );
}

export default App;
