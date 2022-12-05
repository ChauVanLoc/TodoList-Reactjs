import React from "react";
import { Todo } from "../../@types/todo.type";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import TodoStyle from "./TodoListStyle.module.scss";

function TodoList() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const addTodo = (input: string) => {
    const newTodo: Todo = {
      todoName: input,
      isFinish: false,
    };
    setTodos((arr) => [...arr, newTodo]);
  };
  return (
    <div className={TodoStyle["container"]}>
      <div className={TodoStyle["header"]}>To do list typescript</div>
      <TaskInput addTodo={addTodo} />
      <div>
        <TaskList
          title="Chưa hoàn thành"
          listTodo={todos.filter((e) => e.isFinish === false)}
        />
        <TaskList
          title="Hoàn thành"
          listTodo={todos.filter((e) => e.isFinish === false)}
        />
      </div>
    </div>
  );
}

export default TodoList;
