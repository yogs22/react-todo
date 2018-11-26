import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = { todos: [] }
    }

    addTodo = (e) => {
        e.preventDefault();

        let time = this.refs.time.value;
        let activity = this.refs.activity.value;

        this.state.todos.push({ time, activity });
        this.setState({ todos: this.state.todos });

        this.refs.form.reset();
        this.refs.time.focus();

        return false;
    }

    render() {
        return (
          <div className="App">
              <h1>Todo Application</h1>
                <form ref="form">
                  <input type="text" ref="time" placeholder="Time activity" />
                  <input type="text" ref="activity" placeholder="The activity" />
                  <button onClick={ this.addTodo } className="btn btn-primary">Save</button>
                </form>
              <hr />
              <div>
                  <ul>
                      { this.state.todos.map((data, i) =>
                          <li key={i}>
                              <button onClick={ ()=> this.removeTodo(i) } class="btn btn-danger">Delete</button> { data.time } - { data.activity }
                          </li>
                      ) }
                  </ul>
              </div>
          </div>
        );
    }
}

export default App;
