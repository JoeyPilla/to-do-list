import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import ToDoList from '../components/ToDo/ToDoList/ToDoList';
import ToDoInput from '../components/ToDo/ToDoInput/ToDoInput';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        arr: [],
        value: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      this.setState({
        arr: this.state.arr.concat(this.state.value),
        value: ''
      });
      event.preventDefault();
    }

    handleDelete(event) {
      var temp = this.state.arr;
      temp.splice(temp.indexOf(event.target.id.toString()), 1);
      event.preventDefault();
      this.setState({
        arr: temp
      });
    }

  render() {
    return (
      <div className="App">
        <ToDoInput
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          value = {this.state.value}/>
        <ToDoList
          items = {this.state.arr}
          handleDelete = {this.handleDelete}/>
      </div>
    );
  }
}

export default App;
