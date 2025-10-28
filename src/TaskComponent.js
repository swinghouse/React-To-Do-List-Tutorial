import React from 'react';

const TaskComponent = ({ task, id, handleDelete }) => {
  return (
    <div>
      <span>{task}     </span>
      <button id={id} onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default TaskComponent;
