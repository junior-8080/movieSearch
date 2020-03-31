import React  from  'react'
import Searchbar from './Search.js'
import logo from "./logo4.jpeg"

function Home(props){
    
    const divStyle={
        width:"100%",
        maxHeight:"auto"
    }
    const spanStyle={
        fontSize:"smaller"
    }
    return(
        <div  className="home">
            <div style={divStyle}>
                 <img src={logo} s width="100%" height="80%" alt="Home-image"/>
            </div>
            <div style={divStyle}>
                 <Searchbar />
                 <span style={spanStyle}>Search for your favorite movies</span>
            </div>
            
        </div>
    )
}

export default Home