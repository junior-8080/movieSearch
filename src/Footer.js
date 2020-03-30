import React from 'react'
import logo from './mdb.png'
import './footer.css'
function Footer(props){
    let image ={
        width:"50px",
        heigth:"50px",
        borderRadius:"50%"
    }
    return(
        <div className="footer">
            <div>
            <img src={logo} alt="mdb" style={image} />
            <span> Copy Right &copy;The movie Db</span>
            </div>
            
            
        </div>
    )
}
export default Footer