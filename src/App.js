import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Todo Application</h1>
          <form ref="form" onSubmit="{this.AddTodo}">
              <input type="text" ref="time" placeholder="Time activity" />
              <input type="text" ref="activity" placeholder="The activity" />
              <button type="submit" className="btn btn-primary">Save</button>
          </form>
      </div>
    );
  }
}

export default App;
