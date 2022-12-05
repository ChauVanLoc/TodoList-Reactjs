import React from "react";

type Props = {
  title: string;
};

function TaskList({ title }: Props) {
  return (
    <div>
      <div>{title}</div>
    </div>
  );
}

export default TaskList;
