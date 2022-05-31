import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './features/todos/todosSlice'
//import filtersReducer from './features/filters/filtersSlice'


const store = configureStore({
    reducer : rootReducer,
});
export default store;

