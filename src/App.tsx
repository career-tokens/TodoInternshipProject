import React, { useState } from 'react';
import { Task } from './types';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskListItem from './components/TaskListItem';
import TaskListHeader from './components/TaskListHeader';
import Layout from './layout';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const onAddTask = (taskName: string) => {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(), // Not a great way to generate IDs
        title: taskName,
        isCompleted: false,
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

  const onDeleteTask = (id: number) => {
    const newTasks = [...tasks];
    let i;
    for (i = 0; i < newTasks.length; i++)
      if (newTasks[i].id == id) {
        break;
      }
    newTasks.splice(i, 1);
    setTasks(newTasks);
  };

  return (
    <Layout>
      <div className="w-[90vw] sm:w-[400px] p-4 bg-[#1b1a41] text-white rounded">
        <h1 className="text-2xl text-center mb-2">Tasks</h1>
        <AddTask onAddTask={onAddTask} />
        <TaskList>
          <TaskListHeader count={tasks.length} />
          {tasks.map((task) => (
            <TaskListItem
              key={task.id}
              id={task.id}
              onEditTask={onEditTask}
              onDeleteTask={onDeleteTask}
            >
              {task.title}
            </TaskListItem>
          ))}
        </TaskList>
      </div>
    </Layout>
  );
}

export default App;
