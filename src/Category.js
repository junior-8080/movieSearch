import React, { Component } from "react"
import  * as contentful from "contentful"
import {Link} from "react-router-dom"


let client = contentful.createClient({
    space:"zymvofoqzatx",
    accessToken:"Nmp5brYY9IP6W3sb_r-tKrXkTeAARIwrgp71JxWLB68"
})


class Category extends Component{
    constructor(){
        super()
        this.state={
            category:[]
        }
    }
    componentDidMount(){
        client.getEntries()
        .then(({items})=>{
          console.log(items)
          this.setState({
           category:items
          })
        })
    }
    render(){
        let post = this.state.category.map((item,i)=>{
            if(item.sys.contentType.sys.id ==="category"){
                return(
                <Link className="category-post" style={{backgroundImage:`url(https:${item.fields.categoryImage.fields.file.url})`}} key={i}>
                       <div className="cat-text">
                             <span className="tag">{item.fields.tag}</span>
                            <h3>{item.fields.title}</h3>
                       </div>
                    </Link>
                )
            }
        })
         return(
             <div className="category">
                {post}
             </div>
         )
    }
}
export default Category