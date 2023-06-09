import React, { useState, useContext, useEffect } from "react";
import Task from "./components/task";
import Footer from "./components/footer";

export default function Main() {
  
  
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [count, setCount] = useState(0);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  useEffect(() => {setTasks(JSON.parse(localStorage.getItem("tasks")))},[]);
  const listTask = tasks

    .filter((task) => {
      switch (filter) {
        default:
          return true;
        case "active":
          return task.checked === false;
        case "completed":
          return task.checked === true;
      }
    })
    .map((item, index) => (
      <Task
        id={index}
        text={item.text}
        checked={item.checked}
        onEdit={editTask}
        onDelete={deleteTask}
        updateStatus={updateStatusTask}
      ></Task>
    ));

  const addTask = (e) => {
    console.log(e.key);
    if (!(e.key === "Enter" || e.key === null)) return null;
    const text = e.target.value;
    e.target.value = "";
    if (text)
      setTasks([...tasks, { id: Date.now(), text: text, checked: false }]);

    setCount(tasks.filter((task) => task.checked !== true).length);
  };

  function editTask() {
    console.log("edit");
  }

  function deleteTask(id) {
    console.log("delete");
    const newTasks = tasks.filter((task) => (task.id = id));
    setTasks(newTasks);
  }

  function updateStatusTask(id) {
    let newTasks = Object.assign([], tasks);
    newTasks[id].checked = !newTasks[id].checked;
    setTasks(newTasks);
    setCount(tasks.filter((task) => task.checked !== true).length);
  }

  return (
    <>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onBlur={addTask}
        onKeyDown={addTask}
      />
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">{listTask}</ul>
      <Footer
        count={tasks.filter((task) => task.checked !== true).length}
        activeFilter={filter}
        onChooseFilter={setFilter}
      ></Footer>
    </>
  );
}
