import React from "react";
import taskInputStyled from "./TaskInputStyle.module.scss";
type Props = {
  addTodo: () => void;
  changeValue: () => void;
};

function TaskInput({ addTodo, changeValue }: Props) {
  return (
    <div className={taskInputStyled["wrapTaskInput"]}>
      <input type="text" name="keySearch" id="" onChange={changeValue} />
      <button onClick={addTodo}>➕</button>
    </div>
  );
}

export default TaskInput;
