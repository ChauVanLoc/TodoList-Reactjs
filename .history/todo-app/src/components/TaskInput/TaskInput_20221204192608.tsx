import React from "react";
import taskInputStyled from "./TaskInputStyle.module.scss";
type Props = {};

function TaskInput({}: Props) {
  return (
    <form className={taskInputStyled["wrapTaskInput"]}>
      <input type="text" name="keySearch" id="" />
      <input type="submit">➕</input>
    </form>
  );
}

export default TaskInput;
