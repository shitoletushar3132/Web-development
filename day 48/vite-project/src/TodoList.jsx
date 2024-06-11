import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (newTodo !== "") {
      setTodos((prevTodo) => {
        return [...prevTodo, { task: newTodo, id: uuidv4() }];
      });
    }
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span>
              {todo.task}
              <button
                style={{ margin: "20px " }}
                onClick={() => deleteTask(todo.id)}
              >
                Delete Task
              </button>
              
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
