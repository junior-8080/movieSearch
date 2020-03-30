import React from 'react'
import Movie from './Movie'
import './index.css'

function Movielist(props){
    const loading ={
        marginTop:"40%",
        color:"red"
    }
    const noResult = {
        fontStyle:"italize",
        textShadow:" 0px 2px 5px red",
        textSpacing:"1.5px"
    }
    return(
        props.isLoading ?
        <h1 style={loading}>Loading</h1>
        :
        <div className="movie-list">
                {
                 props.movies.length > 0?
                 props.movies.map((movie,i)=>{
                    return <Movie key={i} movie={movie}/>
                 })
                 :
                <h2 style={noResult}>{props.error}</h2>
                } 
        </div>        
    )
}
export default Movielist