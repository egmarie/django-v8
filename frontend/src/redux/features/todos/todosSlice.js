import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'
const axios = require('axios');
let _csrfToken = null;

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
  let data = response.data
  return data
});

export const saveNewTodo = createAsyncThunk('todos/saveNewTodo',
  async (newTodo) => {
    console.log(newTodo)
    const initialTodo = newTodo 
    let dataUrl = `http://localhost:8000/api/todos`
    const response = await axios.post(dataUrl, initialTodo, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'X-CSRFToken': await getCsrfToken(),
      },
        })
    return response.initialTodo
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
