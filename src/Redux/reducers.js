import { combineReducers } from 'redux'
import { ACTIONS } from "../config/constants"

const todoList = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...state, {
          id: action.id,
          pictureUrl: action.pictureUrl,
          description: action.addTodoText,
          checked: false
        }
      ]
    case ACTIONS.DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )
    case ACTIONS.TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, checked: !todo.checked}
          : todo
      )
    case ACTIONS.EDIT_DESCRIPTION:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, description: action.description}
          : todo
      )
    default:
      return state
  }
}

const visibilityFilter = (state = ACTIONS.SHOW_IN_PROGRESS, action) => {
  switch (action.type) {
    case ACTIONS.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const modalParams = (state = ACTIONS.EDIT_TODO, action) => {
  switch (action.type) {
    case ACTIONS.EDIT_TODO:
      return {
        modalVisibility: true,
        modalId: action.id
      }
    case ACTIONS.COMPLETE_EDIT_TODO:
      return {
        modalVisibility: false,
        modalId: null
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  todoList,
  visibilityFilter,
  modalParams
})

export default reducers
