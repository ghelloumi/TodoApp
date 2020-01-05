import editIcon from "../assets/edit.png"
import deleteIcon from "../assets/delete.png"
import checkIcon from "../assets/check.png"
import filterIcon from "../assets/filter.png"
import closeIcon from "../assets/close.png"

export const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_DONE: 'SHOW_DONE',
  SHOW_IN_PROGRESS: 'SHOW_IN_PROGRESS',
  DELETE_TODO: 'DELETE_TODO',
  EDIT_TODO: 'EDIT_TODO',
  COMPLETE_EDIT_TODO: 'COMPLETE_EDIT_TODO',
  EDIT_DESCRIPTION: 'EDIT_DESCRIPTION'
}

export const TEXTS = {
  title: "Welcome to todo app",
  addTodoButtonText: "Add todo",
  generateRandomTodo: "Add random",
  done: "done todos",
  inProgress: "In progress todos",
  allTodo: "All todos",
  description: "Description: ",
  state: "State: ",
  addTodoPlaceHolder: "Add new todo",
  addTodoDescription: "Add Description to todo",
  completeTodo: 'Close Todo',
  reOpenTodo: 'Reopen Todo'
}

export const ICONS = {
  editIcon,
  deleteIcon,
  checkIcon,
  filterIcon,
  closeIcon
}

export const RANDOM_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 "
