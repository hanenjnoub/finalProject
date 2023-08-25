import axios from "axios";
import React from 'react'
import { useEffect } from 'react';
import{useSelector,useDispatch} from "react-redux"
import  { useState } from "react";
import "../page/Detail.css"
import { getAuthUser } from "../redux/action"
import EditProfile from '../componement/EditProfile'
import Map from"../page/Map"

function DashboardDocteur(el) {

const user=useSelector((state)=>state.medReducer.user)
const img=useSelector((state)=>state.medReducer.user.image)
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getAuthUser())
},[])


  return (
    
    <div className='detail'>
      
      <h1>your profile: {user && user.name}<br/>{user && user.lastName}</h1>
      <img className="avatar" src={img}  />
       <h2 class="text-important"> Email: {user && user.email}</h2>
      <h2 class="text-important">Phone: {user && user.phone}</h2>
      <h2 class="text-important">Adresse: {user && user.adresse}</h2>
      <h2 className="text-important">Descreption:{user && user.descreption}</h2>
       <Map/> 
      <EditProfile/>
      
    </div>
    
  )
}

export default DashboardDocteur
