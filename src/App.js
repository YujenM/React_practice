import React ,{useState}from 'react';
import './App.css';
import Home from './components/Home'
import Todo from './components/Todolist'
import Nav from './components/Navbar'
import Usestatecomponent from './components/usestate';
import Buttonusestate from './components/nightmode'
// import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar'
import Slider from './components/Slider';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  const [progress, setProgress] = useState(0)
  return (
    <Router>
      <Nav/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/React_practice/src/components/usestate.js' element={<Usestatecomponent/>}></Route>
        <Route path='/React_practice/src/components/nightmode.js' element={<Buttonusestate/>}></Route>
        <Route path='/React_practice/src/components/Todolist.js' element={<Todo button='Add Item'/>}></Route>
        <Route path='/React_practice/src/components/Slider.js' element={<Slider/>}></Route>
      </Routes>
      {/* <Footer/> */}
    </Router>
    
  );

}

export default App;
