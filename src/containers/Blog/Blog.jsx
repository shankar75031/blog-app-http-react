import React, { Component } from "react";
import Posts from "../Posts/Posts";
// import NewPost from "../NewPost/NewPost";
import { NavLink, Route, Switch } from "react-router-dom";
import "./Blog.css";
import asyncComponent from "../../hoc/asyncComponent";

const AsyncNewPost = asyncComponent(() => {
  return import("../NewPost/NewPost");
});
class Blog extends Component {
  state = {
    auth: true,
  };
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
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>404 Not Found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
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
