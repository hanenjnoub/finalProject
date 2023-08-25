import { Card, Button, CardTitle, CardText } from "reactstrap";
import {deletemedcontact} from "../redux/action"
import {useDispatch} from "react-redux"
import EditModal from "./EditModal"
import { Link } from "react-router-dom";
import "../page/Index.css"
const ContactCard=({el})=>{

    const dispatch=useDispatch()
    
        const deletes=()=>{
    dispatch(deletemedcontact(el._id))
        }
        return(
          <div>
            <div class="main-container">
            <img  className="cover-imagde" src={el.image} alt="immg"/>
            <div class="ticket-container"> 
            <div class=""> 
              <h4>{el.name}</h4> 
              <h4>{el.email} </h4>
             <h4> {el.phone} </h4>
                
             
             </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
           {/* <Button onClick={deletes}>delete</Button> */}
           <Link to={`/detailDoctor/${el._id}`}>
           <Button  >voir detail</Button>
           </Link>
           {/* <EditModal el={el}/>  */}
       </div>
              </div>
          
          </div>
          </div>
        )
    }
    export default ContactCard