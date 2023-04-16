import React, { useState } from "react";

function Filter({ text, onClick, active }) {
  return (
    <li onClick={onClick}>
      <a href={"#/" + text} className={active ? "selected" : null}>
        {text}
      </a>
    </li>
  );
}

function Task({ id, text, checked, onEdit, onDelete, updateStatus }) {
  return (
    <li key={id} id={id}>
      <div className="view">
        <input
          className="toggle"
          onChange={(e) => {
            updateStatus(id);
          }}
          type="checkbox"
          defaultChecked={checked}
        />
        <label onDoubleClick={onEdit}>{text}</label>
        <button
          className="destroy"
          onClick={() => {
            onDelete(id);
          }}
        ></button>
      </div>
    </li>
  );
}

export default function Main({oldTasks}) {
  const [tasks, setTasks] = useState(oldTasks);
  const [filter, setFilter] = useState("all");
  const [count, setCount] = useState(0);

  localStorage.setItem("tasks",JSON.stringify(tasks));

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
    const newTasks = tasks.filter((task)=>task.id=id);
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
      <footer className="footer">
        <span className="todo-count">{tasks.filter((task) => task.checked !== true).length} item left</span>
        <ul className="filters">
          <Filter
            text={"all"}
            onClick={() => {
              setFilter("all");
            }}
            active={(filter==="all")??true}
          />
          <Filter
            text={"active"}
            onClick={() => {
              setFilter("active");
            }}
            active={(filter==="active")??true}
          />
          <Filter
            text={"completed"}
            onClick={() => {
              setFilter("completed");
            }}
            active={(filter==="completed")??true}
          />

        </ul>
        <button className="clear-completed" style={{ display: "none" }}>
          Clear completed
        </button>
      </footer>
    </>
  );
}
