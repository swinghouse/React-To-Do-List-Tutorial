import React, { Component } from 'react';

class TaskComponent extends Component {

  formatDeadline(deadline) {
    if (!deadline) return null;

    const date = new Date(deadline + 'T00:00:00'); // Add time to avoid timezone issues
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  getDeadlineStyle(deadline) {
    if (!deadline) return {};

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day

    const deadlineDate = new Date(deadline + 'T00:00:00');
    deadlineDate.setHours(0, 0, 0, 0);

    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      // Overdue - red
      return { color: '#d32f2f', fontWeight: 'bold' };
    } else if (diffDays === 0) {
      // Due today - orange
      return { color: '#f57c00', fontWeight: 'bold' };
    } else if (diffDays <= 3) {
      // Due soon (within 3 days) - yellow/amber
      return { color: '#f9a825', fontWeight: 'bold' };
    } else {
      // Future - green
      return { color: '#388e3c' };
    }
  }

  getDeadlineLabel(deadline) {
    if (!deadline) return '';

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const deadlineDate = new Date(deadline + 'T00:00:00');
    deadlineDate.setHours(0, 0, 0, 0);

    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return 'OVERDUE';
    } else if (diffDays === 0) {
      return 'DUE TODAY';
    } else if (diffDays === 1) {
      return 'DUE TOMORROW';
    } else {
      return `Due`;
    }
  }

  render() {
    const { task, deadline, id, handleDelete } = this.props;
    const deadlineStyle = this.getDeadlineStyle(deadline);
    const deadlineLabel = this.getDeadlineLabel(deadline);
    const formattedDate = this.formatDeadline(deadline);

    return (
      <div style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}>
        <span>{task}</span>
        {deadline && (
          <span style={{ marginLeft: '15px', ...deadlineStyle }}>
            {deadlineLabel}: {formattedDate}
          </span>
        )}
        <button
          id={id}
          onClick={() => handleDelete(id)}
          style={{ marginLeft: '15px' }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default TaskComponent;
