import React from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import TodoStyle from "./TodoListStyle.module.scss";

interface Todo {
  todoName: string;
  isFinish: boolean;
}
function TodoList() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const addTodo = () => {};
  return (
    <div className={TodoStyle["container"]}>
      <div className={TodoStyle["header"]}>To do list typescript</div>
      <TaskInput addTodo={addTodo} />
      <div>
        <TaskList title="Chưa hoàn thành" />
        <TaskList title="Hoàn thành" />
      </div>
    </div>
  );
}

export default TodoList;
