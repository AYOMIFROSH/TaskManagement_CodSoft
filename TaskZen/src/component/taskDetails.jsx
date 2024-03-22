import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const TaskDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const task = location.state.task;

  // Now you can display the task details
  return (
    <div>
        <h2>{task.name}</h2>
        <p>{task.desc}</p>
        <p><b>Time remaining:</b> {Math.ceil((new Date(task.endDate) - new Date()) / (1000 * 60 * 60 * 24))} days</p>
    </div>
  );
};

export default TaskDetails;

