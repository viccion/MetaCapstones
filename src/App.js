import './App.css';
import Home from './Home.js'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter, Routes, Route, Router
} from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav.js';
import Booking from './BookinPage';
import Main from './Main.js'


function App() {
  return ( 
    <div className="App">
   
    <Nav/>
    <Main/> 
    <Footer/>
    </div>
    
  );
}

export default App;
