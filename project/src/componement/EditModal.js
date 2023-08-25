import React, { useState } from "react";
import axios from "axios";
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

import { editmedcontact,getmedcontacts } from "../redux/action";



const EditModal = ({el}) => {
  const [modal, setModal] = useState(false);
  const[name,setName]=useState(el.name)
  const[email,setEmail]=useState(el.email)
  const[phone,setPhone]=useState(el.phone)
  const [image, setImage] = useState();
    const [uploading, setUploading] = useState(false);
  const toggle = () => {
    setModal(!modal);

  };
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
  const dispatch = useDispatch();

  const editt=()=>{
    dispatch(getmedcontacts)
    dispatch(editmedcontact(el._id,{name,email,phone,image}))
    setModal(!modal)
  }
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        edit contact{" "}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>edit modal</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">name</Label>
              <Input
         value={name}
         onChange={(e)=>setName(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">phone</Label>
              <Input
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
              <> {image ? (
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
  );
};

export default EditModal;