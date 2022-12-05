import React from "react";

type Props = {
  title: string;
};

function TaskList({ title }: Props) {
  return (
    <div>
      <div>{title}</div>
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
