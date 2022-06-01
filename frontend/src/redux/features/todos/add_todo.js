import React, {useEffect, useState} from 'react';

import { useDispatch } from "react-redux";
import {
  saveNewTodo,
} from './todosSlice'
import { CSRFToken } from '../csrf_token';
const axios = require('axios');



export default function AddNewTodo() {

    const [ newTodo, setNewTodo ] = useState();
    
    return (
        <>
        <AddNewTodoActual newTodo={newTodo} setNewTodo={setNewTodo} />
        </>

    )
}
 function AddNewTodoActual(props) {

    //const dispatch = useDispatch();

    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
  
    const [ completed, setCompleted ] = useState(false)
    const [ status, setStatus ] = useState('idle')
    const [ id, setID ] = useState()

    
    console.log("Console.log before function")
    console.log(props.newTodo)

    const handleSubmit = () => {
        const todo = props.newTodo

        //setStatus('loading')
        props.setNewTodo({title, description, completed, id: Date.now()})
        //title.trim()
        //description.trim()
        //console.log(status)
        console.log(props.newTodo);
      
    }
    const handleSubmitOverhead = () => {
        handleSubmit()
        //dispatch(handleSubmit);
    }
    console.log(props.newTodo)


    let isLoading = status === 'loading'
    console.log("Final console.log")
    console.log(props.newTodo)




  return (
    <>
            <form onSubmit={handleSubmitOverhead}>
            <CSRFToken />
                 <input
                    className="new-todo"
                    placeholder='title'
                    value={!title ? "" : title}
                    onChange={e => setTitle(e.target.value)}
                    disabled={isLoading}
                    />
                <input
                    className="new-todo"
                    placeholder='todo description'
                    value={description === null ? "" : description}
                    onChange={e => setDescription(e.target.value)}
                    disabled={isLoading}
                    />
                <button type="submit">Submit</button>

            </form>
    </>
  )
}
