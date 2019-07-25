import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './components/Todos'
import AddToDo from './components/AddToDo'
import about from './components/pages/About'
import Header from './Header'
// import uuid from 'uuid'
import axios from 'axios'

class App extends Component {

    state = {
        todos: []
    }

    componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({ todos: res.data}))
    }

    //toggle complete
    markComplete = (id) => {
      console.log(id)
      this.setState({ todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      }) })
    }

    //Delete todo
    delTodo = (id) => {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => 
       this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
)

    }


    //Add to do
    addToDo = (title) => {
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data]}))
      
    }

  render() {
    console.log(this.state.todos.id)
    return (
      <Router>
        <div className="App">
          <div className="container">
              <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                  <AddToDo addTodo={this.addToDo}/>
                </React.Fragment>
                )} />
              <Route path="/about" component={about} />
          </div>
        </div>
    </Router>
      )
  }
}

export default App;
