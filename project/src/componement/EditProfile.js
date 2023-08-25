import React, { useState } from "react";
import axios from "axios";
import{useSelector} from "react-redux"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";

import { editmedcontact,getmedcontacts,getAuthUser } from "../redux/action";

const EditProfile=()=>{
    const user=useSelector((state)=>state.medReducer.user)
    const [modal, setModal] = useState(false);
    const[name,setName]=useState()
    const[lastName,setlastName]=useState()
    const[email,setEmail]=useState()
    const[phone,setPhone]=useState()
    const[adresse,setadresse]=useState()
    const[descreption,setdescreption]=useState()
    const [image, setImage] = useState();
    const [uploading, setUploading] = useState(false);
    const toggle = () => {
      setModal(!modal);
  
    };
    const dispatch = useDispatch();

    const uploadProfileImage = (e) => {
      const file = e.target.files[0];
      const bodyFormData = new FormData();
      bodyFormData.append("image", file);
      setUploading(true);
      axios
        .post("/api/uploads", bodyFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setImage(response.data);
          setUploading(false);
        })
        .catch((err) => {
          console.log(err);
          setUploading(false);
        });
    };
    const editt=()=>{
    dispatch(getmedcontacts)
    dispatch(getAuthUser())
    dispatch(editmedcontact(user._id,{name,lastName,email,phone,adresse,descreption,image}))
    setModal(!modal)
  }
    return (
      <div>
        <Button color="danger" onClick={toggle}>
        edit Profile{" "}
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>edit Profile</ModalHeader>
          <ModalBody>
            <Form>
            <FormGroup>
                <Label for="examplePassword">Name</Label>
                <Input
           value={name}
           onChange={(e)=>setName(e.target.value)}
                  type="text"
                
                />
              </FormGroup>
              <FormGroup>
                <Label >LastName</Label>
                <Input
              value={lastName}
              onChange={(e)=>setlastName(e.target.value)}
              type="text"
                  
                />
              </FormGroup>
              <FormGroup>
                <Label >phone</Label>
                <Input
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                  type="text"
                  
                />
              </FormGroup>
              <FormGroup>
                <Label >Email</Label>
                <Input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
                  type="email"
                 
                />
              </FormGroup>
              <FormGroup>
                <Label >Adresse</Label>
                <Input
                value={adresse}
                onChange={(e)=>setadresse(e.target.value)}
                  type="text"
                  
                />
              </FormGroup>
              <FormGroup>
                <Label >descreption</Label>
                <Input
                value={descreption}
                onChange={(e)=>setdescreption(e.target.value)}
                  type="text"
                  
                />
              </FormGroup>
              <FormGroup>
      <>
                  {image ? (
                    <img
                      src={image}
                      width="100%"
                      style={{ margin: "8px 0" }}
                      height="150px"
                      alt="product"
                    />
                  ) : (
                    <div style={{ margin: "8px 0" }}>
                      {!uploading ? "Upload Image For Product" : "Loading ..."}
                    </div>
                  )}
                  <div
                  >
                    Select File
                    <input
                      accept="image/*"
                      type="file"

                      onChange={uploadProfileImage}
                    />
                  </div>
                </>
      </FormGroup>
              
            </Form>
          </ModalBody>
        
          <ModalFooter>
            <Button color="primary" onClick={editt}>
              save
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      
    </div>
  )
        
}

export default EditProfile
