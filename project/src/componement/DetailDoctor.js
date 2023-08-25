import React from 'react'
import{useParams} from "react-router-dom"
import{useSelector} from "react-redux"
import "../page/Detail.css"
import { Link } from "react-router-dom";
function DetailDoctor(el) {
const{id}=useParams()
console.log(typeof(id),"hihihihi")
const medcontacts=useSelector((state)=>state.medReducer.medcontacts)

console.log(medcontacts,"contactssssss")
const doctorD=medcontacts.find((el)=>(el._id === id))

console.log(doctorD,'tttttttttttt')
console.log(doctorD.image,"ee")
  return (
    <div className='detail'>
      
      <h1>Doctor: {doctorD && doctorD.name}</h1>
      
      <img   src={doctorD && doctorD.image} alt="immg"/>
      <h2 class="text-important">{doctorD && doctorD.email}</h2>
      <h2 class="text-important">{doctorD && doctorD.phone}</h2>
      <h2 class="text-important">{doctorD && doctorD.adresse}</h2>
      <h2 class="text-important">{doctorD && doctorD.specialite}</h2>   
      <h2 className="text-important">{doctorD && doctorD.descreption}</h2>
      <Link to={`/BookAppointment/${doctorD._id}`}>
      <p> Prenez RDV </p>
      </Link>
    </div>
    
  )
}

export default DetailDoctor
