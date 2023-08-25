import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getmedcontacts } from "../redux/action";
import ContactCard from "./ContactCard";
import NavBar from"./NavBar"
import "../page/Index.css"
const Medlist=()=>{
  
const dispatch=useDispatch()
useEffect(()=>{
    dispatch(getmedcontacts())
},[])
const contacts=useSelector((state)=>state.medReducer.medcontacts)
console.log(contacts,"hellloooo")

  return(
< div className="bodpy">

      <div className="hero-container">
{
  
  contacts && contacts.filter((el)=>el.isDoctor)
  .map((el)=>(
      <ContactCard el={el}/>
      
  ))
}
      </div>
      </div>
  )
}

export default Medlist