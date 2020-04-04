import React, { Component } from "react"
import logo from "./logo4.jpeg"
import {Link } from "react-router-dom"
let api_key = process.env.REACT_APP_API_KEY

class  MovieInfo  extends Component{
    constructor(props){
        super(props)
        this.state={
            queryId:props.match.params.id,
            aMovie:{},
            isLoading:false,
            // gener:""
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.queryId}?api_key=${api_key}`)
        .then(res => res.json())
        .then(data=>{
            this.setState({
                aMovie:{...data},
                // gener: data.genres[0].name
            })
            console.log(this.state.aMovie.genres[0])
        })
    }
    render(){
        const divStyle={
            width:"40%",
            height:"90%",
            color:"white",
            marginTop:40,
            filter:"none"
        }
        const divStyle1={
            width:"40%",
            height:"90%",
            color:"white",
            backgroundColor:"#000000",
            marginTop:40,
            filter: "none"

        }

         const overview={
             textAlign:"justify",
             padding:"0px 15px 0px 15px",
             fontSize:14,
             
         }
         const vote ={
            // display:"flex",
            // justifyContent:"space-evenly"
         }
         const link={
             textDecoration:"none"
         }
         const title={
             color:"#00FF00"
            
         }
        return(  
        this.state.aMovie.length !==0 ?
        <div>
        <img src={`https://image.tmdb.org/t/p/w500/${this.state.aMovie.poster_path}`} className="background "/>
        <div  className="home" >
            <div style={divStyle}>
                 {
                    this.state.aMovie.poster_path? <img src={`https://image.tmdb.org/t/p/w500/${this.state.aMovie.poster_path}`}  className="wallpaper" alt="movie-wallpaper" width="100%" height="100%"/> :  <img src={logo} className="wallpaper" alt="movie-wallpaper" width="100%" height="100%" />
                 }
            </div>
            <div style={divStyle1} className="details">
                <h1 style={title}>{this.state.aMovie.title}</h1>
                <p style={overview}>{this.state.aMovie.overview}</p>
                 <div>
                    <label>Release Date:</label><p>{this.state.aMovie.release_date}</p>
                    <label>Popularity:</label><p>{this.state.aMovie.popularity}</p>
                 </div>
                 <div style={vote}>
                 <label><i className="fas fa-heart"> Average Votes:</i></label><p title="average vote">{this.state.aMovie.vote_average}</p>
                 <label><i className="fas fa-heart"> Votes:</i></label><p>{this.state.aMovie.vote_count}</p>
                <label><i>Running Time:</i></label><p>{this.state.aMovie.runtime}</p>

                 </div>
                 <a href={this.state.aMovie.homepage} style={link}>
                         {this.state.aMovie.homepage}
                </a>
            </div>
            </div>
        </div>
        :null
        )
    }
    
}
export default MovieInfo