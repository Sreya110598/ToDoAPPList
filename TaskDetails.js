import React, { useState } from "react";
import { useParams } from "react-router-dom";

const TaskDetails = ({ tasks, onUpdate, onDelete }) => {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === parseInt(id));
  const [editedTask, setEditedTask] = useState({ ...task });

  if (!task) return <div className="text-danger">Task not found!</div>;

  const handleSave = () => {
    onUpdate(editedTask.id, editedTask.title, editedTask.description);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Task Details</h5>
        <p><strong>Title:</strong> {task.title}</p>
        <p><strong>Description:</strong> {task.description}</p>
        <p><strong>Status:</strong> {task.status}</p>
      </div>
      <div className="card-footer">
        <button onClick={handleSave} className="btn btn-primary btn-sm">Save</button>
        <button onClick={() => onDelete(task.id)} className="btn btn-danger btn-sm">Delete</button>
      </div>
    </div>
  );
};

export default TaskDetails;
