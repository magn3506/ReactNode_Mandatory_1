import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todoes: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:9000/api/todo')
      .then(response => response.json())
      .then(data => this.setState({ todoes: data.todoes }, console.log("fetched data...")));
  }



  render() {

    const listOfTodoes = this.state.todoes.map(todo => {
      return <li key={todo.id}>{todo.todo}</li>
    })

    return (
      <>
        <h1>MY APP</h1>
        <h2>TODO LIST:</h2>
        <ul>
          {listOfTodoes}
        </ul>
      </>
    );
  }


}

export default App;
