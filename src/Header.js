import React  from  'react'
import logo from './logo2.png'
import Searchbar from './Search.js'
function Header(props){
    return(
        <div  className="header">
            <img src={logo} alt="movie-logo"/>
            <Searchbar value={props.value} handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
        </div>
    )
}

export default Header;