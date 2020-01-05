import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import fetchImage from '../../../services/pictureFetch'
import Input from "../atoms/Input"
import Button from "../atoms/Button"
import { TEXTS } from "../../../config/constants"
import { addTodoAction } from "../../../Redux/actions"

const AddTodo = () => {
  const [addTodoText, setAddTodoText] = useState("")
  const dispatch = useDispatch()

  const handleAddTodoTextChange = (e) => {
    setAddTodoText(e.target.value)
  }

  const handleAddTodo = async () => {
    if (!addTodoText.trim()) {
      return
    }

    try {
      const res = await fetchImage
      dispatch(addTodoAction(addTodoText, res.file))
      setAddTodoText('')
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
             onChange={handleAddTodoTextChange}/>
      <Button className="todo-button-add" text={TEXTS.AddTodoButtonText} onClick={handleAddTodo}/>
    </div>
  )
}

export default AddTodo
