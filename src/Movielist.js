import React ,{Component}from 'react'
import Movie from './Movie'
import Search from "./Search"
import './index.css'

class Movielist extends Component{
    constructor(){
        super()
     }
     render(){
       return(
         <div>
           <Movie />
         </div>
       )
     }
   
 }

export default Movielist