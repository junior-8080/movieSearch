import React  from  'react'
import logo from './logo4.jpeg'
import Searchbar from './Search.js'
function Header(props){
    const h2Style ={
    }
    const pStyle ={
        alignSelf:"center",
        fontSize:"12px"
    }
    return(
        <div  className="header">
            <h2 style={h2Style}>Movies</h2>
            <p style={pStyle}>Moie Search App</p>
        </div>
    )
}

export default Header;