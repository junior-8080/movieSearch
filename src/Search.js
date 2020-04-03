import React from 'react'
import './index.css'

function Searchbar(props){
    return(
        <form onSubmit={props.handleSubmit} className="search" >
            <input type="text" value={props.value} onChange={props.handleChange}  placeholder="Enter Movie Title" />
            <button type="submit" onClick={props.handleSubmit}>Search</button>
        </form>
    )

}
export default Searchbar