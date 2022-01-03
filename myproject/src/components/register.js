import React, { useEffect, useState } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './register.css';
import './login.css';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

export default function Register(){
    const [email, setEmail]= useState("");
    const [name, setName]= useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [isRegister, setIsRegister]=useState(0);


    useEffect(()=>{
       setIsRegister(0);
    },[])

    const handleEmailChange= (eve) =>{
        setEmail(eve.target.value);
        console.log(email)
    }

    const handleNameChange =(eve)=>{
        console.log(name);
        setName(eve.target.value);
        
    }

    const handlePasswordChange =(eve)=>{
        setPassword(eve.target.value)
        console.log(password)
    }

    const handlePhoneChange=(eve)=>{
        setPhone(eve.target.value)
    }

    const submit=(event)=>{
       
        axios.post('http://localhost:3001/createNewContact',{
            contactname:  name,
            email: email,
            phone: phone,
            permission: false
        })
        .then(res=>{
            //console.log(res);
            if(res.status == 200){
               setIsRegister(1)
            }
        })

        setEmail(""); setName(""); setPhone("");
        event.preventDefault();

    }


    if(isRegister==0){
      return(
       <Form className="formRegister" onSubmit={submit}>
          
         <Form.Group className="mb-3" controlId="formBasicName">
         <Form.Control type="text" placeholder="שם משתמש"
          value={email} onChange={handleEmailChange}  />
         </Form.Group>
      
         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control type="email" placeholder="אימייל" 
          value={name} onChange={handleNameChange}/>
         </Form.Group>
      
         <Form.Group className="mb-3" controlId="formBasicPhone">
         <Form.Control type="text" placeholder="טלפון" 
          value={phone} onChange={handlePhoneChange} />
         </Form.Group>
      
         <Button variant="primary" type="submit" >
          להרשמה
         </Button>
      </Form>
      )
    }
    if(isRegister ==1){
        return(
         <><div className="loginInfo"><Button variant="outline-danger" onClick={()=>{setIsRegister(2);  }} className="x">X</Button>נרשמת בהצלחה</div> </> 
         )
    }
    else return(
        <> <Redirect to="/home" /></>
    )
}