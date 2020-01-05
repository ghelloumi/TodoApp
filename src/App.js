import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Title from "./patterns/components/organisms/Title"
import Container from "./patterns/components/organisms/Container"
import configureStore from "./Redux/configureStore"

const store = configureStore()

export default class App extends Component {
  componentWillMount() {
    let previousTodoListState = store.getState().todoList
    store.subscribe(() => {
      const {todoList} = store.getState()
      if (previousTodoListState !== todoList) {
        previousTodoListState = todoList
        console.log(todoList)
        localStorage.setItem('todoList', JSON.stringify(todoList))
      }
    })
  }

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
