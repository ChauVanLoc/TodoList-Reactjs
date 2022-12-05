import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

type Props = {};

function TodoList({}: Props) {
  return (
    <div>
      <TaskInput />
      <div>
        <TaskList title: string="Chưa hoàn thành" />
        <TaskList title: string="Hoàn thành" />
      </div>
    </div>
  );
}

export default TodoList;
