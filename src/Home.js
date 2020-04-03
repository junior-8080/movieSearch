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
            movies:[],
            isLoading:false,
            isEmpty:false,
            noResult:false
        }
    }
    handleChange=(event)=>{
        
        this.setState({
            query:event.target.value,
            isEmpty:false,
            noResult:false
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault()
        this.setState({
            isLoading:true,
        })
        this.state.query.length !== 0 ? 
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${this.state.query}`)
            .then(res=> res.json())
            .then(data =>{
                data.results.length !== 0 ?
                this.setState({
                    movies : data.results,
                    isLoading:false,
                    isEmpty:false
                })
                :
                this.setState({
                    movies : data.results,
                    isLoading:false,
                    isEmpty:false,
                    noResult:true
                })
            })
            :
            this.setState({
                movies:[],
                isEmpty: true,
                isLoading:false,
            })
    }
    render(){
        const divStyle={
            width:"40%",
            height:"90%",
        }
        const divStyle1={
            width:"40%",
            height:"90%",
            // backgroundImage:"rgba(0,0,0,0.3);"
        }
        const isLoadingStyle={
            color:"red",
        }
        const homeStyle={
            backgroundImage:`url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize:"100%",
            backgroundPosition:"center"
        }
        let movieList = this.state.movies.length === 0 && this.state.noResult ? <h4 style={isLoadingStyle}>No Result Found</h4>
         :
        this.state.movies.map((movie,i)=>{
            return  <div><MovieList  key={i}  movie={movie}/> <hr /></div>
        })
        
         
        return(
            <div  className="home" style={homeStyle}>
                <div style={divStyle}>
                     <img src={logo}  width="100%" height="100%" className="wallpaper" alt="Home-image"/>
                </div>
                <div style={divStyle1}>
                     <Searchbar handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.query}/>
                     <div className="movies">
                     { this.state.isLoading? <h4 style={isLoadingStyle}>Loading....</h4> :movieList}
                     { this.state.isEmpty? <h4 style={isLoadingStyle}>Enter a query....</h4> :null}
                     </div>
                </div>
            </div>
    )
    }
}

export default Home