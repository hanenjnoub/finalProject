import React from "react";
import { getAuthUser } from './redux/action'
import './App.css';
import {Routes,Route,Link} from "react-router-dom"
import Medlist from "./componement/Medlist"
import Addcontact from './componement/Addcontact';
import { Button } from "reactstrap";
import Login from './page/Login';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import Register from "./page/Register"
import Home from"./page/Home"
 import NavBar from "./componement/NavBar";
import DashboardDocteur from "./page/DashboardDocteur";
import DetailDoctor from "./componement/DetailDoctor";
import BookDate from "./componement/BookDate";
import Planing from "./page/Planing";
function App() {
  
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAuthUser())
  },[])

  return (
    <div className="App">
  
 <NavBar/>
<Routes>
<Route path="/" element={<Login/>} />
<Route path="/register" element={<Register />} />
<Route path="/Home" element={<Home />} />
  <Route path="/list" element={<Medlist />} />
  <Route path="/add" element={<Addcontact />} />
  <Route path="/dashboard" element={<DashboardDocteur />} />
  <Route path="/detailDoctor/:id" element={<DetailDoctor />} />
  <Route path="/BookAppointment/:id" element={<BookDate/>}/>
  <Route path="/DashDoc" element={<Planing/>}></Route>
</Routes>


    </div>
  );
}

export default App;
