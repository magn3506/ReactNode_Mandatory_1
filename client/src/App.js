import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// PAGES
import Home from "./pages/home/Home";
import About from "./pages/about/About";

// LAYOUT COMPONENT
import Layout from "./components/layout/layout";

// MAIN STYLE

import './Reset.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/About" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
    );
  }


}

export default App;
