import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Blog from "./containers/Blog/Blog";

class App extends Component {
  render() {
    return (
      // Set basename = test if app is served on example.com/test
      // <BrowserRouter basename="/">
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
