import React ,{ useEffect, useState } from "react";
import "../App.css";
import { Button, Input, Form } from "antd";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import{loginUser,getAuthUser} from "../redux/action"
const Login = () => {
    const [modal, setModal] = useState(false);
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const dispatch = useDispatch()
  const navigate = useNavigate();
  const user=useSelector((state)=>state.medReducer.user)


  const toggle = () => {
    setModal(!modal);
  };
 
const register=()=>{
    navigate("/register")
}
 const loginn = async() => {
  
  await  dispatch(loginUser({email,password}))
 
 }
 useEffect(()=>{
  if (user) {
    if (user && user.isDoctor) {
      navigate("/dashDoc");
    } else if (user) {
      navigate("/list");
    }
  }
  }, [user, navigate]);


  
 
  return (
    <div className="auth">
      <div  className="">
      <div className="auth-form card p-5">
        <h1 className="card-title pb-5">Login to your Account</h1>
        <Form layout="vertical" >
          <Form.Item label="Email" name="email">
            <Input type="email" placeholder="email"
            onChange={(e)=>(setEmail(e.target.value))}/>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" placeholder="password"
            onChange={(e)=>(setPassword(e.target.value))} />
          </Form.Item>
          <Button className="primary-button mt-3 my-2" htmlType="submit1"  
          onClick={loginn}>
            {" "}
           Login
          </Button>
          <Button className="primary-button mt-3 my-2" htmlType="submit1"  
          onClick={register}>
            {" "}
           Register
          </Button>
                  </Form>
      </div>
      </div>
    </div>
  )
}


export default Login;
