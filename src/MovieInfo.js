import React from "react"


function MovieInfo (props){

    return(
            <div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`}  />
                </div>
            <div>
                <p>{props.data.title}</p>
                <p>{props.data.overview}</p>
                <p>{props.data.title}</p>
                <p>{props.data.title}</p>
            </div>
         </div>
    )
}
export default MovieInfo