import "./App.css";
import React from "react";
import Main from "./listTast";

function App() {
  const newTasksJson = localStorage.getItem("tasks");
  let tasks = [];
  if(newTasksJson)
  {
    tasks = JSON.parse(newTasksJson) ;
  }
  

  return(
    
      
    
  <div className="todoapp">
    
      <h1>todos</h1>

    <section style={{display: "block"}} className="main">
   <Main oldTasks={tasks}></Main>
   
    </section>
  </div>
  );
}

export default App;


