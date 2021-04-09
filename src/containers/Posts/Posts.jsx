import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import "./Posts.css";

export default class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          post.author = "Snowman";
          return post;
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Link to={"/" + post.id}>
            <Post
              title={post.title}
              author={post.author}
              key={post.id}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          </Link>
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}
