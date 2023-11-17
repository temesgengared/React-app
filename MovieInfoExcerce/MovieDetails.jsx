import React from "react";
import { useParams } from "react-router-dom";
function MovieDetails(){
    const {moviename}=useParams();
    return (
        <h1>Welcome to {moviename}</h1> 
    )
}
 export default MovieDetails;