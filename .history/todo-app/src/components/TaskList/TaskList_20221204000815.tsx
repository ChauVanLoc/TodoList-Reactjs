import React from "react";

type Props = {
  title: string;
  // content;
};

function TaskList({ title }: Props) {
  return (
    <div>
      <div className="title">{title}</div>
      <div>
        <div>
          <div>
            <span></span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
