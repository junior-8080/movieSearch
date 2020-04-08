import React,{Component} from 'react';
import Header from './Header'
import Footer from './Footer'
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
          </Switch>
          <Footer />
      </div>
    )
      
  }

}

export default App;
