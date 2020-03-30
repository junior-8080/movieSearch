import React from 'react'
import logo from './logo2.png'

function Movie(props){

    return(
        <div className="movieCard">
            {
                props.movie.poster_path? <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.title} className="cardImage"/> :  <img src={logo} className="cardImage" alt={props.movie.title}  />
            }
            <div className="movieBody">
                <h5><b>{props.movie.title}</b></h5>
                 <a href="#" >Details</a>
            </div>
        </div>
    )
}
export default Movie