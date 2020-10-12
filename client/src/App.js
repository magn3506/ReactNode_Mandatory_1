import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// PAGES
import HOME from "./pages/home/Home";
import ABOUT from "./pages/about/About";
import CREATE_PAGE from "./pages/create_todo/Create_todo";
import UPDATE_PAGE from "./pages/update_todo/Update_todo";

// !  DELETE ME
import TEST_PAGE from "./pages/test_page/test_page"

// MAIN STYLE
import './styles/reset/Reset.css';
import "./styles/colors/Colors.css";
import "./styles/typography/Typography.css";
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/About" component={ABOUT} />
          <Route path="/CreateTodo" component={CREATE_PAGE} />
          <Route path="/UpdateTodo/:id" component={UPDATE_PAGE} />
          <Route path="/TestPage" component={TEST_PAGE} />
          <Route path="/" component={HOME} />
        </Switch>
      </Router>
    );
  }


}

export default App;
