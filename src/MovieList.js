import React, { Component } from 'react'
import{Link} from 'react-router-dom'
import './index.css'
import logo1 from "./logo3.jpeg"

function MovieList(props){
  const divStyle={
    width:"40%",
    height:"90%",
}
    return(
      <Link  to={`/list/${props.movie.id}`}  className="dropDown">
        {
          props.movie.poster_path? <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.title} className="cardImage"/> :  <img src={logo1} className="cardImage" alt={props.movie.title}  />
        }
        <h6>{props.movie.title}</h6>
      </Link>
  )
}

    

export default MovieList