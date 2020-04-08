import React, { Component } from "react"
import  * as contentful from "contentful"
import {Link} from "react-router-dom"


let client = contentful.createClient({
    space:"zymvofoqzatx",
    accessToken:"Nmp5brYY9IP6W3sb_r-tKrXkTeAARIwrgp71JxWLB68"
})


class Allpost extends Component{
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
            if(item.sys.contentType.sys.id === "blogPost"){
                return(
                <div  className="posts" key={i}>
                    <div style={{backgroundImage:`url(https:${item.fields.heroImage.fields.file.url})`}} className="image">
                            <span className="tag">{item.fields.tags[0]}</span>
                    </div>
                        <div className="post-info">
                            <Link className="link">
                             <h3>{item.fields.title}</h3>
                            </Link>
                            <p className="post-desc">Author:{item.fields.author.fields.name}</p>
                                <p className="post-desc">{item.fields.description}</p>
                        </div>
                </div>
                )
            }
        })
         return(
             <div className="all-post">
                {post}
             </div>
         )
    }
}
export default Allpost