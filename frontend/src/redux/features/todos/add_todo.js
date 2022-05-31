import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  saveNewTodo,
} from './todosSlice'
import CSRFToken from '../csrf_token';
const axios = require('axios');



export default function AddNewTodo() {
        //const navigate = useNavigate()

        const dispatch = useDispatch();
        
        const [ newTodo, setNewTodo ] = useState([]);
    
    return (
        <>
        <AddNewTodoActual newTodo={newTodo} setNewTodo={setNewTodo} />
        </>

    )
}
 function AddNewTodoActual(props) {

    const dispatch = useDispatch();

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ completed, setCompleted ] = useState(false)
    const [ status, setStatus ] = useState('idle')
    const [ id, setID ] = useState()

    
    console.log("Console.log before function")
    console.log(props.newTodo)


        
        //  setTitle("")
        //  setDescription("")
        //  setStatus('idle')

     // dispatch action

    const handleSubmit = () => {
        const todo = props.newTodo

        setStatus('loading')
         
            props.setNewTodo(prev => prev.concat({title, description, completed, id: Date.now()}))
      
        
        title.trim()
        description.trim()
        console.log(status)

      return props.newTodo
            //navigate('/')
    }
    const handleSubmitOverhead = () => {
        dispatch(handleSubmit());
    }

    
       



    let isLoading = status === 'loading'
    console.log("Final console.log")
    console.log(props.newTodo)




  return (
    <>
            <form onSubmit={handleSubmitOverhead}>
                <CSRFToken/>
                 <input
                    className="new-todo"
                    placeholder='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    disabled={isLoading}
                    />
                <input
                    className="new-todo"
                    placeholder='todo description'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    disabled={isLoading}
                    />
                <button onClick={handleSubmitOverhead}>Submit</button>

            </form>
    </>
  )
}
