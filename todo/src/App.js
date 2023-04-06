import "./App.css";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const Task=(props)=>{
    const task = props.task;
    return (
      <li key={task.id}>
        <div class="view">
          <input class="toggle" defaultChecked={task.cheked} type="checkbox" />
          <label>{task.text}</label>
          <button class="destroy"></button>
        </div>
      </li>
    );
  }

  const addTask = (_text, _id = Date.now(), _checkbox = false) => {
    if (_text) {
      const newTask = { id: _id, text: _text, cheked: _checkbox };
      setTasks([...tasks, newTask]);
    }
  };

  const Filters = () => {
    return (
      <ul class="filters">
        <li
          onClick={() => {
            setFilter("all");
          }}
        >
          <a href="#/">All</a>
        </li>
        <li
          onClick={() => {
            setFilter("active");
          }}
        >
          <a href="#/active">Active</a>
        </li>
        <li
          onClick={() => {
            setFilter("completed");
          }}
        >
          <a href="#/completed">Completed</a>
        </li>
      </ul>
    );
  };

  return (
    <div className="App">
      <body class="learn-bar">
        <section class="todoapp">
          <header class="header">
            <h1>todos</h1>
            <input
              class="new-todo"
              placeholder="What needs to be done?"
              onBlur={(e) => {
                addTask(e.target.value);
                e.target.value = "";
              }}
            />
          </header>
          <section style={{ display: "block" }} class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox" />
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
              {tasks.map((item) => (
                <Task task={item}></Task>
              ))}
            </ul>
            <footer class="footer">
              <span class="todo-count">{tasks.length} item left</span>
              <Filters/>
              <button class="clear-completed" style={{ display: "none" }}>
                Clear completed
              </button>
            </footer>
            <div>{filter}</div>
          </section>
        </section>
      </body>
    </div>
  );
}

export default App;
