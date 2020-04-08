import React from "react"
import {Link} from "react-router-dom"


function Header(){
    return(
        <nav className="navs">
            <ul >
            <Link  to="/"className="link">
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
    )
  
}
export default Header