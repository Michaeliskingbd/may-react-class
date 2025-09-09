import { useEffect, useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  }); //Usestate for storing todos
  const [input, setInput] = useState(""); //Usestate for grabbing user input
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]); //Spread operator
    setInput("");
    console.log(newTodo);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow border rounded px-3 py-2"
        />
        <button
          onClick={addTodo}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 border rounded"
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer  ${
                todo.completed ? "text-red-500" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
//Json
//PARSE is to convert from Json
//STRINGIFY is to convert to Json
