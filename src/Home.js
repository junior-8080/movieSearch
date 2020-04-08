import React,{Component} from 'react';
import {Link,Switch, Route} from "react-router-dom"
import  * as contentful from "contentful"
import './index.css'
import Category from './Category';
import Allpost from './Allpost';
import Social from './Social';

let  client = contentful.createClient({
    space:"zymvofoqzatx",
    accessToken:"Nmp5brYY9IP6W3sb_r-tKrXkTeAARIwrgp71JxWLB68"
})
class App extends Component{
  constructor(){
    super()
    this.state={
      articles:[]
    }

  }

  render(){

    return(
      <div className="container">
        <nav className="navs">
            <ul >
              <Link className="link">
                 <li className="list">Logo</li>
              </Link>
              <Link className="link">
                 <li className="list">Feature</li>
              </Link>
              <Link className="link">
                 <li className="list">Category</li>
              </Link>
              <Link className="link">
                 <li className="list">Et</li>
              </Link>
            </ul>
        </nav>
        <div className="all-content">
            <Category />
            <div className="content">
                <Allpost />
                <Social />
            </div>
        </div>
        <div className="footer">
            <ul className="list">
                <li className="link">Related</li>
                <li className="link">Features</li>
            </ul>
        </div>
             
      </div>
    )
      
  }

}

export default App;
