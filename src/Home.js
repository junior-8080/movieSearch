import React, { Component }  from  'react'
import Searchbar from './Search.js'
import logo from "./logo4.jpeg"
import MovieList from "./MovieList"
let api_key = process.env.REACT_APP_API_KEY

class  Home extends Component{
    constructor(){
        super()
        this.state={
            query:"",
            movies:[]
        }
    }
    handleChange=(event)=>{
        
        this.setState({
            query:event.target.value
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault()
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${this.state.query}`)
            .then(res=> res.json())
            .then(data =>{
                this.setState({
                    movies : data.result
                })
            })
    }
    render(){
        const divStyle={
            width:"100%",
            maxHeight:"auto"
        }
        const spanStyle={
            fontSize:"smaller"
        }
        let movieList = this.state.movies.map((movie,i)=>{
            return <MovieList  key={i}  movie={movie}/>
        })
        return(
            <div  className="home">
                <div style={divStyle}>
                     <img src={logo} s width="100%" height="80%" alt="Home-image"/>
                </div>
                <div style={divStyle}>
                     <Searchbar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                     <span style={spanStyle}>Search for your favorite movies</span>
                     <div>
                            {movieList}
                     </div>
                </div>
                
            </div>
    )
    }
}

export default Home