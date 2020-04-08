import React, { Component } from "react"
import  * as contentful from "contentful"
import {Link} from "react-router-dom"


let client = contentful.createClient({
    space:"zymvofoqzatx",
    accessToken:"Nmp5brYY9IP6W3sb_r-tKrXkTeAARIwrgp71JxWLB68"
})


class Recent extends Component{
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
            if(item.sys.contentType.sys.id ==="blogPost"){
                return(
                <div className="recent-post"  key={i}>
                       <div className="recent-text">
                            <span className="tag">{item.fields.tags[0]}</span>
                            <h3>{item.fields.title}</h3>
                       </div>
                       <div className="recent-image">
                             <img src={item.fields.heroImage.fields.file.url}  width="100px" heigth="100px"/>
                       </div>
                </div>
                )
            }
        })
         return(
             <div className="recently">
                 <h3>Recent Post</h3>
                 <hr />
                {post}
             </div>
         )
    }
}
export default Recent
