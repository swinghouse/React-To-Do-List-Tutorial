import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class SubmitComponent extends Component {

   handleFormSubmit = (event) => {
     event.preventDefault();
     this.props.handleSubmit();
   }

   render () {
     const deadline = this.props.deadline ? new Date(this.props.deadline) : null;
     
     return (
       <div>
         <form onSubmit={this.handleFormSubmit}>
           <input
             placeholder="enter task"
             type="text"
             value={this.props.text}
             onChange={this.props.handleChange}
           />
           <DatePicker
             selected={deadline}
             onChange={(date) => {
               const formattedDate = date ? date.toISOString().split('T')[0] : '';
               this.props.handleDateChange({ target: { value: formattedDate } });
             }}
             placeholderText="Select deadline"
             dateFormat="MMM dd, yyyy"
           />
           <button type="submit">Submit</button>
         </form>
         <h1>{this.props.text}</h1>
       </div>
     )
   };
};

export default SubmitComponent;
