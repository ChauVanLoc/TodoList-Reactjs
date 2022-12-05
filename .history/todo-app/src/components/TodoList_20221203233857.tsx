import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

type Props = {};

function TodoList({}: Props) {
  return (
    <div>
      <TaskInput />
      <div>
        <TaskList title="Chưa hoàn thành" />
        <TaskList />
      </div>
    </div>
  );
}

export default TodoList;
