
//import counterReducer from './features/counter.feature';
import todosReducer from './features/todos/todosSlice';
//import userListReducer from './features/user-list.feature';

const rootReducer = {
    //counter : counterReducer,
    todos : todosReducer,
    //users : userListReducer
}
export default rootReducer;