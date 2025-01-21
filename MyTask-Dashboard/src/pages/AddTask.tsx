import React, { useState, useContext } from 'react';
import TaskContext from '../context/TaskContext';
import { Task } from '../types/task';
import './AddTask.css'; // Assuming you will create a CSS file for AddTask styles

const AddTask: React.FC = () => {
  const context = useContext(TaskContext);
  if (!context) return null;

  const { dispatch } = context;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Low');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      priority,
      status: 'Pending',
    };
    dispatch({ type: 'ADD_TASK', payload: newTask });
    setTitle('');
    setDescription('');
    setPriority('Low');
  };

  return (
    <div className="add-task-container">
      <h2 className="add-task-header">Add New Task</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-textarea"
          />
        </div>

        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'Low' | 'Medium' | 'High')}
            className="form-select"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
