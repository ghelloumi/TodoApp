import React, { Component } from 'react'
import { connect } from 'react-redux'

import Input from "../atoms/Input"
import Button from "../atoms/Button"
import { ACTIONS, ICONS } from "../../../config/constants"
import {
  completeEditTodoAction,
  handleCheckTodoAction,
  handleDeleteTodoAction,
  handleEditTodoAction
} from "../../../Redux/actions"
import Modal from "./Modal"

class TodoList extends Component {
  handleEditTodo = (id) => {
    const {handleCloseModal, handleEditTodo} = this.props

    handleEditTodo(id)
    window.addEventListener('click', (e) => {
      const target = e.target
      if (target && target.className.includes('modal-back')) {
        handleCloseModal()
        window.removeEventListener('click', null)
      }
    })

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
          handleCloseModal()
          window.removeEventListener('keydown', null)

      }
    })
  }

  render() {
    const {
      todoList,
      modalParams, handleCheckTodo, handleDeleteTodo
    } = this.props

    return (
      <div className="todo-list">
        {(todoList && !!todoList.length) && <React.Fragment>
          <ul>
            {todoList.reverse().map(e => {
              return (
                <li className="todo-item" key={e.id}>
                  <Input readOnly value={e.description}/>
                  <Button className="todo-button-update-title" icon={ICONS.editIcon}
                          onClick={() => this.handleEditTodo(e.id)}/>
                  <Button className="todo-button-delete" icon={ICONS.deleteIcon}
                          onClick={() => handleDeleteTodo(e.id)}/>
                  <Button className="todo-button-check" icon={ICONS.checkIcon} onClick={() => handleCheckTodo(e.id)}/>
                </li>
              )
            })}
          </ul>
          {modalParams.modalVisibility && <React.Fragment>
            <Modal/>
            <div className="modal-back"/>
          </React.Fragment>}
        </React.Fragment>}
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
  handleEditTodo: id => dispatch(handleEditTodoAction(id)),
  handleCloseModal: () => dispatch(completeEditTodoAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
