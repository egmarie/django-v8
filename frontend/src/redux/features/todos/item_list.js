import React, {useEffect, useState} from 'react';
import {useDispatch , useSelector} from "react-redux";
import { 
  getTodos,
  selectTodos,
  saveNewTodo,
} from './todosSlice'
const axios = require('axios');

let TodoList = () => {

  let dispatch = useDispatch();
    // get the store data from redux
  let todosState = useSelector(selectTodos)


    useEffect(() => {
      dispatch(getTodos()) // dispatch action
  }, [dispatch]);

  // todosState
  

  const renderedListItems = todosState.map((todo) => {
    return <TodoListItem key={todo.id} id={todo.id} title={todo.title} descrip={todo.description} status={todo.completed} />
  }) 

  return (
    <>
    <div className="my-5">
    <h2 className="mb-3">List of Todos</h2>
    <ul className="todo-list m-2">{renderedListItems}</ul>
    </div>
    </>
   
  )
}

function TodoListItem(props) {
  return(
    <>
      <li id={`${props.id}`} className="mb-3">
        <h4>{props.title}</h4>
        <p>{props.descrip}</p>
        <p>Completed: {`${props.status}`}</p>
      </li>

    </>

  )
}



export default TodoList