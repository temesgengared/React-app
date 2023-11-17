import { Link } from 'react-router-dom';
function Home(){
    return(
    <>
         <h> Welcome To The Movie Details</h>
         <ul>
            <li><Link to="movies/Leapyear">Leap year </Link></li>
            <li><Link to="/movies/godfather">The God Father </Link></li>
            <li><Link to="/movies/gameofthrones">Game Of Thrones </Link></li>
            </ul>
         </> 
    )
}
export default Home;