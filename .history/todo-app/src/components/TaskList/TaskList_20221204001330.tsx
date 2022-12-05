import React from "react";

type Props = {
  title: string;
  // content;
};

function TaskList({ title }: Props) {
  return (
    <div>
      <div className="title">{title}</div>
      <div className="wrapperContent">
        <div className="contents">
          <div>
            <span></span>
          </div>
          <div className="toolBox">
            <span>✏️</span>
            <span>🗑️</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
