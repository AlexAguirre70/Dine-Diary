import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './views/login.js';
import CurrentUserProvider from './context/currentuser';
import Signup from './views/signup';
import Home from './views/home';
import Tracker from './views/Tracker';
import Navbar from './views/navbar';
import Mealform from './views/mealform';
import Navbarsi from './views/navbarsi';
import Api from './views/api';



function App() {
  return (
    <CurrentUserProvider>
      <Routes> 
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/navbar' element={<Navbar/>}/>
        <Route exact path='/tracker' element={<Tracker/>}/>
        <Route exact path='/navbarsi' element={<Navbarsi/>}/>
        <Route exact path='/mealform' element={<Mealform/>}/>
        <Route exact path='/api' element={<Api/>}/>
      </Routes>
    </CurrentUserProvider>
  );
};


export default App;
