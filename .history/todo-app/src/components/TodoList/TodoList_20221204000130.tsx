import React from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";

type Props = {};

function TodoList({}: Props) {
  return (
    <div>
      <TaskInput />
      <div>
        <TaskList title="Chưa hoàn thành" />
        <TaskList title="Hoàn thành" />
      </div>
    </div>
  );
}

export default TodoList;
