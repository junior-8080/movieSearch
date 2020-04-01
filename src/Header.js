import React  from  'react'
import {Link} from "react-router-dom"
import logo from './logo4.jpeg'
import Searchbar from './Search.js'
function Header(props){
    const h2Style ={
        textDecoration:"none",
        color:"black",
    }
    const pStyle ={
        alignSelf:"center",
        fontSize:"12px",
       
    }
    const logo={
        borderWidth:2,
        borderColor:"#7CFC00",
        borderStyle:"solid",
        padding:10,
        borderRadius:25
    }
    return(
        <div  className="header">
            <Link to="/" style={h2Style}>
                <h2 style={logo}>Movies</h2>
            </Link>
            <p style={pStyle}>Moie Search App</p>
        </div>
    )
}

export default Header;