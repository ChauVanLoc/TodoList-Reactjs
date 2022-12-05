import React from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import TodoStyle from "./TodoListStyle.module.scss";

type Props = {};

function TodoList({}: Props) {
  return (
    <div className={TodoStyle["container"]}>
      <TaskInput />
      <div>
        <TaskList title="Chưa hoàn thành" />
        <TaskList title="Hoàn thành" />
      </div>
    </div>
  );
}

export default TodoList;
