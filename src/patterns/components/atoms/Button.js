import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button className={`todo-button ${this.props.className? this.props.className: ''}`} onClick={this.props.onClick}>
        {this.props.icon ?
          <img src={this.props.icon}/> :
          this.props.text
        }
      </button>
    )
  }
}
