import { ACTIONS } from "../config/constants"

let nextTodoId = 0

export const addTodoAction = (addTodoText, pictureUrl) => ({
  type: ACTIONS.ADD_TODO,
  pictureUrl,
  id: nextTodoId++,
  addTodoText
})

export const handleCheckTodoAction = id => ({
  type: ACTIONS.TOGGLE_TODO,
  id
})

export const handleDeleteTodoAction = id => ({
  type: ACTIONS.DELETE_TODO,
  id
})

export const handleEditTodoAction = (id) => ({
  type: ACTIONS.EDIT_TODO,
  id
})

export const completeEditTodoAction = () => ({
  type: ACTIONS.COMPLETE_EDIT_TODO
})

export const setVisibilityFilter = filter => ({
  type: ACTIONS.SET_VISIBILITY_FILTER,
  filter
})

export const edirDescriptionAction = (id, description) => ({
  type: ACTIONS.EDIT_DESCRIPTION,
  description,
  id
})
