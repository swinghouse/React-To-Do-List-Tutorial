import React, { Component } from 'react';
import TaskComponent from './TaskComponent';
import SubmitComponent from './SubmitComponent';

class App extends Component {

   constructor(props){
    super(props);
    this.state = {
      text: '',
      deadline: '',
      tasks: [
        { text: 'walk the dog', deadline: '2025-12-25' },
        { text: 'finish homework', deadline: '2025-12-22' }
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
   };

   //track changes in the text bar
   handleChange(event) {
    this.setState({text: event.target.value});
   }

   //track changes in the date picker
   handleDateChange(event) {
    this.setState({deadline: event.target.value});
   }

   handleSubmit (){
    // Only add task if input is not empty or just whitespace
    if (this.state.text.trim() !== '') {
      const newTask = {
        text: this.state.text.trim(),
        deadline: this.state.deadline
      };
      this.setState({
        tasks: [...this.state.tasks, newTask],
        text: '',
        deadline: ''
      });
    }
   };

   handleDelete (id){
     //make a shallow copy of state
     let copy = [...this.state.tasks];
     copy.splice(id, 1);
     this.setState({tasks:copy});
   };

   render () {

    return (
      <div>
      <SubmitComponent
        handleChange={this.handleChange}
        handleDateChange={this.handleDateChange}
        handleSubmit={this.handleSubmit}
        text={this.state.text}
        deadline={this.state.deadline}
      />

      {this.state.tasks.map((currTask, index) => {
        return (
          <TaskComponent
            key={index}
            task={currTask.text}
            deadline={currTask.deadline}
            id={index}
            handleDelete={this.handleDelete}
          />
        );
      })}

      </div>
    )
  }
};


export default App;
