import "./TaskColumn.css"
import {BsListTask} from "react-icons/bs"
import Task from "./Task"

const TaskColumn = ({ label, tasks, handleChangeStatus, handleDeleteTask }) => {
  return (
    <div className="task-col">
      <h2 className="task-col-header">
        <BsListTask />
        {label}
      </h2>
      <div className="tasks">
        {
          tasks.length ?
          tasks.map((task) => <Task handleChangeStatus={handleChangeStatus} handleDeleteTask={handleDeleteTask} key={task.id} task={task}/>) :
          <p>No task {label}!</p>
        }
      </div>
    </div>

  )
}

export default TaskColumn
