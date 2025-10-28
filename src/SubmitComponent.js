import React from 'react';

const SubmitComponent = ({ text, handleChange, handleSubmit }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="enter task"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h1>{text}</h1>
    </div>
  );
};

export default SubmitComponent;
