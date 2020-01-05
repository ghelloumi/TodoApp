import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const {disabled, className, icon, text} = this.props

    return (
      <button className={`todo-button ${className? className: ''}`} onClick={this.props.onClick} disabled={disabled? disabled: false}>
        {icon ?
          <img src={icon} alt="action icon"/> :
          text
        }
      </button>
    )
  }
}
