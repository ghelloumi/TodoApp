import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ACTIONS, TEXTS } from "../../../config/constants"

import Button from "../atoms/Button"
import { setVisibilityFilter } from "../../../Redux/actions"

class FilterTodo extends Component {
  render() {
    const {onClick, active} = this.props

    const btnEls = [
      {text: TEXTS.inProgress, action: ACTIONS.SHOW_IN_PROGRESS, disabled: active === ACTIONS.SHOW_IN_PROGRESS},
      {text: TEXTS.done, action: ACTIONS.SHOW_DONE, disabled: active === ACTIONS.SHOW_DONE},
      {text: TEXTS.allTodo, action: ACTIONS.SHOW_ALL, disabled: active === ACTIONS.SHOW_ALL},
    ]

    return (
      <div className="todo-filter">
        {btnEls.map(e =>
          <Button
            key={e.text}
            className="todo-button-filter"
            text={e.text} onClick={() => onClick(e.action)}
            disabled={e.disabled}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({active: state.visibilityFilter})

const mapDispatchToProps = (dispatch) => ({
  onClick: (e) => dispatch(setVisibilityFilter(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterTodo)
