import React, {useState} from "react";

function EventHandlingApp(){
    const [paragraph, setparagraph]=
    useState('functional component');

function onClick(){
    setparagraph('Button clicked');
}
 return (
 <>
 <p>{paragraph}</p>
 <button onClick={onClick}>clickme</button>
 </>
 ); 
}
export default EventHandlingApp;