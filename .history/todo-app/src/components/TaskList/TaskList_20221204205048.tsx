import React from "react";
import taskListStyled from "./TaskListStyle.module.scss";
type Props = {
  title: string;
  // content;
};

function TaskList({ title }: Props) {
  return (
    <div className={taskListStyled["content"]}>
      <div className={taskListStyled["title"]}>{title}</div>
      <div className={taskListStyled["wrapContent"]}>
        <div className={taskListStyled["row"]}>
          <div className={taskListStyled["todo"]}>
            <input type="checkbox" name="" id="" />
            <span>Learn English</span>
          </div>
          <div className={taskListStyled["toolBox"]}>
            <button>✏️</button>
            <button>🗑️</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
