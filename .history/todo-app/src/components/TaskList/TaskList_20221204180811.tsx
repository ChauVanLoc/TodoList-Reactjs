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
      <div className={taskListStyled["wrapperContent"]}>
        <div className={taskListStyled["contents"]}>
          <div>
            <span></span>
          </div>
          <div className={taskListStyled["toolBox"]}>
            <span>✏️</span>
            <span>🗑️</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
