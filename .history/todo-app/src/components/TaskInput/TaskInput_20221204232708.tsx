import React from "react";
import taskInputStyled from "./TaskInputStyle.module.scss";
type Props = {
  addTodo: () => void;
};

function TaskInput({ addTodo }: Props) {
  const [input, setInput] = React.useState("");
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className={taskInputStyled.wrapTaskInput}>
      <input
        type="text"
        name="keySearch"
        value={input}
        onChange={changeValue}
      />
      <button onClick={addTodo}>➕</button>
    </div>
  );
}

export default TaskInput;
