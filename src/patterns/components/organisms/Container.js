import React, {Component} from 'react'
import TodoList from "../molecules/TodoList"
import AddTodo from "../molecules/AddTodo"
import FilterTodo from "../molecules/FilterTodo"

export default class Container extends Component{
  render() {
    return (
      <div className="todo-container">
        <AddTodo/>
        <FilterTodo/>
        <TodoList/>
      </div>
    )
  }
}
