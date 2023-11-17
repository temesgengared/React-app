import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
import Home from './home.jsx';
import MovieDetails from './MovieDetails.jsx';
function MovieInfo (){
    return(
<>
<Router> 
    <Home/>
<Routes>
   <Route path= "/movies/:moviename" Component={MovieDetails}/>
   
   </Routes>
</Router>
</>

    )
};
export default MovieInfo;
