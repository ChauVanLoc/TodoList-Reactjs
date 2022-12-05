import React from "react";
import taskInputStyled from "./TaskInputStyle.module.scss";
type Props = {
  addTodo: () => void;
  changeValue: () => void;
};

function TaskInput({}: Props) {
  return (
    <div className={taskInputStyled["wrapTaskInput"]}>
      <input type="text" name="keySearch" id="" onChange={add} />
      <button>➕</button>
    </div>
  );
}

export default TaskInput;
