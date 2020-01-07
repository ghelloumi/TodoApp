import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Title from "./patterns/components/organisms/Title"
import Container from "./patterns/components/organisms/Container"
import configureStore from "./Redux/configureStore"

const store = configureStore()
let previousTodoListState = store.getState().todoList
store.subscribe(() => {
  const {todoList} = store.getState()
  if (previousTodoListState !== todoList) {
    previousTodoListState = todoList
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }
})

export default class App extends Component {
  render() {
    return (
      <Provider
        store={store}>
        <div className="App">
          <Title/>
          <Container/>
        </div>
      </Provider>
    )
  }
}
