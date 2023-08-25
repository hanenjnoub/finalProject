import {useState}from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
import {addmedcontact} from "../redux/action"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
const Addcontact = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
      const [cancel, setCancel] = useState(false);
     const dispatch=useDispatch()
     const navigate=useNavigate()
    
    const add=()=>{
        dispatch(addmedcontact({name,email,phone}))
        setCancel(!cancel)
    }
      return (
        <>
     {cancel?(
    navigate("/list")
     ):(
       
            <div style={{ margin: "100px" }}>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
    onChange={(event)=>(setEmail(event.target.value))}
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">name</Label>
                  <Input
                 onChange={(event)=>(setName(event.target.value))}
                    type="text"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">phone</Label>
                  <Input
              onChange={(event)=>(setPhone(event.target.value))}
                    type="text"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                  />
                </FormGroup>
                <Button onClick={add}>Add contact</Button>
                <Button onClick={() => setCancel(!cancel)}>cancel</Button>
              </Form>
            </div>
     )
    }
        </>
    
      );
    };
    
    export default Addcontact;