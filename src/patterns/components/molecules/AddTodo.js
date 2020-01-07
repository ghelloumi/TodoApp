import React, { useState } from 'react'
import { useDispatch, useStore } from 'react-redux'

import fetchImage from '../../../services/pictureFetch'
import Input from "../atoms/Input"
import Button from "../atoms/Button"
import { TEXTS, RANDOM_CHARACTERS } from "../../../config/constants"
import { addTodoAction } from "../../../Redux/actions"

const AddTodo = () => {
  const [addTodoText, setAddTodoText] = useState("")
  const dispatch = useDispatch()
  const store = useStore()

  const handleAddTodoTextChange = (e) => {
    setAddTodoText(e.target.value)
  }

  const handleAddTodo = async (randomTodo) => {
    console.log('kkkkkkkkkkk',randomTodo)
    if (!addTodoText.trim() && !randomTodo) {
      return
    }

    let maxId = 0
    if (store.getState().todoList) {
      store.getState().todoList.map((obj) => {
        if (obj.id > maxId) maxId = obj.id
      })

    }

    let randomText = ''
    if (randomTodo !== '') {
      for (let i = 0; i < 20; i++) {
        randomText += RANDOM_CHARACTERS.charAt(Math.floor(Math.random() * RANDOM_CHARACTERS.length))
      }
    }

    try {
      const res = await fetchImage
      dispatch(addTodoAction(randomTodo ? randomText : addTodoText, res.file, maxId + 1))
      setAddTodoText('')
      document.querySelector('.todo-input').focus()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="add-todo">
      <Input placeholder={TEXTS.addTodoPlaceHolder}
             type="text"
             value={addTodoText}
             name="addTodoText"
             onChange={handleAddTodoTextChange}
             onKeyDown={(e) => e.key === 'Enter' ? handleAddTodo() : null}
      />
      <Button className="todo-button-add" text={TEXTS.addTodoButtonText} onClick={() => handleAddTodo()}/>
      <Button className="todo-button-add" text={TEXTS.generateRandomTodo} onClick={() => handleAddTodo(true)}/>
    </div>
  )
}

export default AddTodo
