import React, { Component } from 'react';
import search from '../images/search.png';
import './ToDoInput.css';

class ToDoInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <form id="inputForm" onSubmit={this.props.handleSubmit}>
          <label>
            To Do:
            <input type="text" value={this.props.value} onChange=
          {this.props.handleChange} />
          </label>
            <input type="submit" value="Add" />
        </form>
    );
  }
}

export default ToDoInput;
