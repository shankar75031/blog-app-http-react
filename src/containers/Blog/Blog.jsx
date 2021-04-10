import React, { Component } from "react";
import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  exact
                  activeClassName="MyActive"
                  activeStyle={{ textDecoration: "underline" }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <Posts />} />
        <Route path="/new-post" render={() => <NewPost />} /> */}

        {/* Switch will only load single matched route */}
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
        </Switch>
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        */}
      </div>
    );
  }
}

export default Blog;
