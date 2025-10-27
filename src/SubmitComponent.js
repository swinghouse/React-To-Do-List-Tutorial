import React, { Component } from 'react';

class SubmitComponent extends Component {

   handleFormSubmit = (event) => {
     event.preventDefault();
     this.props.handleSubmit();
   }

   render () {
     return (
       <div>
         <form onSubmit = {this.handleFormSubmit}>
           <input placeholder = "enter task" type="text" value = {this.props.text} onChange = {this.props.handleChange} />
           <button type="submit">Submit</button>
         </form>
         <h1>{this.props.text}</h1>
       </div>
     )
   };
// test
};

export default SubmitComponent;
