import axios from "axios";
import { Get_Medcontact, LOGIN_USER, LOGOUT_USER, REGISTER_USER, GET_AUTH_USER,Get_Book} from "./actiontype";
//get medcontact

export const getmedcontacts=()=>(dispatch)=>{
    const  config={
        headers:{
            'authorization':localStorage.getItem("token")
        }
    }
    axios.get("/api/projet/",config)
    .then((res)=>dispatch({type:Get_Medcontact,payload:res.data}))
    .catch(err=>console.log(err))
    }

export const addmedcontact=(newmedcontact)=>(dispatch)=>{
    axios.post("api/projet/add",newmedcontact)
    .then((res)=>dispatch(getmedcontacts()))
    .catch((err)=>console.log(err))
}
// delete
export const deletemedcontact=(idmedcontacts)=>(dispatch)=>{
    axios.delete(`/api/projet/delete/${idmedcontacts}`)
    .then((res)=>dispatch(getmedcontacts()))
    .catch(err=>console.log(err))
}
//edit


export const editmedcontact=(idmedcontacts,editedmedontact)=>(dispatch)=>{
    axios.put(`/api/projet/edit/${idmedcontacts}`,editedmedontact)
    .then((res)=>dispatch(getmedcontacts()))
    .catch((err)=>console.log(err))
}
//bookDate
export const add_Booking=(idmedcontacts,add_Booking)=>(dispatch)=>{
    axios.put(`/api/projet/bookingDate/${idmedcontacts}`,add_Booking)
    .then((res)=>dispatch(getmedcontacts()))
    .catch((err)=>console.log(err))
}
//register user
export const registerUser=(newUser)=>async(dispatch)=>{
    try{
        const res=await axios.post('/api/projet/register',newUser)
        dispatch({
            type:REGISTER_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}
export const loginUser=(formData)=>async(dispatch)=>{
    try{
        const res=await axios.post('/api/projet/login',formData)
        dispatch({
            type:LOGIN_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}
export const getAuthUser=()=>async(dispatch)=>{
    const  config={
        headers:{
            'authorization':localStorage.getItem("token")
        }
    }
        try{
            const res=await axios.get("/api/projet/user",config)
            dispatch({
                type:GET_AUTH_USER,
                payload:res.data
            })
      
        }
        catch(error){
    console.log(error)
        }
    }

export const logout=()=>(dispatch)=>{
    dispatch({
        type:LOGOUT_USER
    })
    }
    //get booking
    export const getbook=()=>async(dispatch)=>{
        const  config={
            headers:{
                'authorization':localStorage.getItem("token")
            }
        }
        try {
            const res = await axios.get("/api/booking/bookDate",config)
            dispatch({type:Get_Book,payload:res.data})
        } catch (error) {
            console.log(error)
        }
        
        // .then((res)=>)
        // .catch(err=>console.log(err))
        }
   //add bookoing
   export const Addbooking=(newbooking,navigate)=>async(dispatch)=>{
    
    // const  config={
    //     headers:{
    //         'authorization':localStorage.getItem("token")
    //     }
    // }
    try {
        console.log("actionadd",newbooking)
        await axios.post('/api/booking/addbookDate',newbooking)
        dispatch(getmedcontacts())
        navigate("/list")
    } catch (error) {
        console.log(error)
    }
   
    // .then((res)=>)
    // .catch((err)=>console.log(err)) 
   }

  