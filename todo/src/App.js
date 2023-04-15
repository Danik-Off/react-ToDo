import "./App.css";
import React from "react";
import Main from "./listTast";

function App() {

  return(
  <div className="todoapp">
    
      <h1>todos</h1>

    <section style={{display: "block"}} className="main">
   <Main></Main>
   
    </section>
  </div>
  );
}

export default App;
