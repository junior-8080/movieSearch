import React,{Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import MovieList from './Movielist'
import './index.css'
let api_key = process.env.API_KEY

class App extends Component{
  constructor(){
    super()
    this.state={
      value:"",
      isLoading:false,
      error:"",
      movie:[]
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
  
  componentDidUpdate(){
        console.log('updated')
  }
  render(){
    return(
      <div className="container">
        <Header handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value} />
        <MovieList movies={this.state.movie} isLoading={this.state.isLoading} error={this.state.error} />
        {/* <Footer /> */}
      </div>
    )
      
  }

}

export default App;
