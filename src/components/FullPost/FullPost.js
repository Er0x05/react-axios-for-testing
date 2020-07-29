import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null
    }

    deleteHandler = () => {
        axios.delete('http://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then( res => {
                console.log(res)
                this.setState({ post: null })
            })
            .catch( err => {
                console.log(err)
            })
    }

    componentDidUpdate(){
        if (this.props.id){
            if ( !this.state.post || ( this.state.post && this.state.post.id !== this.props.id )){
                axios.get('http://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then( res => {
                        this.setState({ post: res.data })
                    })
                    .catch( err => {
                        console.log(err)
                    })
            }
        }
    }

    render () {
        let post = <p style={{ textAlign:"center"}}>Please select a Post!</p>;
        if (this.props.id){
            post = <p style={{ textAlign:'center'}}>Loading...</p>
        };
        if (this.state.post){
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button onClick={this.deleteHandler} className="Delete">Delete</button>
                    </div>
                </div>
            )
        }
        
        return post;
    }
}

export default FullPost;