import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
})

const appliedMiddleWare = applyMiddleware(loggerMiddleware)

const initialState = {
  todoList: JSON.parse(localStorage.getItem('todoList'))
}

export default function configureStore(preloadedStore = initialState.todoList ? initialState: undefined) {
  return createStore(
    reducers,
    preloadedStore,
    appliedMiddleWare,
  )
}
