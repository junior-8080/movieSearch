import React from 'react'
import './index.css'
import logo from "./logo3.jpeg"

function MovieList(props){
    // let span ={
    //   fontSize:"smaller",
    //   textAlign:"center"
    // }
    return(
      <div className="dropDown">
        {
           props.movie.poster_path? <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.title} className="cardImage"/> :  <img src={logo} className="cardImage" alt={props.movie.title}  />
        }
        <h6>{props.movie.title}</h6>
      </div>
    )
}

export default MovieList