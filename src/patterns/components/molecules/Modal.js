import React, { useState } from 'react'
import { useDispatch, useStore } from 'react-redux'

import { completeEditTodoAction, handleCheckTodoAction, edirDescriptionAction } from "../../../Redux/actions"
import Button from "../atoms/Button"
import { ICONS, TEXTS } from "../../../config/constants"

const Modal = () => {
  const dispatch = useDispatch()
  const store = useStore()
  const {modalParams, todoList} = store.getState()

  const modalId = modalParams.modalId
  const todoInfo = todoList.filter(e => e.id === modalId)[0]

  const [todoText, setTodoText] = useState(todoInfo.description)

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value)
  }

  const inputEl = document.querySelector('.todo-modal-content-description > input')

  const handleCompleteEditTodo = () => {
    if (todoText) {
      if (inputEl) {
        inputEl.style.boxShadow = ""
      }
      dispatch(completeEditTodoAction())
      dispatch(edirDescriptionAction(modalId, todoText))
    } else {
      if (inputEl) {
        inputEl.style.boxShadow = "0 0 4px red"
      }
    }
  }

  return (
    <div className="edit-todo-modal">
      <Button className="todo-button-close" icon={ICONS.closeIcon} onClick={handleCompleteEditTodo}/>
      <h2>Edit Todo</h2>
      <div className="todo-modal">
        <div className="todo-modal-picture"><img src={todoInfo.pictureUrl} alt="todo cat"/></div>
        <div className="todo-modal-content">
          <div className="todo-modal-content-description">
            <h4>{TEXTS.description}</h4>
            <input
              placeholder={TEXTS.addTodoDescription}
              type="text"
              value={todoText}
              name="todoDescription"
              onChange={handleTodoTextChange}
            />
          </div>
          <div className="todo-modal-content-state">
            <h4>{TEXTS.state}</h4>
            <Button text={TEXTS[todoInfo.checked ? 'reOpenTodo' : 'completeTodo']} className="todo-button-modal"
                    onClick={() => dispatch(handleCheckTodoAction(modalId))}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
