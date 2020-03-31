import React  from  'react'
// import logo from './logo3.jpeg'
import Searchbar from './Search.js'
function Header(props){
    return(
        <div  className="header">
            <h2>Movies</h2>
            <Searchbar  value={props.value} handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
        </div>
    )
}

export default Header;