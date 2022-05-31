import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


//import { availableColors, capitalize } from '../filters/colors'
import {
  //todoColorSelected,
  //todoDeleted,
  //todoToggled,
  //selectTodoById,
} from './todosSlice'

// Destructure `props.id`, since we just need the ID value
const TodoListItem = ({ id }) => {
  // Call our `selectTodoById` with the state _and_ the ID value
  //const todo = useSelector((state) => selectTodoById(state, id))
  //const { text, completed } = todo

  const dispatch = useDispatch()



  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">

          <button className="destroy" onClick={onDelete}>
            Delete          
            </button>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem