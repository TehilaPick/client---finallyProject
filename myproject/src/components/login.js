import React, { useEffect, useState } from 'react'
import Toast from 'react-bootstrap/Toast';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './login.css';

export default function Login(){

    const [email, setEmail]= useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [cnt, setCnt] = useState(0);

    const login= (email)=>{
     
    }
  
    const handleChange= (eve) =>{
      setEmail(eve.target.value);
      //console.log(email)
    }
  
    const handleSubmit =async (event)=> {
      event.preventDefault();
      const response = await fetch('http://localhost:3001/login/'+email);
      await response.json().then(res => {
        localStorage.setItem('contactName',res.contactName)
        const contactName= localStorage.getItem('contactName');
        console.log(contactName);
        setIsLogin(true)
        //console.log(res);
      });
      
    }
  return(<>

      {!isLogin && cnt===0 &&<form className="form" onSubmit={handleSubmit}>
        <InputGroup  className="p-3 ">
        <FormControl 
         value={email} onChange={handleChange} 
         placeholder="אימייל"
         aria-label="Default"
        />
        </InputGroup>
        <Button className="m-3" type="submit" variant="primary">התחבר</Button>
        </form>
        }

        {isLogin &&
           <div className="loginInfo"> <Button variant="outline-danger" onClick={()=>{setIsLogin(false); setCnt(1)}} className="x">X</Button>התחברת בהצלחה</div>
        } 
       
  </>)
}