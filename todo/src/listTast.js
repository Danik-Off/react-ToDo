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

function Task({ id, text, cheked, onEdit, onDelete, updateStatus }) {
  return (
    <li key={id} data-id={id}>
      <div className="view">
        <input
          className="toggle"
          onChange={updateStatus}
          type="checkbox"
          defaultChecked={cheked}
        />
        <label onDoubleClick={onEdit}>{text}</label>
        <button className="destroy" onClick={onDelete}></button>
      </div>
    </li>
  );
}

export default function Main() {
  const [tasks, setTasks] = useState([
    { text: "hello", cheked: false, editTask, deleteTask },
  ]);
  const [filter, setFilter] = useState("all");

  const listTask = tasks
    .filter((task) => {
      switch (filter) {
        default:
          return true;
        case "active":
          return task.cheked === false;
        case "completed":
          return task.cheked === true;
      }
    })
    .map((item, index) => (
      <Task
        id={index}
        text={item.text}
        cheked={item.cheked}
        onEdit={editTask}
        onDelete={deleteTask}
        updateStatus={updateStatusTask}
      ></Task>
    ));

  const addTask = (e) => {
    const text = e.target.value;
    e.target.value = "";
    if (text)
      setTasks([
        ...tasks,
        { id: Date.now(), text: text, cheked: false },
      ]);
  };
  function editTask() {
    console.log("edit");
  }
  function deleteTask() {
    console.log("delete");
  }
  function updateStatusTask(e) {
    const view =e.target.parentNode;
    const li = view.parentNode;
    console.log(li.data,"delete");
  }

  return (
    <>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onBlur={addTask}
      />
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">{listTask}</ul>
      <footer className="footer">
        <span className="todo-count">
          {tasks.filter((task) => task.cheked === false).length} item left
        </span>
        <ul className="filters">
          <Filter
            text={"all"}
            onClick={() => {
              setFilter("all");
            }}
          />
          <Filter
            text={"active"}
            onClick={() => {
              setFilter("active");
            }}
          />
          <Filter
            text={"completed"}
            onClick={() => {
              setFilter("completed");
            }}
          />
        </ul>
        <button className="clear-completed" style={{ display: "none" }}>
          Clear completed
        </button>
      </footer>
    </>
  );
}
