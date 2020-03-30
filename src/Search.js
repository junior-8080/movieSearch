import React from 'react'
import './index.css'

function Searchbar(props){
    const style = {
        marginLeft:"20%",
        width:"100%"
    }
    return(
        <form style={style} className="search" onSubmit={props.handleSubmit}>
            <input type="text"  value={props.value} onChange={props.handleChange}/>
            <button type="submit" onClick={props.handleSubmit}>Search</button>
        </form>
    )

}
export default Searchbar