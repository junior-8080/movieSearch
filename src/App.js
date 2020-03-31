import React,{Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import MovieList from './Movielist'
import MovieInfo from './MovieInfo'
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import './index.css'
let api_key = process.env.REACT_APP_API_KEY

class App extends Component{
  constructor(){
    super()
    this.state={
      value:"",
      isLoading:false,
      error:"",
      movie:[],
      aMovie:{}
    }
  
  }
  handleChange =  (event) =>{
    this.setState({
      value:event.target.value
    })
  }
  handleSubmit = (event)=>{
    event.preventDefault()
    this.setState({
      isLoading:true
    })
    this.state.value.length !== 0 ?
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${this.state.value}`)
      .then(res=> res.json())
      .then(data => 
        this.setState({
        movie:data.results,
       isLoading:false
      }))
      :
      this.setState({
        isLoading:false,
        error:"No result found"
      })
  }
  handleClick =(id)=>{
       fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
        .then(res => res.json())
        .then(data=>{
          // this.setState({
          //   aMovie:data
          // })
          console.log(data)
        })
  }
  componentDidUpdate(){
        console.log('updated')
  }
  render(){
    return(
      <div className="container">
        <Router>
        <Header handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value} />
        <MovieList movies={this.state.movie} isLoading={this.state.isLoading} error={this.state.error} handleClick={this.handleClick} />
        <Footer />
          <Switch>
             <Route  path="/movie/:id"  render={() => <MovieInfo data={this.state.aMovie} />} />
          </Switch>
        </Router>
      </div>
    )
      
  }

}

export default App;
