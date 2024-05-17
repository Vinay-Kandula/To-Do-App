import React, { useState } from "react";
import Listitem from "./Listitem";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const handleClick = () => {
    setText("");
    setList([...list, text]);
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  function deleteItem(id){
    const newItems = list.filter((item,index) => (
     index !== id
    ));
    const image = 
    setList(newItems);
  }
  function markdone(text){
    
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={text} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item,index) => {
            return <Listitem key={index} id={index} text={item} deletefun={deleteItem} md={markdone}/>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;