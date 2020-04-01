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
        console.log()
        const divStyle={
            width:"40%",
            height:"90%",
            margin:"5px",
            borderRadius:"25px"
        }
         const overview={
             textAlign:"justify",
             padding:"0px 15px 0px 15px",
             fontSize:14
         }
         const vote ={
            display:"flex",
            justifyContent:"space-evenly"
         }
         const link={
             textDecoration:"none"
         }
        return(  
        this.state.aMovie.length !==0 ?
        <div  className="home">
            <div style={divStyle}>
                 {
                    this.state.aMovie.poster_path? <img src={`https://image.tmdb.org/t/p/w500/${this.state.aMovie.poster_path}`}  className="wallpaper" alt="movie-wallpaper" width="100%" height="100%"/> :  <img src={logo} className="wallpaper" alt="movie-wallpaper" width="100%" height="100%" />
                 }
            </div>
            <div style={divStyle} className="details">
                <h1>{this.state.aMovie.title}</h1>
                <h6>{this.state.aMovie.release_date}</h6>
                 <div>
                    <p style={overview}>{this.state.aMovie.overview}</p>
                    <a href={this.state.aMovie.homepage} style={link}>
                         {this.state.aMovie.homepage}
                    </a>
                    
                 </div>
                 <div style={vote}>
                    <p title="average vote"><i className="fas fa-heart"> Average:</i> {this.state.aMovie.vote_average}</p>
                    <p><i className="fas fa-heart"> Votes:</i> {this.state.aMovie.vote_count}</p>
                 </div>
                 
            </div>
        </div>
        :null
        )
    }
    
}
export default MovieInfo