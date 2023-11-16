import React from 'react';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import PageNotFound from './PageNotFound.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function SimpleWebRouting(){
    return(
<>
<Router> 
<nav>
     <ul>
        <li> <Link to="/">Home</Link> </li>
        <li><Link to="contact">Contact Us </Link></li>
        <li><Link to='/news'>  News </Link></li>
     </ul>
</nav>
 <Routes>
   <Route path= "/" exact Component={Home}/>
   <Route path= "/contact" Component={Contact}/>
   <Route path='*'Component={PageNotFound}/>

   </Routes>
</Router>
</>

    )
};
export default SimpleWebRouting;