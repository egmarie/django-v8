var React = require('react');
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import TodoList from './redux/features/todos/item_list'
import AddNewTodo from './redux/features/todos/add_todo'

function App() {
    return(
    <>
    <BrowserRouter>
      <header className="bg-light pt-3">
        <div className="container">
          <h1 className="display-1">Redux on Django Foundation</h1>
          <ul className="nav nav-tabs">
          <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add-todo" className="nav-link">
                Add todo
              </Link>
            </li>

          </ul>
        </div>
      </header>

      <div className="container p-0">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/add-todo" element={<AddNewTodo />} />
        </Routes>
      </div>

      <footer className="border-top pt-3">
        <p className="small text-center text-muted">
          <Link className="text-muted mr-1 p-3 footerLinks" to="/">
              Home
          </Link>
          <Link className="text-muted ml-1 p-3 footerLinks" to="add-todo">
            Add todo
          </Link>
        </p>
      </footer>
    </BrowserRouter>

        </>
    )}



  export default App;



/*
<Route path=":todoId" element={<Item />} />
<Route path="add-new" element={<AddItem />} />
*/