import React from 'react';

interface TaskProps {
  children: string; // The task title
  id: number; // Unique identifier for the task
  onEditTask: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle task editing
}

const TaskListItem: React.FC<TaskProps> = ({ children, id, onEditTask }) => {
  return (
    <li key={id}>
      <input
        type="text"
        className="border-none outline-none"
        value={children}
        aria-label="edit-todo"
        onChange={(e) => onEditTask(id, e)}
      />
    </li>
  );
};

export default TaskListItem;
