import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectId: null,
        errStatus: false
    };
        
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                const posts = res.data.slice(0,4).map(post=>({...post,author: 'Max'}))
                this.setState({ posts: posts });
            })
            .catch(err=>{
                console.log(err)
                this.setState({ errStatus: true })
            })
    }

    changeSelectedId = (id) =>{
        this.setState({ selectId: id })
    }

    render () {
        const posts = this.state.posts.map( post=> {
            return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author} 
                clicked={()=>this.changeSelectedId(post.id)} />;
        })
        let sections = null;
        if (!this.state.errStatus){
            sections = <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        }

        if (this.state.errStatus){
            sections = <p style={{textAlign: 'center'}}>Got Error!</p>
        }
        
        return (
            <div>
                {sections}
            </div>
        );
    }
}

export default Blog;