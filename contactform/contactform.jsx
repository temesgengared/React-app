import React, {useState} from "react";
import './contactform.css'
function ContactForm(){
// adding all three states
const [name, setName]= useState("");
const [email, setEmail]= useState("");
const [phone, setPhone]= useState("");
const [nameError, setNameError]= useState("");
const [emailError, setEmailError]= useState("");

function onNameChange(event){
    setName(event.target.value);
}
function onPhoneChange(event){
    setPhone(event.target.value);
    return;
  }
function onEmailChange(event){
    setEmail(event.target.value);
    return;
}
function onSubmit(){
    if (!name){
        setNameError(...nameError,'Name is required');
        return;
    }
    if(!email){
        setEmailError('Email is required');
        return;
    }
   
console.log(`
name: ${name}
email: ${email}
phone: ${phone}`);
}
    return(
        <form>
        name:<input type="text" onNameChange={
        (e)=>onNameChange(e)}/>
        <span> error:{nameError}</span>
        email:<input type="email" onEmailChange={
        (e)=>onEmailChange(e)}/>
        <span> error:{emailError}</span>
       phone number: <input type= "Tel"/>
       <button type="submit" > submit </button>
       </form>
     )
}
export default ContactForm;