import React, { Component } from 'react'
import { connect } from 'react-redux'

import Input from "../atoms/Input"
import Button from "../atoms/Button"
import { ACTIONS, ICONS } from "../../../config/constants"
import { handleCheckTodoAction, handleDeleteTodoAction, handleEditTodoAction } from "../../../Redux/actions"
import Modal from "./Modal"

class TodoList extends Component {

  render() {
    const {todoList, modalParams, handleCheckTodo, handleDeleteTodo, handleEditTodo} = this.props

    return (
      <div className="todo-list">
        <p>Todo List</p>
        <ul>
          {todoList && todoList.map(e => {
            return (
              <li className="todo-item" key={e.id}>
                <Input readOnly value={e.description}/>
                <Button className="todo-button-update-title" icon={ICONS.editIcon}
                        onClick={() => handleEditTodo(e.id)}/>
                <Button className="todo-button-delete" icon={ICONS.deleteIcon}
                        onClick={() => handleDeleteTodo(e.id)}/>
                <Button className="todo-button-check" icon={ICONS.checkIcon} onClick={() => handleCheckTodo(e.id)}/>
              </li>
            )
          })}
        </ul>
        {modalParams.modalVisibility && <Modal/>}
      </div>
    )
  }
}

const getVisibleTodos = (todoList, filter) => {
  switch (filter) {
    case ACTIONS.SHOW_ALL:
      return todoList
    case ACTIONS.SHOW_DONE:
      return todoList.filter(t => t.checked)
    case ACTIONS.SHOW_IN_PROGRESS:
      return todoList.filter(t => !t.checked)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todoList: getVisibleTodos(state.todoList, state.visibilityFilter),
  modalParams: state.modalParams
})

const mapDispatchToProps = dispatch => ({
  handleCheckTodo: id => dispatch(handleCheckTodoAction(id)),
  handleDeleteTodo: id => dispatch(handleDeleteTodoAction(id)),
  handleEditTodo: id => dispatch(handleEditTodoAction(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
