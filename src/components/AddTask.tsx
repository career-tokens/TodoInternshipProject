import React, { useState } from 'react';

type AddTaskProps = {
  onAddTask: (taskName: string) => void;
};

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTaskName = taskName.trim();

    if (!trimmedTaskName) {
      return;
    }

    onAddTask(trimmedTaskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleAddTask} className="flex flex-col gap-y-2 mb-2">
      <label htmlFor="task-input">Add Task: </label>
      <input
        className="text-black outline-none rounded p-1"
        required
        id="task-input"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button className="bg-[#845afc] py-1 text-white rounded">Add</button>
    </form>
  );
}
