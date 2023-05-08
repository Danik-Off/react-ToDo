import Filter from "./filter";
import React,{createContext,useContext} from "react";
const FilterContext = createContext(null);
export default function Footer({}) {
    return(  <footer className="footer">
    <span className="todo-count">
      {/* {tasks.filter((task) => task.checked !== true).length} item left */}
    </span>

    <ul className="filters">
      <Filter
        text={"all"}
        onClick={() => {
          setFilter("all");
        }}
        active={filter === "all" ?? true}
      />
      <Filter
        text={"active"}
        onClick={() => {
          setFilter("active");
        }}
        active={filter === "active" ?? true}
      />
      <Filter
        text={"completed"}
        onClick={() => {
          setFilter("completed");
        }}
        active={filter === "completed" ?? true}
      />
    </ul>
    <button className="clear-completed" style={{ display: "none" }}>
      Clear completed
    </button>
  </footer>)
};
