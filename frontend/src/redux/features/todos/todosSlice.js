require('axios-debug-log');
import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'
const axios = require('axios');
import { csrftoken } from '../csrf_token'

async function getCsrfToken() {
  if (_csrfToken === null) {
    const response = await axios.get(`http://localhost:8000/api/todos/csrf/`, {
      credentials: 'include',
    });
    const data = await response.json();
    _csrfToken = data.csrfToken;
  }
  return _csrfToken;
}




// TODOSLICE IS THE CRUD FILE FOR THE TODOS LIST
export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  let dataUrl = `http://localhost:8000/api/todos/`
  let response = await axios.get(dataUrl);
  let data = response.data;
  return data
});

export const saveNewTodo = createAsyncThunk('todos/saveNewTodo',
  async (newTodo) => {
    const initialTodo = newTodo;
    await axios({
      method: 'post',
      url: `https://127.0.0.1:8000/api/add-todo`, 
      headers: {
        'Content-Type': 'Application/x-www-form-urlencoded;charset=UTF-8',
        'Accept': 'Application/json; application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': 'http://localhost:8000/api/add-todo',
      },
      data: JSON.stringify(newTodo), 

    }).then((response) => {

        console.log(response.data);

      }).catch((error) => {

        console.log(error);
        //console.log(axios.url);
      });
    return console.log(response.json())
  }
)



const todosAdapter = createEntityAdapter()


  const todosSlice = createSlice({
    name: 'todos',
    initialState : {
      loading: false,
      todos: [],
      errorMessage : null
    },
    reducers : {
      deleteTodo : todosAdapter.removeOne,
      //updateTodo : function (state, action){},
    },
    extraReducers: (builder) => {
      builder.addCase(getTodos.pending , (state , action) => {
        state.loading = true;
    }).addCase(getTodos.fulfilled, (state , action) => {
        state.loading = false;
        state.todos = action.payload;
    }).addCase(getTodos.rejected, (state , action) => {
        state.loading = false;
        state.errorMessage = `Oops! Something goes wrong!`
    })
    },
  })

  export const selectTodos = (state) => state.todos

  //export const {} = todosSlice.actions
  
  export default todosSlice.reducer
