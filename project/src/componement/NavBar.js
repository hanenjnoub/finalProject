import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import doc from "../image/doc.jpg"
import "../page/NavBar.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

import  {logout} from "../redux/action"
import {useNavigate} from "react-router-dom"
import Login from '../page/Login';
import Register from '../page/Register';
import Planing from "../page/Planing"
const NavBar = () => {
  const dispatch = useDispatch();
    const user=useSelector((state)=>state.medReducer.user)
  const navigate=useNavigate()
const logoutt=()=>{
  dispatch(logout())
  navigate("/")

}


const authLinksPatient = (
    <Fragment>
       <img   className='navbar-img'src={doc}></img>
            <h1 className='navbartext'>Welcam</h1><br/>
        <Link   to="/dashboard">
         <h1 className="navbartext ">{user?user.name:null}</h1>
         </Link>
         <Link to="/">
           <h1 className='navbar-logout' href="/" onClick={logoutt}>
        Logout
      </h1>
      </Link>
      <NavLink className='list' href="/list" >
      <h1 className="list ">Docteur List </h1>
      </NavLink>
       
      
    </Fragment>
  );
  const authLinksDoctor = (
    <Fragment>
       <img   className='navbar-img'src={doc}></img>
            <h1 className='navbartext'>Welcam</h1><br/>
        <Link to="/dashboard">
         <h1 className="navbartext ">{user?user.name:null}</h1>
         
         </Link>
           <h1 className='navbar-logout' href="/" onClick={logoutt}>
        Logout
      </h1>
      
    </Fragment>
    
  );
  const Home = (
    <Fragment>
       <img   className='navbar-img'src={doc}></img>
            <h1 className='navbarhome'>Prenez rapidement un rendez-vous 
            avec votre médecin !</h1>
        
          </Fragment>
    
  );
   return (
    <div>
      <Navbar className='Nabglobal' >
        <Container>
       
          
            {(!user) ?(
          <NavbarBrand  >{Home}</NavbarBrand>
            )
         
           :(user.isDoctor)?(
              <NavbarBrand  >{authLinksDoctor}</NavbarBrand>
           )
         :(
              <NavbarBrand  >{authLinksPatient}</NavbarBrand>

         )
            }
             

           
          
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;