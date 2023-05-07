import "./App.css";
import React, { createContext, useContext, useEffect } from "react";
import Main from "./listTast";
const contextTasks = createContext();
function App() {
  const newTasksJson = localStorage.getItem("tasks");

  let tasks = [];
  if (newTasksJson) {
    tasks = JSON.parse(newTasksJson);
  }



  return (
    <div className="todoapp">
      <h1>todos</h1>

      <section style={{ display: "block" }} className="main">
        <contextTasks.Provider value={tasks}>
          <Main oldTasks={tasks}></Main>
        </contextTasks.Provider>
      </section>
    </div>
  );
}

export default App;
