import React from "react";

function App() {
  const [todoForToday, setTodoForToday] = React.useState({
    title: "do leetcode",
    description: "do atleast 2 querstions of leetcode",
    id: 1
  });

  React.useEffect(() => {
    console.log("render");
      setInterval(() => {
        setTodoForToday({
          title: "do leetcode" + Math.random(),
          description: "do atleast 2 querstions of leetcode",
          id: 1
        })
      }, 1000)
  },[]);

  return (
    <div>
      {todoForToday.title}
      <br/>
      {todoForToday.description}
    </div>
  )

}

export default App
