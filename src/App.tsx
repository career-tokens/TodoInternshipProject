import React, { useState } from 'react';
import { Task } from './types';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskListItem from './TaskListItem';
import TaskListHeader from './TaskListHeader';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const onAddTask = (taskName: string) => {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(), // Not a great way to generate IDs
        title: taskName,
        isCompleted: false,
        isEdited: false,
      },
    ]);
  };

  const onEditTask = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newTasks = [...tasks];
    for (let i = 0; i < newTasks.length; i++)
      if (newTasks[i].id == id) {
        newTasks[i].title = e.target.value;
        break;
      }
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <AddTask onAddTask={onAddTask} />
      <TaskList>
        <TaskListHeader count={tasks.length} />
        {tasks.map((task) => (
          <TaskListItem key={task.id} id={task.id} onEditTask={onEditTask}>
            {task.title}
          </TaskListItem>
        ))}
      </TaskList>
    </div>
  );
}

export default App;
