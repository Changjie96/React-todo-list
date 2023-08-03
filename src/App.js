import NewTask from './components/NewTask'
import TaskColumn from './components/TaskColumn';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [tasks, setTasks] = useState([])
  const [tasksPending, setTasksPending] = useState([])
  const [tasksInProgress, setTasksInProgress] = useState([])
  const [tasksDone, setTasksDone] = useState([])

  useEffect(() => {
    setTasks([
      { id: 1, title: "Walk the dog", status: "doing" },
      { id: 2, title: "Drink some beer", status: "pending" },
      { id: 3, title: "Go to the gym", status: "pending" },
      { id: 4, title: "Wash the dishes", status: "pending"}
    ]);
  }, []);

  useEffect(() => {
    setTasksPending(tasks.filter((task) => task.status === 'pending'));
    setTasksInProgress(tasks.filter((task) => task.status === 'doing'));
    setTasksDone(tasks.filter((task) => task.status === 'done'));
  }, [tasks])

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  }


  const handleChangeStatus = (taskId, status) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task, status
          };
        } else {
          return task;
        }
      })
      return updatedTasks;
    })
  };

  return (
    <div className="App">
      <h1>My Task</h1>
      <NewTask />
      <div className="tasks-wrapper">
        <TaskColumn handleDeleteTask={handleDeleteTask} handleChangeStatus={handleChangeStatus} tasks={tasksPending} label="Pending"/>
        <TaskColumn handleDeleteTask={handleDeleteTask} handleChangeStatus={handleChangeStatus} tasks={tasksInProgress} label="In Progress"/>
        <TaskColumn handleDeleteTask={handleDeleteTask} handleChangeStatus={handleChangeStatus} tasks={tasksDone} label="Done"/>
      </div>
    </div>
  );
}

export default App;
