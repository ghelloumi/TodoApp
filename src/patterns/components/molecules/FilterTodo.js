import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ACTIONS, TEXTS } from "../../../config/constants"

import Button from "../atoms/Button"
import { setVisibilityFilter } from "../../../Redux/actions"

class FilterTodo extends Component {
  render() {
    const {onClick, active} = this.props

    return (
      <div className="todo-filter">
        <p>Filter Todos</p>
        <Button className="todo-button-filter" style={active === ACTIONS.SHOW_IN_PROGRESS? {background: 'red'}:{}} text={TEXTS.inProgress} onClick={() => onClick(ACTIONS.SHOW_IN_PROGRESS)}/>
        <Button className="todo-button-filter" style={active === ACTIONS.SHOW_DONE? {background: 'red'}:{}} text={TEXTS.done} onClick={() => onClick(ACTIONS.SHOW_DONE)}/>
        <Button className="todo-button-filter" style={active === ACTIONS.SHOW_ALL? {background: 'red'}:{}} text={TEXTS.allTodo} onClick={() => onClick(ACTIONS.SHOW_ALL)}/>
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
