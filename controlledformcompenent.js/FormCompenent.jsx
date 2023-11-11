import React,{ useState} from "react";


function FormComponent(){
    const [name,setname]=useState('');
    const [email,setemail]=useState('');

  function onchange(event){
    setname(event.target.value);
  }      
   function onemailchange(event ){
    setemail(event.target.value);
   }
   return(
   <>
   name:
  <input type="text"onChange={(e)=>onchange(e)} /> 
   email:
   <input type="email"onChange={(e)=>onemailchange(e)}/>
   <p>output name: {name} </p>
   <p>output email: {email}</p>
   </>

   );
}
export  default FormComponent;