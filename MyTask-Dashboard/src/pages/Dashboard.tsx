import React, { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';
import './Dashboard.css'; // Assuming you will create a CSS file for Dashboard styles

const Dashboard: React.FC = () => {
  const context = useContext(TaskContext);
  if (!context) return null;

  const { tasks, dispatch } = context;
  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Pending' | 'Completed'>('All');

  const filteredTasks = tasks.filter((task) => {
    const matchesTitle = task.title.toLowerCase().includes(filter.toLowerCase());
    const matchesStatus = statusFilter === 'All' || task.status === statusFilter;
    return matchesTitle && matchesStatus;
  });

  return (
    <div className="dashboard-container">
      <h1 className="header">Task Management Dashboard</h1>

      {/* Search and Filter Section */}
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search tasks..."
          className="search-input"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select
          className="status-select"
          onChange={(e) => setStatusFilter(e.target.value as any)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Task List as a Table */}
      <div className="table-container">
        <table className="task-table">
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task, index) => (
              <tr key={task.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td>{task.priority}</td>
                <td className="actions">
                  {task.status === 'Pending' && (
                    <button
                      onClick={() =>
                        dispatch({
                          type: 'UPDATE_TASK',
                          payload: { id: task.id, status: 'Completed' },
                        })
                      }
                      className="action-button complete"
                    >
                      Mark as Completed
                    </button>
                  )}
                  <button
                    onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
                    className="action-button delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
