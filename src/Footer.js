import React from 'react'
import logo from './mdb.png'
import './footer.css'
function Footer(props){
    let image ={
        width:"40px",
        heigth:"auto",
        flexSkrink:1
        // borderRadius:"50%"
    }
    return(
        <div className="footer">
            <p>Copy Right &copy;The movie Db</p>
            <p className="plast">Visit for your movie Api</p>
        </div>
    )
}
export default Footer