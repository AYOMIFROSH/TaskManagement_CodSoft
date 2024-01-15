import React from 'react';

import { connect } from 'react-redux';

import { deleteTask } from '../Action/taskAction';

 

const TaskList = ({ tasks, deleteTask }) => {

  const handleDelete = (taskId) => {

    deleteTask(taskId);

  };

 

  return (

    <div>

      <h1>Task List</h1>

      {tasks.map(task => (

        <div key={task.id}>

          <p>{task.title}</p>

          <button onClick={() => handleDelete(task.id)}>Delete</button>

        </div>

      ))}

    </div>

  );

};

 

const mapStateToProps = (state) => {

  return {

    tasks: state.tasks

  };

};

 

export default connect(mapStateToProps, { deleteTask })(TaskList);