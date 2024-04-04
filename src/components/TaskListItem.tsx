import React from 'react';

interface TaskProps {
  children: string; // The task title
  id: number; // Unique identifier for the task
  onEditTask: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle task editing
  onDeleteTask: (id: number) => void; // Function to handle task editing
}

const TaskListItem: React.FC<TaskProps> = ({
  children,
  id,
  onEditTask,
  onDeleteTask,
}) => {
  return (
    <li key={id} className="mb-2">
      <div className="flex justify-between">
        <input
          type="text"
          className="border-none outline-none bg-[#845afc] text-white w-[80%] p-1 rounded"
          value={children}
          aria-label="edit-todo"
          onChange={(e) => onEditTask(id, e)}
        />
        <button
          className="bg-red-500 rounded p-1"
          onClick={() => {
            onDeleteTask(id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskListItem;
