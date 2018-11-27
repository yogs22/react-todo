import React, { Component } from 'react';
import Header from './Header';
import { CSSTransitionGroup } from 'react-transition-group';
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

    removeTodo = (i) => {
        this.state.todos.splice(i, 1);
        this.setState({ todos: this.state.todos });
    }

    render() {
        return (
          <div className="App">
                <Header />
                <form ref="form">
                  <input type="text" ref="time" placeholder="Time activity" />
                  <input type="text" ref="activity" placeholder="The activity" />
                  <button onClick={ this.addTodo } className="btn btn-primary">Save</button>
                </form>
              <hr />
              <div>
                  <ul>
                      <CSSTransitionGroup
                        transitionName="animasi"
                        transitionEnter="{true}"
                        transitionEnterTimeout={500}
                        transitionLeave={true}
                        transitionLeaveTimeout={500}>
                          { this.state.todos.map((data, i) =>
                              <li key={i}>
                                  <button onClick={ ()=> this.removeTodo(i) } class="btn btn-danger">Delete</button>&nbsp; { data.time } - { data.activity }
                              </li>
                          ) }
                      </CSSTransitionGroup>
                  </ul>
              </div>
          </div>
        );
    }
}

export default App;
