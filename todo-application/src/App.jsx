import { useState } from "react";
import TodoItem from "./component/TodoItem";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAddTodo() {
    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText("");
  }

  function handleToggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="todo-app">
      <h1>My Todo App</h1>

      <div className="todo-input">
        <input
          type="text"
          value={text}
          placeholder="Enter a todo..."
          onChange={(event) => setText(event.target.value)}
        />

        <button onClick={handleAddTodo}>Add</button>
      </div>

      {todos.length === 0 ? (
        <p className="empty-message">No todos yet.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        ))
      )}
    </div>
  );
}

export default App;
