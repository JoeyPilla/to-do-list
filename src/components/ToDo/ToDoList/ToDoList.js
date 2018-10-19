import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li id={this.props.item} onClick={this.props.handleDelete}>
        {this.props.item}
      </li>
    );
  }
}

class ToDoList extends Component {

  render() {
    var handleDelete = this.props.handleDelete;
    const listItems = this.props.items.map(function(item, i) {
      return (
        <ToDo
          key={i}
          item={item}
          handleDelete = {handleDelete}/>
      )
    });
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default ToDoList;
