import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addItem = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editIndex !== null) {
      const updated = [...items];
      updated[editIndex] = input;
      setItems(updated);
      setEditIndex(null);
    } else {
      setItems([...items, input]);
    }
    setInput("");
  };

  const editItem = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Simple CRUD App</h2>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
        />
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => editItem(index)}>Edit</button>{" "}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
