import React from "react";

function App() {
  const [todos, setTodoForToday] = React.useState([
    {
      title: " 1 do leetcode",
      description: "do atleast 2 querstions of leetcode",
      id: 1
    },
    {
      title: "2 do leetcode",
      description: "do atleast 2 querstions of leetcode",
      id: 1
    },
    {
      title: "3 do leetcode",
      description: "do atleast 2 querstions of leetcode",
      id: 1
    }
  ]);

  // React.useEffect(() => {
  //   console.log("render");
  //     setInterval(() => {
  //       setTodoForToday({
  //         title: "do leetcode" + Math.random(),
  //         description: "do atleast 2 querstions of leetcode",
  //         id: 1
  //       })
  //     }, 1000)
  // },[]);

  return (
    <dev>
      {
        todos.map((todo) => {
          return (<div>
          {todo.title}
          <br/>
          {todo.description}
          </div>)
        })
      }
    </dev>
    
  )

}

export default App
