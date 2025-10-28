import React, { useState } from 'react';
import TaskComponent from './TaskComponent';
import SubmitComponent from './SubmitComponent';

const App = () => {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState(['walk the dog', 'finish homework']);

  // Track changes in the text input
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    // Only add task if input is not empty or just whitespace
    if (text.trim() !== '') {
      setTasks([...tasks, text.trim()]);
      setText('');
    }
  };

  const handleDelete = (id) => {
    // Make a shallow copy of tasks and remove the item at index
    const copy = [...tasks];
    copy.splice(id, 1);
    setTasks(copy);
  };

  return (
    <div>
      <SubmitComponent
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        text={text}
      />

      {tasks.map((currTask, index) => {
        return (
          <TaskComponent
            key={index}
            task={currTask}
            id={index}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default App;
