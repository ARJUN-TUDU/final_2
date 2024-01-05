import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Map from './Map';
import { useEffect,useState } from 'react';
import Home from './pages/Home';
import Details from './pages/Details';
import {Routes,Route} from 'react-router-dom'

function App() {

  


  
 


  
  return (
    <div className="App">
         <Routes>

              <Route path="/home" element = { <Home/>} />
              <Route path = "/details/:id" element = {<Details/>}/>


         </Routes>
    </div>
  );
}

export default App;
