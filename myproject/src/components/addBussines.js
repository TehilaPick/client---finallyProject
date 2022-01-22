import React, { useEffect } from "react";


const AddBussines = ()=>{
    //const 
    useEffect(()=>{
        const contactName= localStorage.getItem('contactName');
        console.log(contactName);
    },[])
    return(<></>)
}

export default AddBussines;