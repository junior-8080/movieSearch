import React,{Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import MovieList from './Movielist'
import MovieInfo from './MovieInfo'
import {Link,Switch, Route} from "react-router-dom"
import Home from "./Home"
import './index.css'

class App extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className="container">
        <Header />
          <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/list" exact component={MovieList} />
            <Route  path="/list/:id" component={MovieInfo} />
          </Switch>
          <Footer />
      </div>
    )
      
  }

}

export default App;
