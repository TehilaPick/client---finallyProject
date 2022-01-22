import React, { useEffect, useState } from "react";


export default function AddBussines(){

    const [isLogin,setIsLogin] = useState(false)
    //const 
    useEffect(()=>{
        const contactName= localStorage.getItem('contactName');
        if(contactName!=''){
           setIsLogin(true)
        }
        else{
            setIsLogin(false)
        }
    },[])
    return(<>{isLogin ? <div>אתה מחובר למערכת ויכול להוסיף עסק</div>:
    <div>לא התחברת למערכת</div>}</>)
}

