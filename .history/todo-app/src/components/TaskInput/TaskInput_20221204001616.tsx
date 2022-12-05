import React from "react";

type Props = {};

function TaskInput({}: Props) {
  return (
    <div className="wrapTaskInput">
      <input type="text" name="keySearch" id="" />
      <button>➕</button>
    </div>
  );
}

export default TaskInput;
