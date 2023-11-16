import Home from './Home.jsx';
import About from "./About.jsx";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function SimpleRouter (){
    return(
<>
<Router> 
<nav>
   <ul>
    <li> <Link to="/">Home</Link> </li>
    <li><Link to="/about">About</Link></li>
  </ul>
</nav>
 <Routes>
   <Route path= "/" exact Component={Home}/>
   <Route path= "/about" Component={About}/>
   </Routes>
</Router>
</>

    )
};
export default SimpleRouter;