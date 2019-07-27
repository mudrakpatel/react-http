import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMessage: ""
    };
  }

  componentDidMount() {
    //Wrong URL in get method for errorMessage testing
    //Correct URL: https://jsonplaceholder.typicode.com/posts
    axios.get("https://jsonplaceholder.typicode.com/posts1")
    .then(response => {
      //console.log(response);
      this.setState({
        posts: response.data
      });
    }).catch(error => {
      console.log(error);
      this.setState({
        errorMessage: "Error retreiving data!"
      });
    });
  }

  render() {
    const { posts, errorMessage } = this.state;
    return (
      <div>
        <h2>List of posts</h2>
        {
          posts.length ?
          posts.map(post =>
            <div key={post.id}>{post.title}</div>
          ) : null
        }
        {errorMessage ? <div>{errorMessage}</div> : null}
      </div>
    );
  }

}

export default PostList;
