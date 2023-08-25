// import React, { useState ,useEffect} from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import CarCard from './CarCard';
// import { getCars } from './Redux/actions';
// import {
//     Button,
//     Modal,
//     ModalHeader,
//     ModalBody,
//     Form,
//     FormGroup,
//     Label,
//     Input,
//     NavLink,
//   } from 'reactstrap';

// function Booking() {
//     const [modal, setModal] = useState(false);
//     const[dateRetrait,setDateRetrait]=useState("")
//     const[HRetrait,setHRetrait]=useState("")
//     const[dateRetour,setDateRetour]=useState("")
//     const[HRetour,setHRetour]=useState("")
//     const[totalePrice,settotalePrice]=useState("")
//     const[cancel,setCancel]=useState("")
//     const[dispo,setDispo]=useState("")

//     const dispatch=useDispatch()
//     const navigate=useNavigate()
//     useEffect(()=>{
//       dispatch(getCars())
//         },[])
//     const cars=useSelector((state)=>state.carsReducer.cars)
//     console.log(cars,"gfgfggfffffffffff")
//    const gg=()=>{
//        dispatch({dateRetrait,HRetrait,dateRetour,HRetour,totalePrice,dispo})
//        setCancel(!cancel)
//    }


//     const toggle = () => {
//       setModal(!modal);
//     };
//     return (
//         <div style={{ padding: '0 15px' }}>
    
    
//               <Form>
//                 <FormGroup>
//                   <Label for="email">choisir date</Label>
//                   <Input
//                     type="date"
//                     name="email"
//                     id="email"
//                     placeholder="email"
//                     className="mb-3"
//                     onChange={(e)=>(setDateRetrait(e.target.value))}
    
//                   />
//                     <select name="heurePrise" class="inputs2">
    
//                   <option value="0">00:00</option>
    
//                   <option value="1">01:00</option>
    
//                   <option value="2">02:00</option>
    
//                   <option value="3">03:00</option>
    
//                   <option value="4">04:00</option>
    
//                   <option value="5">05:00</option>
    
//                   <option value="6">06:00</option>
    
//                   <option value="7">07:00</option>
    
//                   <option value="8">08:00</option>
    
//                   <option value="9">09:00</option>
    
//                   <option value="10" selected="">10:00</option>
    
//                   <option value="11">11:00</option>
    
//                   <option value="12">12:00</option>
    
//                   <option value="13">13:00</option>
    
//                   <option value="14">14:00</option>
    
//                   <option value="15">15:00</option>
    
//                   <option value="16">16:00</option>
    
//                   <option value="17">17:00</option>
    
//                   <option value="18">18:00</option>
    
//                   <option value="19">19:00</option>
    
//                   <option value="20">20:00</option>
    
//                   <option value="21">21:00</option>
    
//                   <option value="22">22:00</option>
    
//                   <option value="23">23:00</option>
    
//             </select>
//             <Input type="number"  placeholder='nbr du j'/>


//             </FormGroup>

//           </Form>
//           <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" , justifyContent:"center"}}>
// {
//     cars && cars.map((el)=>(
//         <CarCard el={el}/>
//     ))
// }
//         </div>

//         <Button
//                 color="dark"
//                 style={{ marginTop: '2rem' }}
//                 block

//               >
//                 Booking
//               </Button>
//     </div>
//   )
// }

// export default Booking