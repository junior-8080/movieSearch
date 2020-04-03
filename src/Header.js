import React  from  'react'
import {Link} from "react-router-dom"
import logo1 from "./mm2.png"
import Searchbar from './Search.js'
function Header(props){
    const h2Style ={
        textDecoration:"none",
        marginLeft:"10%",
        heigth:10,
        padding: 10,
        width:200
    }
    // const pStyle ={
    //     alignSelf:"justify",
    //     fontSize:"10px" ,
    //     padding:0,
    //     margin:0,
    // }

    return(
        <div  className="header">
            <Link to="/" style={h2Style}>
                {/* <p style={pStyle}>Powered By</p>
                <p style={pStyle}>The Movie DB</p> */}
                <img src={logo1} width="100%" height="50px"/>
            </Link>
        </div>
    )
}

export default Header;