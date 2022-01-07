import React, { useState } from "react";

function App() {
  const getRandomId = () => Math.random() * 1_000_000_000

  let [inputValue, setInputValue] = useState("");

  let [todoItems, setTodoItems] = useState([
    {
      name: "example1",
      id: getRandomId(),
      completed: false,
    },
    {
      name: "example2",
      id: getRandomId(),
      completed: false,
    },
  ]);

  let deleteTodo = (id) => {
    setTodoItems(
      todoItems.filter((item) => {
        return item.id !== id;
      })
    );
  };

  let completeTodo = (id) => {
    setTodoItems(
      todoItems.map((item) => {
        if (id === item.id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  let addTodo = (e) => {
    e.preventDefault();
    if (!inputValue) return;

    setTodoItems([
      ...todoItems,
      {
        name: inputValue,
        id: getRandomId(),
        completed: false,
      },
    ]);

    setInputValue("")
  };

  let style = (item) => {
    return {
      textDecoration: item.completed ? "line-through" : "none",
    };
  };

  let list = todoItems.map((item) => {
    return (
      <li key={item.id} style={style(item)}>
        <input type="checkbox" onChange={() => completeTodo(item.id)} />
        {item.name}
        <button onClick={() => deleteTodo(item.id)}>-X-</button>
      </li>
    );
  });

  let updateValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" value={inputValue} onChange={updateValue} />
        <input type="submit" />
      </form>
      <ul>{list}</ul>
    </div>
  );
}

export default App;