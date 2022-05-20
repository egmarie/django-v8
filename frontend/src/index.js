var React = require('react');
var ReactDOM = require('react-dom');
const useState = React.useState;
const useEffect = React.useEffect;
import axios from "axios";

const todoItems = [
  {
    id: 1,
    title: "Go to Market",
    description: "Buy ingredients to prepare dinner",
    completed: true,
  },
  {
    id: 2,
    title: "Study",
    description: "Read Algebra and History textbook for the upcoming test",
    completed: false,
  },
  {
    id: 3,
    title: "Sammy's books",
    description: "Go to library to return Sammy's books",
    completed: true,
  },
  {
    id: 4,
    title: "Article",
    description: "Write article on how to use Django with React",
    completed: false,
  },
]



function App() {
  const [todos, setTodos] = useState([])

  const refreshList = () => {
    axios
      .get("http://localhost:8000/api/todos/?format=json")
      .then((res) => setTodos({ res }))
      .catch((err) => console.log(err));
      console.log(todos)
  };
  
  useEffect(() => {
    refreshList()
  }, []);


  return (
    <>
    <h1>Hello</h1>
    <ul>
      {/* {todos.map(todo =>
      <TodoList todos={todos} todo={todo} id={todo.id} title={todo.title} text={todo.text} completed={todo.completed} />
      )} */}
    </ul>
    </>
  )}

  function TodoList(props) {

    return (
        <li>
          <h6>{props.id}</h6>
          <h4>{props.title}</h4>
          <p>{props.text}</p>
          <p>{props.completed}</p>
        </li>
    )

  }




/*
  const [todos, setTodos] = useState([])

  const [title, setTitle] = useState()
  const [text, setText] = useState()
  const [complete, setComplete] = useState()
  const [id, setID] = useState() 
 
  renderItems = () => {


    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };


  




    return (
        <>
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                >
                  Add task
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
        </>

        )
    } */

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
   module.hot.accept() 
}






