import React, { Component } from "react";
import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";
import { Link, Route } from "react-router-dom";

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <Posts />} />
        <Route path="/new-post" render={() => <NewPost />} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
