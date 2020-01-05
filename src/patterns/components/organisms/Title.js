import React, {Component} from 'react'
import { TEXTS } from "../../../config/constants"

export default class Title extends Component{
  render() {
    return (
      <div className="todo-title">
        {TEXTS.title}
      </div>
    )
  }
}
