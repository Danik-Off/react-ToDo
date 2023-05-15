import Filter from "./filter";
import React from "react";
export default function Footer({ count, onChooseFilter, activeFilter }) {
  const filters = ["all", "active", "completed"];
  console.log("footer")
  return (
    <footer className="footer">
      <span className="todo-count">{count} item left</span>
      <ul className="filters"
      onClick={(e)=>{
        onChooseFilter(
          e.target.innerHTML
        );
      }}
      >
        {filters.map(filter => (
          <Filter text={filter} active={filter === activeFilter ?? true} />
        ))}
      </ul>
      <button className="clear-completed" style={{ display: "none" }}>
        Clear completed
      </button>
    </footer>
  );
}
