import React,{ useState } from "react";
import "./Login";
import { Button, Input, Form,Checkbox } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { registerUser } from "../redux/action";
const Register=()=> {
  const [isDoctor, setIsChecked] = useState(false);
  console.log(isDoctor,"hhhhhhhhhhh")
const dispatch = useDispatch()
  const [modal, setModal] = useState(false);
    const[name,setName]=useState("")
    const[lastName,setlastName]=useState("")
    const[phone,setPhone]=useState("")
    const[email,setEmail]=useState("")
    const navigate = useNavigate()
    const handleChange = (event) => {
      setIsChecked(event.target.checked);
    };

    const[password,setPassword]=useState("")
    
    const Registe=()=>{
      const newUser={name,lastName,phone,email,password,isDoctor}
      dispatch(registerUser(newUser))
            if (isDoctor)
      {
      
      navigate("/dashDoc")
      }
       else{
        {
     
      
      navigate("/Home")}
       } 
      }
      
  return (
    <div className="auth">
      <div className="auth-form card p-4">
        <h1 className="card-title">Create an Account</h1>
        <Form layout="vertical" >
          <Form.Item label="Name" name="name">
            <Input placeholder="Name" 
            onChange={(e)=>(setName(e.target.value))}/>
          </Form.Item>
          <Form.Item label="LastName" name="lastname">
            <Input placeholder="LastName" 
            onChange={(e)=>(setlastName(e.target.value))}/>
          </Form.Item>
          <Form.Item label="Phone" name="Phone">
            <Input placeholder="Phone" 
            onChange={(e)=>(setPhone(e.target.value))}/>
          </Form.Item>
          <Form.Item label="Doctor" name="Doctor">
          <input
          Label="Doctor"
        type="checkbox"
        checked={isDoctor}
        onChange={handleChange}
      />
        </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" placeholder="email" 
            onChange={(e)=>(setEmail(e.target.value))}/>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" placeholder="password"
             onChange={(e)=>(setPassword(e.target.value))}/> 
          </Form.Item>
          <Button className="primary-button mt-3 my-3" htmlType="submit1"
          onClick={Registe}>
             Register
          </Button>
          
        </Form>
      </div>
    </div>
  );
}

export default Register;
