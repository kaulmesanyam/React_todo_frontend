import React from "react";

function useTodos() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET"
    }).then((resp) => {
      resp.json().then((data) => {
        console.log(data);
        setTodos(data);
      })
    });
  }, []);

  return todos;
}

function App() {
  const todos = useTodos();

  return (
    <dev>
     {todos.map(todo => {
      return <div>
        {todo.title}
        {todo.description}
        <button>Delete</button>
        <br/>
      </div>
     })}
    </dev> 
  )

}

export default App
