import React from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import TodosStyle from "./TodoListStyle.module.scss";

type Props = {};

function TodoList({}: Props) {
  return (
    <div className="">
      <TaskInput />
      <div>
        <TaskList title="Chưa hoàn thành" />
        <TaskList title="Hoàn thành" />
      </div>
    </div>
  );
}

export default TodoList;
