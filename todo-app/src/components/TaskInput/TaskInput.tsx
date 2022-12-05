import React from "react";
import taskInputStyled from "./TaskInputStyle.module.scss";
type Props = {
  addTodo: (input: string) => void;
};

function TaskInput({ addTodo }: Props) {
  const [input, setInput] = React.useState("");
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className={taskInputStyled.wrapTaskInput}>
      <input
        type="text"
        name="keySearch"
        value={input}
        onChange={changeInput}
      />
      <button onClick={() => addTodo(input)}>➕</button>
    </div>
  );
}

export default TaskInput;
