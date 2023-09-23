import React from "react";

function App() {
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
